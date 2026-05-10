import Link from "next/link";

export function Footer() {
  return (
    <footer className="pb-8 text-center">
      <p className="text-[13px] tracking-[-0.3px] text-[var(--muted)]">
        made by{" "}
        <a
          className="underline underline-offset-2 transition-colors hover:text-[var(--fg)]"
          href="https://x.com/codewithrobu"
          target="_blank"
          rel="noopener noreferrer"
        >
          @codewithrobu
        </a>{" "}
        &lt;3
      </p>
      <p className="mt-2 text-[13px] tracking-[-0.3px] text-[var(--muted)]">
        <Link
          className="underline underline-offset-2 transition-colors hover:text-[var(--fg)]"
          href="/privacy"
        >
          privacy
        </Link>
      </p>
    </footer>
  );
}
