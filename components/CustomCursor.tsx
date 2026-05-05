"use client";

import { useCallback, useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CURSOR_FOLLOW_OFFSET_X = 35;
const CURSOR_FOLLOW_OFFSET_Y = 25;
const spring = { damping: 28, stiffness: 320, mass: 0.35 };

export function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, spring);
  const sy = useSpring(y, spring);

  const move = useCallback(
    (clientX: number, clientY: number) => {
      x.set(clientX + CURSOR_FOLLOW_OFFSET_X);
      y.set(clientY + CURSOR_FOLLOW_OFFSET_Y);
    },
    [x, y],
  );

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setVisible(true);
      move(e.clientX, e.clientY);
    };
    const onLeave = () => setVisible(false);
    window.addEventListener("mousemove", onMove);
    document.body.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.body.removeEventListener("mouseleave", onLeave);
    };
  }, [move]);

  return (
    <div
      className="pointer-events-none fixed left-0 top-0 z-50 hidden sm:block"
      style={{
        opacity: visible ? 1 : 0,
        transition: "opacity 0.3s ease",
        willChange: "transform",
      }}
    >
      <motion.div style={{ x: sx, y: sy }}>
        <div className="-translate-x-1/2 -translate-y-1/2">
          <svg
            width="14"
            height="16"
            viewBox="0 0 12 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              filter:
                "drop-shadow(0 0 6px rgb(var(--cursor-accent-channels) / 0.75)) drop-shadow(0 0 14px rgb(var(--cursor-accent-channels) / 0.45))",
            }}
          >
            <path d="M1 1L11 7L1 13V1Z" fill="var(--cursor-accent)" />
          </svg>
        </div>
      </motion.div>
    </div>
  );
}
