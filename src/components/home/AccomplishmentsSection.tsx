import { Link } from "react-router-dom";
import { achievements } from "@/data/site";
import { Icon } from "@/components/common/Icon";

const colorClasses = {
  amber: "text-amber-600 dark:text-amber-400",
  purple: "text-purple-600 dark:text-purple-400",
  blue: "text-blue-600 dark:text-blue-400",
};

export function AccomplishmentsSection() {
  return <section className="space-y-6">
    <div className="flex flex-col justify-between gap-2 border-b border-slate-200 pb-4 dark:border-slate-800 sm:flex-row sm:items-end">
      <div><div className="flex items-center gap-2"><span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider text-amber-600 dark:bg-amber-950/60 dark:text-amber-400">Honors 2080–2081</span><span className="text-xs text-slate-500 dark:text-slate-400">Front Banner Archive</span></div><h2 className="mt-1 text-2xl font-extrabold text-slate-900 dark:text-white">Hall of Accomplishments</h2></div>
      <Link to="/gallery" className="flex items-center gap-1 text-xs font-bold text-blue-600 hover:underline dark:text-blue-400 sm:text-sm">Explore Full Campus Gallery<Icon name="arrow-right" className="h-4 w-4" /></Link>
    </div>
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {achievements.map((achievement) => <article key={achievement.title} className="flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition-transform hover:-translate-y-1 dark:border-slate-800 dark:bg-slate-900"><div className="flex flex-1 flex-col justify-between space-y-3 p-5"><div><h3 className="text-base font-bold text-slate-900 dark:text-white">{achievement.title}</h3><p className="mt-1 text-xs text-slate-600 dark:text-slate-400">{achievement.description}</p></div><div className={`flex items-center gap-1.5 border-t border-slate-100 pt-2 text-[11px] font-semibold dark:border-slate-800 ${colorClasses[achievement.color as keyof typeof colorClasses]}`}><Icon name={achievement.icon} className="h-4 w-4" />{achievement.recognition}</div></div></article>)}
    </div>
  </section>;
}
