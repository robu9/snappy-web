"use client";

import { useEffect, useRef, useState } from "react";

export function Navbar() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    if (savedTheme === "dark" || savedTheme === "light") {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else {
      setTheme("dark");
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }, []);

  function onToggleTheme() {
    const nextTheme = theme === "light" ? "dark" : "light";


    const rect = buttonRef.current?.getBoundingClientRect();
    const x = rect ? rect.left + rect.width / 2 : window.innerWidth - 40;
    const y = rect ? rect.top + rect.height / 2 : 40;

    document.documentElement.style.setProperty("--x", `${x}px`);
    document.documentElement.style.setProperty("--y", `${y}px`);

    const applyTheme = () => {
      setTheme(nextTheme);
      document.documentElement.setAttribute("data-theme", nextTheme);
      window.localStorage.setItem("theme", nextTheme);
    };

    if (!(document as any).startViewTransition) {
      applyTheme();
      return;
    }

    (document as any).startViewTransition(() => {
      applyTheme();
    });
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
