import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Snappy",
  description:
    "How Snappy collects, uses, and protects your information when you use our Mac AI assistant.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[var(--bg)] px-6 py-16 text-[15px] leading-[1.65] tracking-[-0.3px] text-[var(--muted)] sm:py-20">
      <article className="mx-auto max-w-[640px]">
        <h1 className="mb-2 text-center text-[28px] font-black tracking-[-1px] text-[var(--fg)] sm:text-[34px]">
          Privacy policy
        </h1>
        <p className="mb-12 text-center text-[13px] text-[var(--muted)]">
          Last updated: May 2, 2026
        </p>

        <section className="mb-10">
          <h2 className="mb-3 text-[17px] font-bold text-[var(--fg)]">
            1. What this covers
          </h2>
          <p>
            This policy describes how Snappy (&ldquo;we,&rdquo; &ldquo;us&rdquo;)
            handles information when you use our website, waitlist, downloads, or
            related services (together, the &ldquo;Services&rdquo;). By using the
            Services, you agree to this policy.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="mb-3 text-[17px] font-bold text-[var(--fg)]">
            2. Information we collect
          </h2>
          <p className="mb-3">
            Depending on how you interact with Snappy, we may process:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <span className="text-[var(--fg)]">Account and contact data</span> you
              provide (for example, email or name) when you sign up, join a
              waitlist, or contact us.
            </li>
            <li>
              <span className="text-[var(--fg)]">Usage and device data</span> such as
              app or site interactions, diagnostics, crash reports, and general
              technical information (OS version, approximate location from IP,
              timestamps).
            </li>
            <li>
              <span className="text-[var(--fg)]">Content you submit</span> to the AI
              features (for example, prompts, audio when using voice, or screen
              context the product is designed to access)—so we can provide
              answers and improve reliability and safety.
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="mb-3 text-[17px] font-bold text-[var(--fg)]">
            3. How we use information
          </h2>
          <p className="mb-3">We use the information above to:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Operate, secure, and improve Snappy and the Services;</li>
            <li>Provide AI-assisted responses and features you request;</li>
            <li>
              Communicate with you (product updates, support, transactional
              messages);
            </li>
            <li>Comply with law and enforce our terms.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="mb-3 text-[17px] font-bold text-[var(--fg)]">
            4. Sharing
          </h2>
          <p>
            We do not sell your personal information. We may share data with
            vendors who help us run the Services (hosting, analytics, AI model
            providers, email) under contracts that limit how they use it. We may
            also disclose information if required by law or to protect rights,
            safety, and security.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="mb-3 text-[17px] font-bold text-[var(--fg)]">
            5. Retention and security
          </h2>
          <p>
            We keep information only as long as needed for the purposes above,
            unless a longer period is required by law. We use reasonable
            technical and organizational safeguards, but no method of storage or
            transmission is completely secure.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="mb-3 text-[17px] font-bold text-[var(--fg)]">
            6. Your choices and rights
          </h2>
          <p>
            Where applicable law provides rights (access, correction, deletion,
            opt-out of certain processing), you can contact us as below. You may
            be able to adjust some preferences in the product or your device
            settings.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="mb-3 text-[17px] font-bold text-[var(--fg)]">
            7. Children
          </h2>
          <p>
            The Services are not directed at children under 13, and we do not
            knowingly collect their personal information.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="mb-3 text-[17px] font-bold text-[var(--fg)]">
            8. International users
          </h2>
          <p>
            If you use the Services from outside your home country, your
            information may be processed in countries with different data
            protection laws.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="mb-3 text-[17px] font-bold text-[var(--fg)]">
            9. Changes and contact
          </h2>
          <p className="mb-3">
            We may update this policy from time to time. The &ldquo;Last
            updated&rdquo; date will change when we post revisions.
          </p>
          <p>
            Questions? Reach out on{" "}
            <a
              href="https://x.com/codewithrobu"
              className="text-[var(--fg)] underline underline-offset-2 transition-colors hover:text-[var(--muted)]"
              target="_blank"
              rel="noopener noreferrer"
            >
              @codewithrobu on X
            </a>
            .
          </p>
        </section>

        <p className="text-center">
          <Link
            href="/"
            className="text-[13px] text-[var(--muted)] underline underline-offset-2 transition-colors hover:text-[var(--fg)]"
          >
            Back home
          </Link>
        </p>
      </article>
    </div>
  );
}
