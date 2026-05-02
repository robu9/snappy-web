"use client";

import { useCallback, useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const spring = { damping: 28, stiffness: 320, mass: 0.35 };

export function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, spring);
  const sy = useSpring(y, spring);

  const move = useCallback(
    (clientX: number, clientY: number) => {
      x.set(clientX);
      y.set(clientY);
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
      <motion.div style={{ x: sx, y: sy, translateX: -4, translateY: -2 }}>
        <svg
          width="14"
          height="16"
          viewBox="0 0 12 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            filter:
              "drop-shadow(0 0 6px rgba(59, 130, 246, 0.7)) drop-shadow(0 0 14px rgba(59, 130, 246, 0.4))",
          }}
        >
          <path d="M1 1L11 7L1 13V1Z" fill="#3b82f6" />
        </svg>
      </motion.div>
    </div>
  );
}
