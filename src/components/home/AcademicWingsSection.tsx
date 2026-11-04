import { academicWings } from "@/data/site";

export function AcademicWingsSection() {
  return <section className="space-y-6">
    <div className="mx-auto max-w-xl space-y-1 text-center"><h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">Academic Wings &amp; Facilities</h2><p className="text-xs text-slate-500 dark:text-slate-400 sm:text-sm">Holistic growth from early kindergarten curiosity to high secondary SEE board success.</p></div>
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">{academicWings.map((wing) => <article key={wing.title} className="space-y-2 rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900"><span className="text-2xl">{wing.icon}</span><h3 className="text-base font-bold text-slate-900 dark:text-white">{wing.title}</h3><p className="text-xs text-slate-500 dark:text-slate-400">{wing.description}</p></article>)}</div>
  </section>;
}
