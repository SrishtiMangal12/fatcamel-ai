import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight, ArrowLeft, Check, Workflow, TrendingUp, Bot, Phone, Home as HomeIcon,
  MessageSquare, Database, Share2, FileText, Mail, MessageCircle, Zap, Users, Cpu,
} from "lucide-react";
import { servicesData, getServiceBySlug } from "@/data/servicesData";
import { productsData } from "@/data/productsData";

const iconMap: Record<string, React.ElementType> = {
  Workflow, TrendingUp, Bot, Phone, Home: HomeIcon, MessageSquare, Database,
  Share2, FileText, Mail, MessageCircle, Zap, Users, Cpu,
};

export function generateStaticParams() {
  return servicesData.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};
  return {
    title: `${service.name} — Fatcamel AI`,
    description: service.summary,
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  const Icon = iconMap[service.icon] ?? Workflow;
  const related = productsData.filter((p) => service.relatedProducts?.includes(p.slug));

  return (
    <>
      <section className="px-6 pb-16 pt-16 lg:px-8 lg:pt-24">
        <div className="mx-auto max-w-4xl">
          <Link href="/#services" className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-amber-400">
            <ArrowLeft size={13} /> All services
          </Link>
          <div className="mt-6 flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400">
              <Icon size={20} />
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">{service.eyebrow}</span>
          </div>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl">
            {service.name}
          </h1>
          <p className="mt-3 text-lg text-slate-400">{service.tagline}</p>
          <p className="mt-6 max-w-2xl text-slate-400 leading-relaxed">{service.summary}</p>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {service.stats.map((s) => (
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
          <h2 className="font-display text-2xl font-semibold text-slate-50">What's costing you hours today</h2>
          <ul className="mt-6 space-y-3">
            {service.painPoints.map((p) => (
              <li key={p} className="flex items-start gap-3 text-slate-400">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-6 pb-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-semibold text-slate-50">Before &amp; after</h2>
          <div className="mt-6 overflow-hidden rounded-xl border border-white/5">
            <table className="w-full text-left text-sm">
              <thead className="bg-panel/80 text-xs uppercase tracking-wide text-slate-500">
                <tr>
                  <th className="px-5 py-3 font-medium">Task</th>
                  <th className="px-5 py-3 font-medium">Before</th>
                  <th className="px-5 py-3 font-medium">After Fatcamel</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {service.matrix.map((row) => (
                  <tr key={row.task} className="bg-panel/30">
                    <td className="px-5 py-4 font-medium text-slate-200">{row.task}</td>
                    <td className="px-5 py-4 text-slate-500">{row.before}</td>
                    <td className="px-5 py-4 text-amber-400">
                      <span className="flex items-start gap-1.5">
                        <Check size={14} className="mt-0.5 shrink-0" /> {row.after}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-semibold text-slate-50">Implementation blueprint</h2>
          <div className="mt-8 space-y-6 border-l border-white/10 pl-8">
            {service.blueprint.map((step) => (
              <div key={step.phase} className="relative">
                <span className="absolute -left-[38px] flex h-6 w-6 items-center justify-center rounded-full bg-amber-500 font-mono text-[10px] font-bold text-slate-950">
                  {step.phase}
                </span>
                <div className="flex flex-wrap items-baseline gap-x-3">
                  <h3 className="font-display text-base font-semibold text-slate-100">{step.title}</h3>
                  <span className="text-xs text-slate-500">{step.duration}</span>
                </div>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="px-6 pb-20 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-display text-2xl font-semibold text-slate-50">Powered by</h2>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/products/${p.slug}`}
                  className="group flex items-center justify-between rounded-xl border border-white/5 bg-panel/50 p-5 transition hover:border-amber-500/30"
                >
                  <div>
                    <h3 className="font-display text-base font-semibold text-slate-100">{p.name}</h3>
                    <p className="mt-1 text-sm text-slate-400">{p.tagline}</p>
                  </div>
                  <ArrowRight size={16} className="shrink-0 text-slate-600 transition group-hover:text-amber-400" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="px-6 pb-28 lg:px-8">
        <div className="glass mx-auto max-w-4xl rounded-2xl p-10 text-center shadow-glow">
          <h2 className="font-display text-2xl font-semibold text-slate-50">
            Ready to deploy {service.name.toLowerCase()}?
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
