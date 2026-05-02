"use client";

import { motion } from "framer-motion";
import { PROMPT_EXAMPLES } from "@/lib/prompts";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.06, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.42,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export function PromptExamples() {
  return (
    <div className="mx-auto mt-12 max-w-[700px] px-6 text-center sm:mt-16">
      <motion.div
        className="mx-auto grid max-w-[560px] gap-3 text-left sm:grid-cols-2"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {PROMPT_EXAMPLES.map((text) => (
          <motion.div
            key={text}
            variants={item}
            className="rounded-lg border border-[#f0f0f0] bg-[#fafafa] px-4 py-3.5 text-[14px] tracking-[-0.3px] text-[#888888] sm:text-[15px]"
          >
            &quot;{text}&quot;
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
