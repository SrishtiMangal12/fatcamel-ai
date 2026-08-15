import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Fatcamel AI",
};

export default function PrivacyPage() {
  return (
    <section className="px-6 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-2xl">
        <h1 className="font-display text-3xl font-semibold text-slate-50">Privacy Policy</h1>
        <p className="mt-2 text-xs text-slate-500">Last updated August 2026</p>
        <div className="mt-10 space-y-6 text-sm leading-relaxed text-slate-400">
          <p>
            Fatcamel AI ("we," "us") provides this policy to explain how we collect, use, and protect information
            when you use our website and agent deployment services.
          </p>
          <h2 className="font-display text-lg font-semibold text-slate-100">Information we collect</h2>
          <p>
            We collect information you provide directly, such as your name, email, and project details submitted
            through our contact form, as well as usage data collected automatically when you browse our site.
          </p>
          <h2 className="font-display text-lg font-semibold text-slate-100">How we use information</h2>
          <p>
            We use the information we collect to respond to inquiries, deliver and improve our services, and send
            product updates you've opted in to receive. We do not sell your personal information.
          </p>
          <h2 className="font-display text-lg font-semibold text-slate-100">Data processed by agents</h2>
          <p>
            For client deployments, agents process data strictly within the scope defined in each engagement's data
            processing agreement, with configurable residency and retention settings.
          </p>
          <h2 className="font-display text-lg font-semibold text-slate-100">Contact</h2>
          <p>Questions about this policy can be sent to privacy@fatcamel.ai.</p>
        </div>
      </div>
    </section>
  );
}
