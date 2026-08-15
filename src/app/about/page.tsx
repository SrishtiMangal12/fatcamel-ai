import type { Metadata } from "next";
import { ShieldCheck, Target, Compass, Users2, Lock, FileCheck2 } from "lucide-react";

export const metadata: Metadata = {
  title: "About — Fatcamel AI",
  description: "Fatcamel AI's mission, values, leadership, and enterprise security posture.",
};

const values = [
  { icon: Target, title: "Outcomes over demos", description: "We measure success in hours recovered and cases resolved, not features shipped." },
  { icon: Compass, title: "Human-in-command", description: "Agents execute; people decide. Every deployment ships with clear escalation paths." },
  { icon: ShieldCheck, title: "Boringly reliable", description: "Agents should be the most predictable part of your stack, not the least." },
  { icon: Users2, title: "Embedded, not outsourced", description: "We work inside your team's actual workflows, not a sandbox that never ships." },
];

const leadership = [
  { name: "Elena Sokolova", role: "Co-Founder & CEO", bio: "Previously led operations engineering at a Series D logistics platform." },
  { name: "Marcus Webb", role: "Co-Founder & CTO", bio: "Built agent infrastructure serving millions of daily inference calls at scale." },
  { name: "Priya Nathan", role: "Head of Deployment", bio: "Runs the delivery team that ships every client's first agent to production." },
];

const compliance = [
  { icon: Lock, title: "SOC 2 Type II", description: "Independently audited controls for security, availability, and confidentiality." },
  { icon: FileCheck2, title: "Data residency options", description: "Configurable data processing regions to meet regulatory requirements." },
  { icon: ShieldCheck, title: "Least-privilege access", description: "Agents operate under scoped credentials, never standing admin access." },
];

export default function AboutPage() {
  return (
    <>
      <section className="px-6 pb-20 pt-20 lg:px-8 lg:pt-28">
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">About Fatcamel AI</span>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl">
            We build the workforce that never clocks out
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
            Fatcamel AI exists because most "automation" projects stall in a spreadsheet. We ship agents that actually
            run in production, with the guardrails and observability an enterprise team can trust.
          </p>
        </div>
      </section>

      <section className="px-6 pb-24 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div key={v.title} className="rounded-xl border border-white/5 bg-panel/50 p-6">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500/10 text-amber-400">
                <v.icon size={17} />
              </span>
              <h3 className="mt-4 font-display text-base font-semibold text-slate-100">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{v.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 pb-24 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">Leadership</span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-slate-50">The people behind the agents</h2>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {leadership.map((l) => (
              <div key={l.name} className="rounded-xl border border-white/5 bg-panel/50 p-6">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-amber-400 to-amber-700" />
                <h3 className="mt-4 font-display text-base font-semibold text-slate-100">{l.name}</h3>
                <p className="text-xs font-medium text-amber-400">{l.role}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{l.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-28 lg:px-8">
        <div className="glass mx-auto max-w-6xl rounded-2xl p-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">Enterprise Security</span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-slate-50">Built for regulated environments</h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {compliance.map((c) => (
              <div key={c.title} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 text-amber-400">
                  <c.icon size={16} />
                </span>
                <div>
                  <h3 className="font-display text-sm font-semibold text-slate-100">{c.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-400">{c.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
