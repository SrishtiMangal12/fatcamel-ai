import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight, ArrowLeft, ArrowRight as ArrowR, Landmark, HeartPulse, Fuel, Wind, Radio,
  Factory, Zap, ShoppingBag,
} from "lucide-react";
import { industryData, getIndustryBySlug } from "@/data/industryData";

const iconMap: Record<string, React.ElementType> = {
  Landmark, HeartPulse, Fuel, Wind, Radio, Factory, Zap, ShoppingBag,
};

export function generateStaticParams() {
  return industryData.map((i) => ({ slug: i.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const industry = getIndustryBySlug(params.slug);
  if (!industry) return {};
  return {
    title: `${industry.name} — Fatcamel AI`,
    description: industry.summary,
  };
}

export default function IndustryPage({ params }: { params: { slug: string } }) {
  const industry = getIndustryBySlug(params.slug);
  if (!industry) notFound();

  const Icon = iconMap[industry.icon] ?? Landmark;

  return (
    <>
      <section className="px-6 pb-16 pt-16 lg:px-8 lg:pt-24">
        <div className="mx-auto max-w-4xl">
          <Link href="/#industries" className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-amber-400">
            <ArrowLeft size={13} /> All industries
          </Link>
          <div className="mt-6 flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400">
              <Icon size={20} />
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">{industry.eyebrow}</span>
          </div>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl">
            {industry.name}
          </h1>
          <p className="mt-3 text-lg text-slate-400">{industry.tagline}</p>
          <p className="mt-6 max-w-2xl leading-relaxed text-slate-400">{industry.summary}</p>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {industry.stats.map((s) => (
              <div key={s.label} className="rounded-xl border border-white/5 bg-panel/50 p-5">
                <div className="font-display text-3xl font-semibold text-gradient-amber">{s.value}</div>
                <div className="mt-1 text-sm text-slate-400">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-semibold text-slate-50">Problem → solution</h2>
          <div className="mt-6 space-y-4">
            {industry.bottlenecks.map((b) => (
              <div key={b.problem} className="grid grid-cols-1 gap-3 rounded-xl border border-white/5 bg-panel/50 p-5 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
                <p className="text-sm text-slate-400">{b.problem}</p>
                <ArrowR size={16} className="hidden text-amber-500 sm:block" />
                <p className="text-sm font-medium text-slate-100">{b.solution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-28 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-semibold text-slate-50">Real-world use cases</h2>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {industry.useCases.map((u) => (
              <div key={u.title} className="rounded-xl border border-white/5 bg-panel/50 p-5">
                <h3 className="font-display text-base font-semibold text-slate-100">{u.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{u.description}</p>
                <p className="mt-4 border-t border-white/5 pt-3 text-sm font-semibold text-amber-400">{u.result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-28 lg:px-8">
        <div className="glass mx-auto max-w-4xl rounded-2xl p-10 text-center shadow-glow">
          <h2 className="font-display text-2xl font-semibold text-slate-50">
            Map your {industry.name.toLowerCase()} bottleneck
          </h2>
          <Link
            href="/contact"
            className="group mt-6 inline-flex items-center gap-2 rounded-full bg-amber-500 px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-amber-400"
          >
            Deploy AI Agent
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </section>
    </>
  );
}
