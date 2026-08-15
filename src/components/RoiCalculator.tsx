"use client";

import { useMemo, useState } from "react";
import { Users, DollarSign, Clock, TrendingUp } from "lucide-react";

const HOURS_PER_WEEK_ON_MANUAL_WORK = 12; // avg. manual/repetitive hours per employee per week
const AUTOMATION_RECOVERY_RATE = 0.7; // matches the 70% headline claim
const WEEKS_PER_YEAR = 48;

export default function RoiCalculator() {
  const [teamSize, setTeamSize] = useState(25);
  const [avgSalary, setAvgSalary] = useState(65000);

  const results = useMemo(() => {
    const hourlyRate = avgSalary / 2080; // standard working hours/year
    const weeklyHoursRecovered = teamSize * HOURS_PER_WEEK_ON_MANUAL_WORK * AUTOMATION_RECOVERY_RATE;
    const annualHoursRecovered = Math.round(weeklyHoursRecovered * WEEKS_PER_YEAR);
    const annualDollarsRecovered = Math.round(annualHoursRecovered * hourlyRate);
    const fteEquivalent = +(annualHoursRecovered / 2080).toFixed(1);
    return { annualHoursRecovered, annualDollarsRecovered, fteEquivalent };
  }, [teamSize, avgSalary]);

  const formatCurrency = (n: number) =>
    n >= 1_000_000 ? `$${(n / 1_000_000).toFixed(2)}M` : `$${n.toLocaleString("en-US")}`;

  return (
    <div className="glass grid overflow-hidden rounded-2xl shadow-glow lg:grid-cols-2">
      <div className="p-8 lg:p-10">
        <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">ROI Calculator</span>
        <h3 className="mt-2 font-display text-2xl font-semibold text-slate-100">
          See what agents are worth to your team
        </h3>
        <p className="mt-2 text-sm text-slate-400">
          Adjust team size and average salary to estimate the hours and dollars an agent fleet could recover annually.
        </p>

        <div className="mt-8 space-y-8">
          <SliderField
            icon={Users}
            label="Team size"
            value={teamSize}
            min={5}
            max={500}
            step={5}
            displayValue={`${teamSize} people`}
            onChange={setTeamSize}
          />
          <SliderField
            icon={DollarSign}
            label="Average annual salary"
            value={avgSalary}
            min={35000}
            max={200000}
            step={5000}
            displayValue={`$${avgSalary.toLocaleString("en-US")}`}
            onChange={setAvgSalary}
          />
        </div>
      </div>

      <div className="relative flex flex-col justify-center gap-6 border-t border-white/5 bg-panel/80 p-8 lg:border-l lg:border-t-0 lg:p-10">
        <ResultRow
          icon={DollarSign}
          label="Estimated annual savings"
          value={formatCurrency(results.annualDollarsRecovered)}
          accent
        />
        <ResultRow
          icon={Clock}
          label="Hours recovered per year"
          value={`${results.annualHoursRecovered.toLocaleString("en-US")} hrs`}
        />
        <ResultRow
          icon={TrendingUp}
          label="Equivalent full-time capacity"
          value={`${results.fteEquivalent} FTE`}
        />
        <p className="mt-2 text-xs leading-relaxed text-slate-500">
          Estimates based on {Math.round(AUTOMATION_RECOVERY_RATE * 100)}% recovery of {HOURS_PER_WEEK_ON_MANUAL_WORK} hrs/week
          of manual work per employee, {WEEKS_PER_YEAR} working weeks/year. Actual results vary by workflow.
        </p>
      </div>
    </div>
  );
}

function SliderField({
  icon: Icon,
  label,
  value,
  min,
  max,
  step,
  displayValue,
  onChange,
}: {
  icon: React.ElementType;
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  displayValue: string;
  onChange: (v: number) => void;
}) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div>
      <div className="flex items-center justify-between text-sm">
        <span className="flex items-center gap-2 text-slate-300">
          <Icon size={15} className="text-amber-400" />
          {label}
        </span>
        <span className="font-mono text-amber-400">{displayValue}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-3 h-1.5 w-full cursor-pointer appearance-none rounded-full bg-white/10 accent-amber-500"
        style={{
          background: `linear-gradient(to right, #f59e0b ${pct}%, rgba(255,255,255,0.1) ${pct}%)`,
        }}
        aria-label={label}
      />
    </div>
  );
}

function ResultRow({
  icon: Icon,
  label,
  value,
  accent,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div className="flex items-center justify-between">
      <span className="flex items-center gap-2 text-sm text-slate-400">
        <Icon size={15} />
        {label}
      </span>
      <span className={`font-display text-2xl font-semibold ${accent ? "text-gradient-amber" : "text-slate-100"}`}>
        {value}
      </span>
    </div>
  );
}
