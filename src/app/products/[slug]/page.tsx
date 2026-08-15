import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight, ArrowLeft, FileText, Users, Share2, Mail, Home as HomeIcon, Zap, Dumbbell,
  Mic, Layers, CheckSquare, BarChart3, ListChecks, CalendarCheck, ClipboardList, MessageSquare,
  PenLine, ThumbsUp, UserPlus, Inbox, Search, ShieldCheck, Filter, FlaskConical, RefreshCw,
  ClipboardCheck, HeartHandshake, Timer, GitMerge, GitBranch, AlertTriangle, Rocket,
} from "lucide-react";
import { productsData, getProductBySlug } from "@/data/productsData";
import { getServiceBySlug } from "@/data/servicesData";

const iconMap: Record<string, React.ElementType> = {
  FileText, Users, Share2, Mail, Home: HomeIcon, Zap, Dumbbell, Mic, Layers, CheckSquare,
  BarChart3, ListChecks, CalendarCheck, ClipboardList, MessageSquare, PenLine, ThumbsUp,
  UserPlus, Inbox, Search, ShieldCheck, Filter, FlaskConical, RefreshCw, ClipboardCheck,
  HeartHandshake, Timer, GitMerge, GitBranch, AlertTriangle, Rocket,
};

export function generateStaticParams() {
  return productsData.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const product = getProductBySlug(params.slug);
  if (!product) return {};
  return {
    title: `${product.name} — Fatcamel AI`,
    description: product.summary,
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  const Icon = iconMap[product.icon] ?? Zap;
  const relatedService = product.relatedService ? getServiceBySlug(product.relatedService) : undefined;

  return (
    <>
      <section className="px-6 pb-16 pt-16 lg:px-8 lg:pt-24">
        <div className="mx-auto max-w-4xl">
          <Link href="/#products" className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-amber-400">
            <ArrowLeft size={13} /> All products
          </Link>
          <div className="mt-6 flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400">
              <Icon size={20} />
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">{product.category}</span>
          </div>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl">
            {product.name}
          </h1>
          <p className="mt-3 text-lg text-slate-400">{product.tagline}</p>
          <p className="mt-6 max-w-2xl leading-relaxed text-slate-400">{product.summary}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="group flex items-center gap-2 rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-400"
            >
              Deploy {product.name}
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
            {relatedService && (
              <Link
                href={`/services/${relatedService.slug}`}
                className="rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-amber-500/40 hover:text-amber-400"
              >
                View related service
              </Link>
            )}
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {product.stats.map((s) => (
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
          <h2 className="font-display text-2xl font-semibold text-slate-50">Feature modules</h2>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {product.features.map((f) => {
              const FIcon = iconMap[f.icon] ?? Zap;
              return (
                <div key={f.title} className="rounded-xl border border-white/5 bg-panel/50 p-5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500/10 text-amber-400">
                    <FIcon size={16} />
                  </span>
                  <h3 className="mt-3 font-display text-base font-semibold text-slate-100">{f.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{f.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 pb-28 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-semibold text-slate-50">Integrates with</h2>
          <div className="mt-6 flex flex-wrap gap-2.5">
            {product.integrations.map((tool) => (
              <span key={tool} className="rounded-full border border-white/10 bg-panel/50 px-4 py-1.5 text-sm text-slate-300">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-28 lg:px-8">
        <div className="glass mx-auto max-w-4xl rounded-2xl p-10 text-center shadow-glow">
          <h2 className="font-display text-2xl font-semibold text-slate-50">See {product.name} on your data</h2>
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
