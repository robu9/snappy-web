"use client";

import { motion } from "framer-motion";

export function FeaturesSection() {
  return (
    <motion.p
      className="mx-auto mb-4 max-w-[520px] text-[15px] leading-[1.6] tracking-[-0.3px] text-[var(--muted)] sm:text-[17px]"
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      snappy sits right next to your cursor and sees everything you see. ask a
      question out loud and it walks you through whatever you&apos;re working
      on. or spawn an agent to build, research, or do whatever for you in the
      background.
    </motion.p>
  );
}
