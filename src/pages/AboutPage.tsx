import { Icon } from "@/components/common/Icon";
import { corePillars, milestones } from "@/data/site";

const pillarColors = {
  pink: "bg-pink-100 text-pink-600 dark:bg-pink-950/60",
  blue: "bg-blue-100 text-blue-600 dark:bg-blue-950/60",
  amber: "bg-amber-100 text-amber-600 dark:bg-amber-950/60",
  purple: "bg-purple-100 text-purple-600 dark:bg-purple-950/60",
};
const milestoneColors = {
  blue: "bg-blue-600 text-blue-600 dark:text-blue-400",
  indigo: "bg-indigo-600 text-indigo-600 dark:text-indigo-400",
  amber: "bg-amber-500 text-amber-500",
  emerald: "bg-emerald-600 text-emerald-600",
};

export function AboutPage() {
  return <section className="space-y-12">
    <header className="space-y-3 rounded-3xl bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-800 p-6 text-white shadow-lg sm:p-10">
      <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold backdrop-blur-md"><Icon name="landmark" className="h-3.5 w-3.5 text-amber-300" />Established 2052 B.S. · Lamatar, Lalitpur</div>
      <h1 className="text-2xl font-extrabold tracking-tight sm:text-4xl">Our Story, Ethos &amp; Heritage</h1>
      <p className="max-w-3xl text-sm leading-relaxed text-blue-100 sm:text-base">Nurturing young minds in the green, tranquil lap of Lamatar Hills with the timeless guiding compass of <strong className="text-white">"Love, Honesty and Service"</strong>.</p>
    </header>
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-10">
      <div className="space-y-4">
        <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-amber-600 dark:text-amber-400"><Icon name="feather" className="h-4 w-4" />Executive Principal's Message</div>
        <h2 className="text-xl font-extrabold text-slate-900 dark:text-white sm:text-2xl">Gopal Krishna Shrestha</h2>
        <blockquote className="border-l-4 border-amber-400 py-1 pl-4 text-sm italic leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">“When we laid the foundation stone in 2052 B.S., our dream wasn’t just to erect another brick structure. We wanted to build a sanctuary where education feels like an extension of home — where kindness precedes competition, and moral courage is cherished above mere report cards.”</blockquote>
        <p className="text-xs leading-relaxed text-slate-500 dark:text-slate-400 sm:text-sm">Nestled amid the terraced hills of Lamatar, Valley Public School has stood steadfast for nearly thirty years. Our children do not breathe city fumes or navigate noisy ring-roads; they wake up to crisp Himalayan air, birdsong, and teachers who know each child by name, temper, and hidden brilliance.</p>
        <div className="flex items-center gap-2 pt-2 text-xs font-bold text-blue-700 dark:text-blue-400"><Icon name="check-circle" className="h-4 w-4 text-emerald-500" />Over 1,800 alumni guiding communities across Nepal and abroad</div>
      </div>
    </section>
    <section className="space-y-6">
      <div><span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">Guiding Compass</span><h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">Our Core Pillars</h2></div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">{corePillars.map((pillar) => <article key={pillar.title} className="space-y-2 rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900"><div className={`flex h-10 w-10 items-center justify-center rounded-lg ${pillarColors[pillar.color as keyof typeof pillarColors]}`}><Icon name={pillar.icon} className="h-5 w-5" /></div><h3 className="text-base font-bold text-slate-900 dark:text-white">{pillar.title}</h3><p className="text-xs text-slate-500 dark:text-slate-400">{pillar.description}</p></article>)}</div>
    </section>
    <section className="space-y-6 rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900 sm:p-10">
      <div><span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Milestones</span><h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">Our Three-Decade Odyssey</h2></div>
      <div className="relative space-y-6 pl-8 before:absolute before:bottom-2 before:left-3 before:top-2 before:w-0.5 before:bg-slate-200 dark:before:bg-slate-800">{milestones.map((milestone) => <article key={milestone.date} className="relative"><span className={`absolute -left-[29px] top-1.5 h-3.5 w-3.5 rounded-full ring-4 ring-white dark:ring-slate-900 ${milestoneColors[milestone.color as keyof typeof milestoneColors].split(" ")[0]}`} /><span className={`text-xs font-bold ${milestoneColors[milestone.color as keyof typeof milestoneColors].split(" ").slice(1).join(" ")}`}>{milestone.date}</span><h3 className="mt-0.5 text-base font-bold text-slate-900 dark:text-white">{milestone.title}</h3><p className="text-xs text-slate-500 dark:text-slate-400">{milestone.description}</p></article>)}</div>
    </section>
  </section>;
}
