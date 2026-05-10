"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export function CTASection() {
  const [downloading, setDownloading] = useState(false);

  function onDownloadClick() {
    setDownloading(true);
    // Navigate to our server-side redirect which resolves to the latest
    // GitHub Release asset.  We use window.location so the browser handles
    // the download natively (including large-file progress in the OS).
    window.location.href = "/api/download";
    // Reset the button label after a short delay so the user can click again
    // if they accidentally dismissed the download prompt.
    setTimeout(() => setDownloading(false), 4000);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex flex-col items-center">
        <button
          type="button"
          disabled={downloading}
          onClick={onDownloadClick}
          className="inline-flex items-center justify-center gap-2.5 rounded-md border border-[var(--card-border)] bg-[var(--cta-bg)] px-8 py-4 text-[15px] font-bold tracking-[-0.3px] text-[var(--cta-fg)] transition-opacity duration-300 enabled:cursor-pointer enabled:opacity-100 disabled:cursor-default disabled:opacity-60"
        >
          <AnimatePresence mode="wait" initial={false}>
            {downloading ? (
              <motion.span
                key="downloading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                Starting download…
              </motion.span>
            ) : (
              <motion.span
                key="idle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="flex items-center gap-2"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
                </svg>
                Download for Windows
              </motion.span>
            )}
          </AnimatePresence>
        </button>

        <p className="mt-4 text-[13px] tracking-[-0.3px] text-[var(--muted-2)]">
          on mac?{" "}
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 transition-colors hover:text-[var(--fg)]"
          >
            join the waitlist
          </a>
        </p>
      </div>
    </motion.div>
  );
}
