"use client";

import { useEffect, useRef, useState } from "react";
import { Circle, Cpu, Database, CheckCircle2 } from "lucide-react";

interface LogLine {
  id: number;
  text: string;
  tone: "system" | "action" | "success" | "data";
}

const SCRIPT: Omit<LogLine, "id">[] = [
  { text: "$ agent.init(\"outreach-fleet-04\")", tone: "system" },
  { text: "→ loading memory store … 1,204 records", tone: "data" },
  { text: "→ connecting tools: crm.api, mailer.api, calendar.api", tone: "system" },
  { text: "✓ tools connected in 340ms", tone: "success" },
  { text: "→ task: qualify inbound lead #8821", tone: "action" },
  { text: "→ enriching contact: role, company size, intent signal", tone: "data" },
  { text: "→ drafting personalized opener …", tone: "action" },
  { text: "✓ qualification score: 0.92 (high intent)", tone: "success" },
  { text: "→ booking meeting → calendar.api.createEvent()", tone: "action" },
  { text: "✓ meeting booked: Thu 2:30 PM with rep_owens", tone: "success" },
  { text: "→ writing summary to crm.api.updateLead()", tone: "data" },
  { text: "✓ task complete — 0 human actions required", tone: "success" },
];

const toneStyle: Record<LogLine["tone"], string> = {
  system: "text-slate-500",
  action: "text-sky-400",
  success: "text-emerald-400",
  data: "text-amber-400",
};

export default function HeroTerminal() {
  const [lines, setLines] = useState<LogLine[]>([]);
  const [cursorLine, setCursorLine] = useState("");
  const [metrics, setMetrics] = useState({ tasks: 0, hoursSaved: 0, uptime: 100 });
  const containerRef = useRef<HTMLDivElement>(null);
  const idxRef = useRef(0);
  const runIdRef = useRef(0);

  useEffect(() => {
    let cancelled = false;

    async function typeLine(text: string, tone: LogLine["tone"], id: number) {
      for (let i = 1; i <= text.length; i++) {
        if (cancelled) return;
        setCursorLine(text.slice(0, i));
        await new Promise((r) => setTimeout(r, 10 + Math.random() * 14));
      }
      if (cancelled) return;
      setLines((prev) => [...prev.slice(-9), { id, text, tone }]);
      setCursorLine("");
    }

    async function run() {
      while (!cancelled) {
        const item = SCRIPT[idxRef.current % SCRIPT.length];
        await typeLine(item.text, item.tone, runIdRef.current++);
        if (item.tone === "success") {
          setMetrics((m) => ({
            tasks: m.tasks + 1,
            hoursSaved: +(m.hoursSaved + 0.4).toFixed(1),
            uptime: 100,
          }));
        }
        idxRef.current++;
        await new Promise((r) => setTimeout(r, 380));
      }
    }

    run();
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    containerRef.current?.scrollTo({ top: containerRef.current.scrollHeight });
  }, [lines, cursorLine]);

  return (
    <div className="glass relative w-full max-w-xl overflow-hidden rounded-2xl shadow-glow">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 right-0 h-24 bg-gradient-to-b from-amber-500/10 to-transparent animate-scanline" />
      </div>

      <div className="relative flex items-center justify-between border-b border-white/5 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-500/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/70" />
          <span className="ml-3 font-mono text-xs text-slate-500">agent-runtime — fatcamel</span>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-emerald-400">
          <Circle size={7} className="animate-pulse fill-emerald-400" />
          live
        </div>
      </div>

      <div ref={containerRef} className="thin-scroll relative h-64 overflow-y-auto px-4 py-4 font-mono text-[13px] leading-relaxed">
        {lines.map((line) => (
          <div key={line.id} className={toneStyle[line.tone]}>
            {line.text}
          </div>
        ))}
        {cursorLine && (
          <div className={toneStyle[SCRIPT[idxRef.current % SCRIPT.length].tone]}>
            {cursorLine}
            <span className="ml-0.5 inline-block h-3.5 w-1.5 animate-blink bg-amber-400 align-middle" />
          </div>
        )}
      </div>

      <div className="relative grid grid-cols-3 gap-px border-t border-white/5 bg-white/5">
        <Metric icon={Cpu} label="tasks run" value={metrics.tasks.toString()} />
        <Metric icon={Database} label="hrs saved today" value={metrics.hoursSaved.toString()} />
        <Metric icon={CheckCircle2} label="uptime" value={`${metrics.uptime}%`} />
      </div>
    </div>
  );
}

function Metric({ icon: Icon, label, value }: { icon: React.ElementType; label: string; value: string }) {
  return (
    <div className="bg-panel/80 px-4 py-3">
      <div className="flex items-center gap-1.5 text-slate-500">
        <Icon size={12} />
        <span className="text-[10px] uppercase tracking-wide">{label}</span>
      </div>
      <div className="mt-1 font-display text-lg font-semibold text-slate-100">{value}</div>
    </div>
  );
}
