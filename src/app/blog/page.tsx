import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blogData";

export const metadata: Metadata = {
  title: "Blog — Fatcamel AI",
  description: "Technical AI guides and automation insights from the Fatcamel AI team.",
};

export default function BlogPage() {
  return (
    <section className="px-6 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-5xl">
        <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">Thought Leadership</span>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl">
          Notes from building agents in production
        </h1>
        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col rounded-xl border border-white/5 bg-panel/50 p-6 transition hover:border-amber-500/30"
            >
              <span className="text-xs font-medium uppercase tracking-wide text-amber-400">{post.category}</span>
              <h2 className="mt-2 font-display text-lg font-semibold text-slate-100">{post.title}</h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">{post.excerpt}</p>
              <div className="mt-5 flex items-center justify-between border-t border-white/5 pt-4 text-xs text-slate-500">
                <span>{post.date} · {post.readTime}</span>
                <ArrowRight size={14} className="text-slate-600 transition group-hover:text-amber-400" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
