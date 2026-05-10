import { Suspense } from "react";
import { OAuthCallbackClient } from "./OAuthCallbackClient";

function OAuthFallback() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#fafafa]">
      <p className="text-[14px] text-neutral-500">Loading…</p>
    </div>
  );
}

export default function GoogleOAuthCallbackPage() {
  return (
    <Suspense fallback={<OAuthFallback />}>
      <OAuthCallbackClient />
    </Suspense>
  );
}
