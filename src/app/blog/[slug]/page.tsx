import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { blogPosts, getBlogPostBySlug } from "@/data/blogData";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getBlogPostBySlug(params.slug);
  if (!post) return {};
  return { title: `${post.title} — Fatcamel AI Blog`, description: post.excerpt };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <article className="px-6 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-2xl">
        <Link href="/blog" className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-amber-400">
          <ArrowLeft size={13} /> Back to blog
        </Link>
        <span className="mt-6 block text-xs font-semibold uppercase tracking-wider text-amber-400">{post.category}</span>
        <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">{post.title}</h1>
        <div className="mt-3 text-xs text-slate-500">{post.date} · {post.readTime}</div>
        <div className="prose-invert mt-10 space-y-5">
          {post.body.map((para, i) => (
            <p key={i} className="text-base leading-relaxed text-slate-300">{para}</p>
          ))}
        </div>
      </div>
    </article>
  );
}
