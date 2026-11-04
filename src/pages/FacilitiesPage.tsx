import { facilities } from "@/data/site";

export function FacilitiesPage() {
  return <section className="py-12"><h1 className="text-3xl font-bold text-slate-900 dark:text-white">Facilities</h1><ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{facilities.map((facility) => <li key={facility} className="rounded-xl border border-slate-200 bg-white p-4 text-slate-600 dark:border-slate-800 dark:bg-white/5 dark:text-slate-300">{facility}</li>)}</ul></section>;
}
