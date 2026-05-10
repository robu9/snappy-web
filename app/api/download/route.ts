/**
 * GET /api/download
 *
 * Server-side redirect to the latest Snappy Windows installer (.exe) from
 * the GitHub Releases page of the snappy-web repo.
 *
 * Why server-side?
 *   - Keeps any future GitHub token out of the browser / client bundle.
 *   - Allows us to cache the GitHub API response (5 min) so we don't hit
 *     rate limits even under heavy traffic.
 *   - The repo + releases are public, so no token is required right now.
 *
 * Release workflow (manual):
 *   1. npm run package  →  produces release/Snappy Setup X.Y.Z.exe
 *   2. Edit release/latest.yml  →  set url to the absolute GitHub asset URL
 *   3. Upload latest.yml + .blockmap to heysnappy.tech/updates/win/ (public/ dir)
 *   4. Create a GitHub Release on the snappy-web repo, attach the .exe
 */

import { NextResponse } from 'next/server'

const GITHUB_OWNER = 'robu9'
const GITHUB_REPO = 'snappy-web'
const GITHUB_API_URL = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/releases/latest`

export const revalidate = 300 // Cache the GitHub API response for 5 minutes

export async function GET() {
  try {
    const res = await fetch(GITHUB_API_URL, {
      headers: {
        Accept: 'application/vnd.github+json',
        'User-Agent': 'heysnappy.tech/download-redirect',
        'X-GitHub-Api-Version': '2022-11-28',
        // Uncomment and set GITHUB_TOKEN in Vercel env vars if the repo ever
        // goes private and you need authenticated asset downloads:
        // ...(process.env.GITHUB_TOKEN
        //   ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
        //   : {}),
      },
      next: { revalidate: 300 },
    })

    if (!res.ok) {
      console.error(`[download] GitHub API responded ${res.status}`)
      return NextResponse.json(
        { error: 'Could not fetch release info from GitHub.' },
        { status: 502 }
      )
    }

    const release = (await res.json()) as {
      assets?: Array<{ name: string; browser_download_url: string }>
    }

    const exeAsset = release.assets?.find((a) => a.name.endsWith('.exe'))

    if (!exeAsset) {
      return NextResponse.json(
        { error: 'No Windows installer found in the latest release.' },
        { status: 404 }
      )
    }

    // 307 Temporary Redirect — browser follows to the GitHub CDN asset URL
    return NextResponse.redirect(exeAsset.browser_download_url, { status: 307 })
  } catch (err) {
    console.error('[download] Unexpected error:', err)
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 })
  }
}
