import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        // electron-updater requests the .exe by filename from the publish base URL.
        // Rewrite to /api/download which 307-redirects to the GitHub Release asset.
        source: "/updates/win/:filename(.*\\.exe)",
        destination: "/api/download",
      },
    ];
  },
};

export default nextConfig;
