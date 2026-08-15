"use client";

import { useState } from "react";
import { Mail, MapPin, Clock, CheckCircle2, Loader2 } from "lucide-react";
import { servicesData } from "@/data/servicesData";

interface FormState {
  name: string;
  email: string;
  serviceCategory: string;
  budget: string;
  specs: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  serviceCategory?: string;
}

const budgetRanges = [
  "Under $10k",
  "$10k – $25k",
  "$25k – $50k",
  "$50k – $100k",
  "$100k+",
  "Not sure yet",
];

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    serviceCategory: "",
    budget: "",
    specs: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const update = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validate = (): boolean => {
    const next: FormErrors = {};
    if (!form.name.trim()) next.name = "Enter your name.";
    if (!form.email.trim()) next.email = "Enter your work email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Enter a valid email address.";
    if (!form.serviceCategory) next.serviceCategory = "Select a service category.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("submitting");
    await new Promise((r) => setTimeout(r, 900));
    setStatus("success");
  };

  if (status === "success") {
    return (
      <section className="px-6 py-28 lg:px-8">
        <div className="glass mx-auto max-w-lg rounded-2xl p-10 text-center shadow-glow">
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">
            <CheckCircle2 size={26} />
          </span>
          <h1 className="mt-6 font-display text-2xl font-semibold text-slate-50">Request received</h1>
          <p className="mt-3 text-sm leading-relaxed text-slate-400">
            Thanks, {form.name.split(" ")[0] || "there"} — a member of our deployment team will reply to{" "}
            <span className="text-amber-400">{form.email}</span> within one business day to schedule your working session.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="px-6 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">Contact</span>
          <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
            Let&apos;s scope your first agent
          </h1>
          <p className="mt-4 text-slate-400">
            Tell us about the workflow you want to automate. We&apos;ll come back with a specific plan, not a generic pitch.
          </p>

          <div className="mt-10 space-y-5">
            <ContactInfoRow icon={Mail} label="Email" value="hello@fatcamel.ai" />
            <ContactInfoRow icon={MapPin} label="Headquarters" value="Austin, TX — remote-first team" />
            <ContactInfoRow icon={Clock} label="Response time" value="Within 1 business day" />
          </div>
        </div>

        <form onSubmit={handleSubmit} noValidate className="lg:col-span-3">
          <div className="glass rounded-2xl p-8 shadow-glow">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Field label="Full name" error={errors.name}>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  placeholder="Jordan Rivera"
                  className={inputClass(!!errors.name)}
                />
              </Field>
              <Field label="Work email" error={errors.email}>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  placeholder="jordan@company.com"
                  className={inputClass(!!errors.email)}
                />
              </Field>
            </div>

            <div className="mt-5">
              <Field label="Service category" error={errors.serviceCategory}>
                <select
                  value={form.serviceCategory}
                  onChange={(e) => update("serviceCategory", e.target.value)}
                  className={inputClass(!!errors.serviceCategory)}
                >
                  <option value="">Select a service</option>
                  {servicesData.map((s) => (
                    <option key={s.slug} value={s.slug}>{s.name}</option>
                  ))}
                </select>
              </Field>
            </div>

            <div className="mt-5">
              <Field label="Estimated budget">
                <select value={form.budget} onChange={(e) => update("budget", e.target.value)} className={inputClass(false)}>
                  <option value="">Select a range (optional)</option>
                  {budgetRanges.map((b) => (
                    <option key={b} value={b}>{b}</option>
                  ))}
                </select>
              </Field>
            </div>

            <div className="mt-5">
              <Field label="Project specs">
                <textarea
                  value={form.specs}
                  onChange={(e) => update("specs", e.target.value)}
                  rows={4}
                  placeholder="What's the workflow, and what does 'done' look like?"
                  className={inputClass(false)}
                />
              </Field>
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-amber-500 px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-amber-400 disabled:opacity-70"
            >
              {status === "submitting" ? (
                <>
                  <Loader2 size={16} className="animate-spin" /> Sending…
                </>
              ) : (
                "Send request"
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

function inputClass(hasError: boolean) {
  return `w-full rounded-lg border ${
    hasError ? "border-red-500/60" : "border-white/10"
  } bg-white/5 px-3.5 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:border-amber-500/50`;
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs font-medium text-slate-400">{label}</span>
      <div className="mt-1.5">{children}</div>
      {error && <span className="mt-1 block text-xs text-red-400">{error}</span>}
    </label>
  );
}

function ContactInfoRow({ icon: Icon, label, value }: { icon: React.ElementType; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 text-amber-400">
        <Icon size={16} />
      </span>
      <div>
        <div className="text-xs text-slate-500">{label}</div>
        <div className="text-sm text-slate-200">{value}</div>
      </div>
    </div>
  );
}
