"use client";

import { useState } from "react";
import Link from "next/link";
import { Bot, ArrowRight, Twitter, Linkedin, Github, Mail } from "lucide-react";
import { servicesData } from "@/data/servicesData";
import { productsData } from "@/data/productsData";
import { industryData } from "@/data/industryData";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) return;
    setSubmitted(true);
  };

  return (
    <footer className="relative border-t border-white/5 bg-panel/60">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-6">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 font-display text-lg font-semibold">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500/15 text-amber-400">
                <Bot size={18} />
              </span>
              Fatcamel<span className="text-gradient-amber">AI</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
              We design, build, and deploy autonomous AI agent fleets that eliminate manual work across sales, support, and operations.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 max-w-xs">
              <label htmlFor="footer-email" className="text-xs font-medium uppercase tracking-wide text-slate-500">
                Get the agent playbook
              </label>
              <div className="mt-2 flex items-center gap-2">
                <input
                  id="footer-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-amber-500/50"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber-500 text-slate-950 transition hover:bg-amber-400"
                >
                  <ArrowRight size={16} />
                </button>
              </div>
              {submitted && (
                <p className="mt-2 text-xs text-amber-400">You&apos;re on the list — check your inbox.</p>
              )}
            </form>

            <div className="mt-6 flex items-center gap-3 text-slate-500">
              <a href="https://twitter.com" aria-label="Twitter" className="transition hover:text-amber-400"><Twitter size={16} /></a>
              <a href="https://linkedin.com" aria-label="LinkedIn" className="transition hover:text-amber-400"><Linkedin size={16} /></a>
              <a href="https://github.com" aria-label="GitHub" className="transition hover:text-amber-400"><Github size={16} /></a>
              <a href="mailto:hello@fatcamel.ai" aria-label="Email" className="transition hover:text-amber-400"><Mail size={16} /></a>
            </div>
          </div>

          <FooterColumn
            title="Services"
            links={servicesData.slice(0, 7).map((s) => ({ href: `/services/${s.slug}`, label: s.name }))}
          />
          <FooterColumn
            title="More Services"
            links={servicesData.slice(7).map((s) => ({ href: `/services/${s.slug}`, label: s.name }))}
          />
          <FooterColumn
            title="Products"
            links={productsData.map((p) => ({ href: `/products/${p.slug}`, label: p.name }))}
          />
          <FooterColumn
            title="Industries"
            links={industryData.map((i) => ({ href: `/industry/${i.slug}`, label: i.name }))}
          />
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-xs text-slate-500 md:flex-row">
          <p>© {new Date().getFullYear()} Fatcamel AI. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="transition hover:text-amber-400">Privacy Policy</Link>
            <Link href="/terms" className="transition hover:text-amber-400">Terms of Service</Link>
            <Link href="/contact" className="transition hover:text-amber-400">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div>
      <h4 className="font-display text-xs font-semibold uppercase tracking-wider text-slate-400">{title}</h4>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-sm text-slate-500 transition hover:text-amber-400">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
