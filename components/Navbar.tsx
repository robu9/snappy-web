"use client";

import { useEffect, useRef, useState } from "react";

export function Navbar() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    if (savedTheme === "dark" || savedTheme === "light") {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, []);

  function onToggleTheme() {
    const nextTheme = theme === "light" ? "dark" : "light";
    const applyTheme = () => {
      setTheme(nextTheme);
      document.documentElement.setAttribute("data-theme", nextTheme);
      window.localStorage.setItem("theme", nextTheme);
    };

    const rect = buttonRef.current?.getBoundingClientRect();
    const x = rect ? rect.left + rect.width / 2 : window.innerWidth - 40;
    const y = rect ? rect.top + rect.height / 2 : 40;

    const maxX = Math.max(x, window.innerWidth - x);
    const maxY = Math.max(y, window.innerHeight - y);
    const endRadius = Math.hypot(maxX, maxY);
    const wave = document.createElement("span");

    wave.style.position = "fixed";
    wave.style.left = `${x}px`;
    wave.style.top = `${y}px`;
    wave.style.width = "18px";
    wave.style.height = "18px";
    wave.style.borderRadius = "9999px";
    wave.style.pointerEvents = "none";
    wave.style.transform = "translate(-50%, -50%) scale(0)";
    wave.style.transformOrigin = "center";
    wave.style.zIndex = "9999";
    wave.style.background = "transparent";
    wave.style.border = `3px solid ${
      theme === "light" ? "#111111" : "#ffffff"
    }`;
    wave.style.opacity = "0.95";
    wave.style.transition =
      "transform 1300ms cubic-bezier(0.22, 1, 0.36, 1), opacity 1300ms cubic-bezier(0.22, 1, 0.36, 1)";

    document.body.appendChild(wave);

    requestAnimationFrame(() => {
      wave.style.transform = `translate(-50%, -50%) scale(${endRadius / 9})`;
      wave.style.opacity = "0";
    });

    window.setTimeout(() => {
      applyTheme();
    }, 90);

    window.setTimeout(() => {
      wave.remove();
    }, 1350);
  }

  return (
    <nav className="fixed right-4 top-4 z-[80] pointer-events-auto sm:right-6 sm:top-6">
      <button
        ref={buttonRef}
        type="button"
        onClick={onToggleTheme}
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--card-border)] bg-[var(--card-bg)] text-[var(--fg)] shadow-[0_2px_10px_rgba(0,0,0,0.12)] ring-1 ring-black/5 transition-opacity hover:opacity-85"
        aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
        title={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="M4.93 4.93l1.41 1.41" />
          <path d="M17.66 17.66l1.41 1.41" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="M4.93 19.07l1.41-1.41" />
          <path d="M17.66 6.34l1.41-1.41" />
        </svg>
      </button>
    </nav>
  );
}
