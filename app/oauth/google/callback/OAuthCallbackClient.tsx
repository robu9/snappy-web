"use client";

import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

/** Must match Electron `buildOAuthReturnDeepLink` (triple slash → pathname `/oauth/google/callback`). */
function buildAppReturnUrl(code: string): string {
  const u = new URL("com.snappy.companion:///oauth/google/callback");
  u.searchParams.set("code", code);
  return u.toString();
}

export function OAuthCallbackClient() {
  const searchParams = useSearchParams();
  const code = searchParams.get("code");
  const oauthError = searchParams.get("error");
  const errorDetail =
    searchParams.get("error_description") ?? oauthError ?? "Something went wrong with Google.";

  useEffect(() => {
    if (!code || oauthError) {
      return;
    }
    const redirect = window.setTimeout(() => {
      window.location.href = buildAppReturnUrl(code);
    }, 2200);
    return () => window.clearTimeout(redirect);
  }, [code, oauthError]);

  if (oauthError) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-[#fafafa] px-6">
        <div className="max-w-md rounded-2xl border border-red-100 bg-white px-8 py-10 text-center shadow-sm">
          <p className="text-[15px] font-bold text-neutral-900">Sign-in didn&apos;t finish</p>
          <p className="mt-3 text-[14px] leading-relaxed text-neutral-600">{errorDetail}</p>
          <p className="mt-6 text-[13px] text-neutral-400">Close this tab and try again from the Snappy app.</p>
        </div>
      </div>
    );
  }

  if (!code) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-[#fafafa] px-6">
        <p className="max-w-md text-center text-[15px] text-neutral-600">
          Nothing to sign in here. Open Snappy and use &quot;Continue with Google&quot; from the app.
        </p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-linear-to-b from-[#fafafa] to-[#f0f0f0] px-6">
      <motion.div
        className="relative w-full max-w-[380px] overflow-hidden rounded-2xl border border-black/6 bg-white px-10 py-12 shadow-[0_24px_80px_-32px_rgba(0,0,0,0.35)]"
        initial={{ opacity: 0, y: 18, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex flex-col items-center">
          <motion.div
            className="mb-8 flex h-[92px] w-[92px] items-center justify-center rounded-2xl bg-linear-to-br from-[#ecfdf5] to-[#d1fae5] shadow-inner"
            initial={{ scale: 0.88, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.08, duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.svg
              viewBox="0 0 48 48"
              className="h-14 w-14 text-emerald-600"
              aria-hidden
            >
              <motion.path
                d="M12 24.5l9 9 15-18"
                fill="none"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ delay: 0.35, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              />
            </motion.svg>
          </motion.div>

          <motion.p
            className="text-[13px] font-bold uppercase tracking-[2px] text-neutral-400"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.35 }}
          >
            Snappy
          </motion.p>
          <motion.h1
            className="mt-3 text-center text-[26px] font-black tracking-[-0.5px] text-neutral-900"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            Sign in completed
          </motion.h1>
          <motion.p
            className="mt-4 text-center text-[15px] leading-relaxed text-neutral-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.85, duration: 0.35 }}
          >
            You&apos;re all set. We&apos;re sending you back to the desktop app — you can close this tab once Snappy opens.
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}
