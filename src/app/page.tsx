"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  Workflow,
  TrendingUp,
  Bot,
  Phone,
  Home as HomeIcon,
  MessageSquare,
  Database,
  Share2,
  FileText,
  Mail,
  MessageCircle,
  Zap,
  Users,
  Cpu,
  Landmark,
  HeartPulse,
  Fuel,
  Wind,
  Radio,
  Factory,
  ShoppingBag,
} from "lucide-react";
import HeroTerminal from "@/components/HeroTerminal";
import RoiCalculator from "@/components/RoiCalculator";
import { servicesData } from "@/data/servicesData";
import { productsData } from "@/data/productsData";
import { industryData } from "@/data/industryData";

const iconMap: Record<string, React.ElementType> = {
  Workflow, TrendingUp, Bot, Phone, Home: HomeIcon, MessageSquare, Database,
  Share2, FileText, Mail, MessageCircle, Zap, Users, Cpu, Landmark, HeartPulse,
  Fuel, Wind, Radio, Factory, ShoppingBag,
};

const caseStudies = [
  {
    company: "Northline Logistics",
    industry: "Manufacturing",
    result: "22% fewer stockouts",
    quote: "Fatcamel's agents caught supplier delays three days earlier than our old process ever could.",
    timeline: "Deployed in 5 weeks",
  },
  {
    company: "Harborview Dental Group",
    industry: "Healthcare",
    result: "31% fewer no-shows",
    quote: "Our front desk finally has room to breathe during peak hours.",
    timeline: "Deployed in 4 weeks",
  },
  {
    company: "Vantage Realty Partners",
    industry: "Real Estate",
    result: "58% more showings booked",
    quote: "Every listing inquiry gets answered now, even the ones that come in at midnight.",
    timeline: "Deployed in 3 weeks",
  },
];

