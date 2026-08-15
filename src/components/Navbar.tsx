"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
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
import { servicesData } from "@/data/servicesData";
import { productsData } from "@/data/productsData";
import { industryData } from "@/data/industryData";

const iconMap: Record<string, React.ElementType> = {
  Workflow,
  TrendingUp,
  Bot,
  Phone,
  Home: HomeIcon,
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
};

type MenuKey = "services" | "products" | "industries" | null;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<MenuKey>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
  }, [pathname]);

  const openWithHover = (key: MenuKey) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(key);
  };
  const closeWithDelay = () => {
    closeTimer.current = setTimeout(() => setOpenMenu(null), 150);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-glow" : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2 font-display text-lg font-semibold tracking-tight">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500/15 text-amber-400">
            <Bot className="h-4.5 w-4.5" size={18} />
          </span>
          <span>
            Fatcamel<span className="text-gradient-amber">AI</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 lg:flex">
          <div
            onMouseEnter={() => openWithHover("services")}
            onMouseLeave={closeWithDelay}
            className="relative"
          >
            <button className="flex items-center gap-1 rounded-md px-3 py-2 text-sm text-slate-300 transition hover:text-amber-400">
              Services <ChevronDown size={14} className={`transition-transform ${openMenu === "services" ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {openMenu === "services" && (
                <MegaMenu onEnter={() => openWithHover("services")} onLeave={closeWithDelay}>
                  <div className="grid grid-cols-2 gap-1 p-3">
                    {servicesData.map((s) => {
                      const Icon = iconMap[s.icon] ?? Workflow;
                      return (
                        <Link
                          key={s.slug}
                          href={`/services/${s.slug}`}
                          className="flex items-start gap-3 rounded-lg px-3 py-2.5 transition hover:bg-white/5"
                        >
                          <Icon size={16} className="mt-0.5 shrink-0 text-amber-400" />
                          <div>
                            <div className="text-sm font-medium text-slate-100">{s.name}</div>
                            <div className="mt-0.5 line-clamp-1 text-xs text-slate-400">{s.tagline}</div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </MegaMenu>
              )}
            </AnimatePresence>
          </div>

          <div
            onMouseEnter={() => openWithHover("products")}
            onMouseLeave={closeWithDelay}
            className="relative"
          >
            <button className="flex items-center gap-1 rounded-md px-3 py-2 text-sm text-slate-300 transition hover:text-amber-400">
              Products <ChevronDown size={14} className={`transition-transform ${openMenu === "products" ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {openMenu === "products" && (
                <MegaMenu onEnter={() => openWithHover("products")} onLeave={closeWithDelay} width="w-80">
                  <div className="flex flex-col gap-1 p-3">
                    {productsData.map((p) => {
                      const Icon = iconMap[p.icon] ?? Cpu;
                      return (
                        <Link
                          key={p.slug}
                          href={`/products/${p.slug}`}
                          className="flex items-start gap-3 rounded-lg px-3 py-2.5 transition hover:bg-white/5"
                        >
                          <Icon size={16} className="mt-0.5 shrink-0 text-amber-400" />
                          <div>
                            <div className="text-sm font-medium text-slate-100">{p.name}</div>
                            <div className="mt-0.5 line-clamp-1 text-xs text-slate-400">{p.tagline}</div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </MegaMenu>
              )}
            </AnimatePresence>
          </div>

          <div
            onMouseEnter={() => openWithHover("industries")}
            onMouseLeave={closeWithDelay}
            className="relative"
          >
            <button className="flex items-center gap-1 rounded-md px-3 py-2 text-sm text-slate-300 transition hover:text-amber-400">
              Industries <ChevronDown size={14} className={`transition-transform ${openMenu === "industries" ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {openMenu === "industries" && (
                <MegaMenu onEnter={() => openWithHover("industries")} onLeave={closeWithDelay}>
                  <div className="grid grid-cols-2 gap-1 p-3">
                    {industryData.map((i) => {
                      const Icon = iconMap[i.icon] ?? Landmark;
                      return (
                        <Link
                          key={i.slug}
                          href={`/industry/${i.slug}`}
                          className="flex items-start gap-3 rounded-lg px-3 py-2.5 transition hover:bg-white/5"
                        >
                          <Icon size={16} className="mt-0.5 shrink-0 text-amber-400" />
                          <div>
                            <div className="text-sm font-medium text-slate-100">{i.name}</div>
                            <div className="mt-0.5 line-clamp-1 text-xs text-slate-400">{i.tagline}</div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </MegaMenu>
              )}
            </AnimatePresence>
          </div>

          <Link href="/case-studies" className="rounded-md px-3 py-2 text-sm text-slate-300 transition hover:text-amber-400">
            Case Studies
          </Link>
          <Link href="/about" className="rounded-md px-3 py-2 text-sm text-slate-300 transition hover:text-amber-400">
            About
          </Link>
          <Link href="/blog" className="rounded-md px-3 py-2 text-sm text-slate-300 transition hover:text-amber-400">
            Blog
          </Link>
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/contact"
            className="group flex items-center gap-1.5 rounded-full bg-amber-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-amber-400"
          >
            Deploy AI Agent
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <button
          className="flex items-center justify-center rounded-md p-2 text-slate-200 lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-white/5 glass lg:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4 max-h-[75vh] overflow-y-auto thin-scroll">
              <MobileSection title="Services" items={servicesData.map((s) => ({ href: `/services/${s.slug}`, label: s.name }))} />
              <MobileSection title="Products" items={productsData.map((p) => ({ href: `/products/${p.slug}`, label: p.name }))} />
              <MobileSection title="Industries" items={industryData.map((i) => ({ href: `/industry/${i.slug}`, label: i.name }))} />
              <Link href="/case-studies" className="rounded-md px-2 py-2.5 text-sm text-slate-300">Case Studies</Link>
              <Link href="/about" className="rounded-md px-2 py-2.5 text-sm text-slate-300">About</Link>
              <Link href="/blog" className="rounded-md px-2 py-2.5 text-sm text-slate-300">Blog</Link>
              <Link
                href="/contact"
                className="mt-2 flex items-center justify-center gap-1.5 rounded-full bg-amber-500 px-4 py-2.5 text-sm font-semibold text-slate-950"
              >
                Deploy AI Agent <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function MegaMenu({
  children,
  onEnter,
  onLeave,
  width = "w-[420px]",
}: {
  children: React.ReactNode;
  onEnter: () => void;
  onLeave: () => void;
  width?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.15 }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className={`glass absolute left-1/2 top-full mt-2 -translate-x-1/2 rounded-xl shadow-glow ${width}`}
    >
      {children}
    </motion.div>
  );
}

function MobileSection({ title, items }: { title: string; items: { href: string; label: string }[] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/5 py-1">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between px-2 py-2.5 text-sm text-slate-200"
      >
        {title}
        <ChevronDown size={14} className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden pl-3"
          >
            {items.map((item) => (
              <Link key={item.href} href={item.href} className="block px-2 py-2 text-sm text-slate-400">
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
