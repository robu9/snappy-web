import Link from "next/link";

const linkClass =
  "underline underline-offset-2 transition-colors hover:text-[var(--fg)]";

export function Footer() {
  return (
    <footer className="shrink-0 space-y-1.5 pb-6 pt-2 text-center">
      <p className="text-[13px] tracking-[-0.3px] text-[var(--muted)]">
        <Link className={linkClass} href="/privacy">
          privacy
        </Link>
        <span className="mx-2 text-[var(--muted-2)]" aria-hidden>
          ·
        </span>
        made by{" "}
        <a
          className={linkClass}
          href="https://x.com/codewithrobu"
          target="_blank"
          rel="noopener noreferrer"
        >
          @codewithrobu
        </a>{" "}
        &lt;3
      </p>
      <p className="text-[12px] tracking-[-0.2px] text-[var(--muted-2)]">
        windows app inspired by{" "}
        <a
          className={`${linkClass} decoration-[var(--muted-2)] hover:decoration-[var(--fg)]`}
          href="https://x.com/FarzaTV"
          target="_blank"
          rel="noopener noreferrer"
        >
          @FarzaTV
        </a>
        &apos;s clicky
      </p>
    </footer>
  );
}
