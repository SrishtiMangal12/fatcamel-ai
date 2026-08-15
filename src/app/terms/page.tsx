import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Fatcamel AI",
};

export default function TermsPage() {
  return (
    <section className="px-6 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-2xl">
        <h1 className="font-display text-3xl font-semibold text-slate-50">Terms of Service</h1>
        <p className="mt-2 text-xs text-slate-500">Last updated August 2026</p>
        <div className="mt-10 space-y-6 text-sm leading-relaxed text-slate-400">
          <p>
            These terms govern your use of the Fatcamel AI website and, where applicable, form part of the master
            services agreement for any deployed agent engagement.
          </p>
          <h2 className="font-display text-lg font-semibold text-slate-100">Use of the website</h2>
          <p>
            You agree to use this website only for lawful purposes and in a way that does not infringe the rights
            of, or restrict or inhibit the use of, this site by any third party.
          </p>
          <h2 className="font-display text-lg font-semibold text-slate-100">Service engagements</h2>
          <p>
            Specific deliverables, timelines, and pricing for agent deployment engagements are governed by a
            separate signed statement of work, not by this page.
          </p>
          <h2 className="font-display text-lg font-semibold text-slate-100">Limitation of liability</h2>
          <p>
            Fatcamel AI is not liable for indirect or consequential damages arising from use of this website, to the
            fullest extent permitted by law.
          </p>
          <h2 className="font-display text-lg font-semibold text-slate-100">Contact</h2>
          <p>Questions about these terms can be sent to legal@fatcamel.ai.</p>
        </div>
      </div>
    </section>
  );
}
