import { Icon, type IconName } from "@/components/common/Icon";

const metrics: { value: string; label: string; icon: IconName; color: string }[] = [
  { value: "Nearly 3", label: "Decades Care (Estd. 2052)", icon: "shield-check", color: "blue" },
  { value: "100%", label: "SEE Board Pass Rate", icon: "award", color: "amber" },
  { value: "1:15", label: "Student–Teacher Ratio", icon: "users", color: "purple" },
  { value: "Active", label: "Sports & Culture Hub", icon: "activity", color: "emerald" },
];

const metricColorClasses: Record<string, string> = {
  blue: "bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400",
  amber: "bg-amber-50 text-amber-600 dark:bg-amber-950/60 dark:text-amber-400",
  purple: "bg-purple-50 text-purple-600 dark:bg-purple-950/60 dark:text-purple-400",
  emerald: "bg-emerald-50 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400",
};

export function MetricCards() {
  return <section aria-label="School highlights" className="grid grid-cols-2 gap-2.5 sm:gap-3 lg:grid-cols-4 lg:gap-4">
    {metrics.map((metric) => <article key={metric.value} className="flex min-w-0 items-center gap-2.5 rounded-xl border border-slate-200/80 bg-white p-3 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:gap-3 sm:rounded-2xl sm:p-4 lg:gap-4 lg:p-5">
      <div className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg sm:h-10 sm:w-10 sm:rounded-xl lg:h-12 lg:w-12 ${metricColorClasses[metric.color]}`}><Icon name={metric.icon} className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" /></div>
      <div className="min-w-0"><div className="text-lg font-black leading-tight text-slate-900 dark:text-white sm:text-xl lg:text-2xl">{metric.value}</div><div className="mt-0.5 text-[10px] font-medium leading-tight text-slate-500 dark:text-slate-400 sm:text-[11px] lg:text-xs">{metric.value === "Nearly 3" ? <><span className="sm:hidden">Decades Care Since 2052</span><span className="hidden sm:inline">{metric.label}</span></> : metric.label}</div></div>
    </article>)}
  </section>;
}