const faqs = [
  {
    q: "How long does it take to deploy an agent?",
    a: "Most single-workflow agents go from kickoff to live pilot in 3–5 weeks. Multi-agent systems spanning several tools typically take 6–8 weeks. You'll see a working prototype well before full deployment.",
  },
  {
    q: "Will an agent replace our team?",
    a: "No — agents take over the repetitive, high-volume parts of a workflow so your team can focus on judgment calls, relationships, and the work that actually needs a human. Every agent we deploy ships with clear escalation paths back to a person.",
  },
  {
    q: "What happens if the agent gets something wrong?",
    a: "Every agent is deployed with confidence thresholds and escalation rules — low-confidence or high-stakes actions are routed to a human before they happen. You get full visibility into every decision an agent makes.",
  },
  {
    q: "Do you work with our existing tools?",
    a: "Yes. Agents connect to your CRM, calendar, communication tools, and internal systems via API — we don't ask you to rip and replace your stack.",
  },
  {
    q: "How is this priced?",
    a: "Pricing depends on the number and complexity of the agents deployed. Most engagements start with a scoped pilot on one workflow before expanding. Book a call and we'll give you a specific number, not a range.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden px-6 pb-24 pt-20 lg:px-8 lg:pt-28">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-400">
              <Bot size={13} /> Now deploying agent fleet v4
            </span>
            <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-slate-50 sm:text-5xl lg:text-6xl">
              Deploy AI agents that eliminate{" "}
              <span className="text-gradient-amber">70% of manual work</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate-400">
              Fatcamel AI builds and runs autonomous agent fleets across sales, support, and operations —
              so your team spends time on the work only a human can do.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="group flex items-center gap-2 rounded-full bg-amber-500 px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-amber-400"
              >
                Deploy AI Agent
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/case-studies"
                className="flex items-center gap-2 rounded-full border border-white/10 px-6 py-3.5 text-sm font-semibold text-slate-200 transition hover:border-amber-500/40 hover:text-amber-400"
              >
                See real deployments
              </Link>
            </div>
            <div className="mt-10 flex items-center gap-8 text-sm text-slate-500">
              <span><strong className="text-slate-200">120+</strong> agents in production</span>
              <span><strong className="text-slate-200">29</strong> enterprise clients</span>
              <span><strong className="text-slate-200">4.2x</strong> avg. cycle time gain</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex justify-center lg:justify-end"
          >
            <HeroTerminal />
          </motion.div>
        </div>
      </section>

      {/* ROI CALCULATOR */}
      <section className="px-6 pb-24 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <RoiCalculator />
        </div>
      </section>

      {/* SERVICE GRID */}
      <section className="px-6 pb-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Service Ecosystem"
            title="14 ways we put agents to work"
            description="Every service below ships with a documented before-and-after operational matrix so you know exactly what changes."
          />
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {servicesData.map((s, i) => {
              const Icon = iconMap[s.icon] ?? Workflow;
              return (
                <motion.div
                  key={s.slug}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (i % 6) * 0.04 }}
                >
                  <Link
                    href={`/services/${s.slug}`}
                    className="group flex h-full flex-col rounded-xl border border-white/5 bg-panel/50 p-5 transition hover:border-amber-500/30 hover:bg-panel"
                  >
                    <div className="flex items-center justify-between">
                      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500/10 text-amber-400">
                        <Icon size={17} />
                      </span>
                      <ArrowUpRight size={16} className="text-slate-600 transition group-hover:text-amber-400" />
                    </div>
                    <h3 className="mt-4 font-display text-base font-semibold text-slate-100">{s.name}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{s.tagline}</p>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PRODUCT MATRIX */}
      <section className="px-6 pb-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Proprietary Products"
            title="7 agents, ready to deploy this week"
            description="Purpose-built agents for the workflows that eat the most hours across sales, support, and people ops."
          />
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {productsData.map((p) => {
              const Icon = iconMap[p.icon] ?? Cpu;
              return (
                <Link
                  key={p.slug}
                  href={`/products/${p.slug}`}
                  className="group flex flex-col rounded-xl border border-white/5 bg-panel/50 p-5 transition hover:border-amber-500/30 hover:bg-panel"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500/10 text-amber-400">
                    <Icon size={17} />
                  </span>
                  <h3 className="mt-4 font-display text-base font-semibold text-slate-100">{p.name}</h3>
                  <p className="mt-1 text-xs uppercase tracking-wide text-slate-500">{p.category}</p>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-400">{p.tagline}</p>
                  <span className="mt-4 flex items-center gap-1 text-xs font-medium text-amber-400 opacity-0 transition group-hover:opacity-100">
                    View product <ArrowRight size={12} />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* INDUSTRY CAROUSEL */}
      <section className="px-6 pb-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Industry Bottleneck Mapping"
            title="8 industries, mapped problem to solution"
            description="We start with the specific bottleneck costing your sector the most hours, not a generic automation pitch."
          />
          <div className="mt-12 flex gap-4 overflow-x-auto pb-4 thin-scroll">
            {industryData.map((ind) => {
              const Icon = iconMap[ind.icon] ?? Landmark;
              return (
                <Link
                  key={ind.slug}
                  href={`/industry/${ind.slug}`}
                  className="group flex w-72 shrink-0 flex-col rounded-xl border border-white/5 bg-panel/50 p-5 transition hover:border-amber-500/30 hover:bg-panel"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500/10 text-amber-400">
                    <Icon size={17} />
                  </span>
                  <h3 className="mt-4 font-display text-base font-semibold text-slate-100">{ind.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{ind.tagline}</p>
                  <div className="mt-4 flex items-center gap-4 border-t border-white/5 pt-3">
                    {ind.stats.slice(0, 1).map((stat) => (
                      <div key={stat.label}>
                        <div className="font-display text-lg font-semibold text-amber-400">{stat.value}</div>
                        <div className="text-[11px] text-slate-500">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CASE STUDY SNIPPETS */}
      <section className="px-6 pb-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Proof, Not Promises"
            title="Deployments, not demos"
            description="A sample of teams running Fatcamel agents in production today."
          />
          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
            {caseStudies.map((cs) => (
              <div key={cs.company} className="flex flex-col rounded-xl border border-white/5 bg-panel/50 p-6">
                <span className="text-xs font-medium uppercase tracking-wide text-amber-400">{cs.industry}</span>
                <h3 className="mt-2 font-display text-lg font-semibold text-slate-100">{cs.company}</h3>
                <p className="mt-3 flex-1 text-sm italic leading-relaxed text-slate-400">&ldquo;{cs.quote}&rdquo;</p>
                <div className="mt-5 flex items-center justify-between border-t border-white/5 pt-4">
                  <span className="font-display text-lg font-semibold text-gradient-amber">{cs.result}</span>
                  <span className="text-xs text-slate-500">{cs.timeline}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/case-studies" className="inline-flex items-center gap-1.5 text-sm font-medium text-amber-400 hover:underline">
              Read the full case studies <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 pb-28 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <SectionHeading eyebrow="Questions" title="Before you deploy" description="" center />
          <div className="mt-10 divide-y divide-white/5 border-y border-white/5">
            {faqs.map((f) => (
              <FaqItem key={f.q} q={f.q} a={f.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="px-6 pb-28 lg:px-8">
        <div className="glass mx-auto max-w-5xl rounded-2xl px-8 py-14 text-center shadow-glow">
          <h2 className="font-display text-3xl font-semibold text-slate-50 sm:text-4xl">
            Your next hire could be an agent
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-slate-400">
            Book a 30-minute working session. We'll map one real workflow and show you exactly what an agent would do differently.
          </p>
          <Link
            href="/contact"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-amber-500 px-7 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-amber-400"
          >
            Deploy AI Agent
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </section>
    </>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
  center = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "text-center" : "max-w-2xl"}>
      <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">{eyebrow}</span>
      <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-slate-400">{description}</p>}
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="py-5">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between text-left"
        aria-expanded={open}
      >
        <span className="font-display text-base font-medium text-slate-100">{q}</span>
        <ChevronDown size={16} className={`shrink-0 text-amber-400 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <p className="mt-3 text-sm leading-relaxed text-slate-400">{a}</p>}
    </div>
  );
}
