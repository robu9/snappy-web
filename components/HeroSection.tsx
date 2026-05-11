"use client";

import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
};

export function HeroSection() {
  return (
    <>
      <motion.p
        className="mb-5 text-[13px] uppercase tracking-[1.5px] text-[var(--muted-2)]"
        {...fadeUp}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        meet snappy
      </motion.p>
      <motion.h1
        className="mx-auto mb-5 max-w-[17ch] text-[44px] font-black leading-[1.05] tracking-[-2.2px] text-[var(--fg)] sm:text-[64px]"
        {...fadeUp}
        transition={{ duration: 0.5, delay: 0.04, ease: [0.22, 1, 0.36, 1] }}
      >
        an ai that lives on your desktop.
      </motion.h1>
    </>
  );
}
