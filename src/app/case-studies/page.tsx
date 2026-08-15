import type { Metadata } from "next";
import { Clock, TrendingUp, Target } from "lucide-react";

export const metadata: Metadata = {
  title: "Case Studies — Fatcamel AI",
  description: "Client success stories, measurable metrics, and deployment timelines from Fatcamel AI agent deployments.",
};

const studies = [
  {
    company: "Northline Logistics",
    industry: "Manufacturing",
    challenge: "Supplier delays were discovered only after inventory ran short, causing repeated line-stop events.",
    solution: "Deployed an agent to monitor supplier order communications and flag at-risk deliveries automatically.",
    metrics: [
      { label: "Stockout reduction", value: "22%" },
      { label: "Deployment time", value: "5 weeks" },
      { label: "Alerts caught early", value: "3 days avg." },
    ],
  },
  {
    company: "Harborview Dental Group",
    industry: "Healthcare",
    challenge: "Front desk staff were overwhelmed by scheduling calls, leading to long hold times and missed bookings.",
    solution: "Deployed a voice agent to handle routine scheduling, reschedules, and appointment reminders.",
    metrics: [
      { label: "No-show reduction", value: "31%" },
      { label: "Deployment time", value: "4 weeks" },
      { label: "Call hold time", value: "-64%" },
    ],
  },
  {
    company: "Vantage Realty Partners",
    industry: "Real Estate",
    challenge: "Listing inquiries outside business hours went unanswered until the next morning, losing buyer interest.",
    solution: "Deployed the Realtor agent to respond to inquiries instantly and book showings directly.",
    metrics: [
      { label: "More showings booked", value: "58%" },
      { label: "Deployment time", value: "3 weeks" },
      { label: "Inquiry response time", value: "<1 min" },
    ],
  },
  {
    company: "Bright Path Fitness",
    industry: "Fitness & Wellness",
    challenge: "Front-desk staff spent most of their day answering the same booking and billing questions.",
    solution: "Deployed the AI Gym Assistant to handle class bookings, billing Q&A, and churn-risk outreach.",
    metrics: [
      { label: "Fewer front-desk interruptions", value: "62%" },
      { label: "Deployment time", value: "3 weeks" },
      { label: "Member churn reduction", value: "27%" },
    ],
  },
];

export default function CaseStudiesPage() {
  return (
    <section className="px-6 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-5xl text-center">
        <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">Impact</span>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl">
          Deployments, measured
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-slate-400">
          Every engagement ships with a defined success metric before day one. Here's what that looked like for four teams.
        </p>
      </div>

      <div className="mx-auto mt-16 max-w-5xl space-y-6">
        {studies.map((s) => (
          <div key={s.company} className="rounded-2xl border border-white/5 bg-panel/50 p-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <span className="text-xs font-medium uppercase tracking-wide text-amber-400">{s.industry}</span>
                <h2 className="mt-1 font-display text-xl font-semibold text-slate-100">{s.company}</h2>
              </div>
            </div>
            <div className="mt-5 grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <h3 className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  <Target size={13} /> Challenge
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.challenge}</p>
                <h3 className="mt-4 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  <TrendingUp size={13} /> Solution
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.solution}</p>
              </div>
              <div className="grid grid-cols-3 gap-3 self-start rounded-xl border border-white/5 bg-panel/60 p-5">
                {s.metrics.map((m) => (
                  <div key={m.label}>
                    <div className="font-display text-xl font-semibold text-gradient-amber">{m.value}</div>
                    <div className="mt-1 text-[11px] leading-snug text-slate-500">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
