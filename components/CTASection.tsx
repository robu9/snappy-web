"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

const COMING_SOON_MS = 2800;

export function CTASection() {
  const [email, setEmail] = useState("");
  const [showComingSoon, setShowComingSoon] = useState(false);
  const hideTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const enabled = useMemo(() => isValidEmail(email), [email]);

  useEffect(() => {
    return () => {
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    };
  }, []);

  function onDownloadClick() {
    if (!enabled) return;
    setShowComingSoon(true);
    if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    hideTimeoutRef.current = setTimeout(() => {
      setShowComingSoon(false);
      hideTimeoutRef.current = null;
    }, COMING_SOON_MS);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex flex-col items-center">
        <form
          className="flex flex-col items-center gap-3 sm:inline-flex sm:flex-row sm:gap-2"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            name="email"
            autoComplete="email"
            placeholder="enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full max-w-[300px] rounded-md border border-[#e0e0e0] bg-[#fafafa] px-5 py-3.5 text-center text-[15px] tracking-[-0.3px] text-black outline-none transition-colors focus:border-[#999999] placeholder:text-[#bbbbbb] sm:w-[240px]"
          />
          <button
            type="button"
            disabled={!enabled}
            onClick={onDownloadClick}
            className="inline-flex w-full max-w-[300px] items-center justify-center gap-2.5 rounded-md border-none bg-black px-7 py-4 text-[15px] font-bold tracking-[-0.3px] text-white transition-opacity duration-300 sm:w-auto enabled:cursor-pointer enabled:opacity-100 disabled:cursor-default disabled:opacity-50"
          >
            download
          </button>
        </form>

        <AnimatePresence>
          {showComingSoon && (
            <motion.div
              role="status"
              aria-live="polite"
              initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -4, filter: "blur(4px)" }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="pointer-events-none mt-3 w-max max-w-[min(340px,calc(100vw-2rem))] rounded-full border border-[#eaeaea] bg-white px-5 py-2.5 text-center text-[14px] font-semibold tracking-[-0.25px] text-black shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
            >
              Coming soon — hang tight!
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <p className="mt-4 text-[13px] tracking-[-0.3px] text-[#aaaaaa]">
        on mac?{" "}
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 transition-colors hover:text-black"
        >
          join the waitlist
        </a>
      </p>
    </motion.div>
  );
}
