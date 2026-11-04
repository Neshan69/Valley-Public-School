import { images } from "@/assets/images";
import { principalWelcome } from "@/data/site";

export function PrincipalWelcome() {
  return <section aria-labelledby="principal-welcome-title" className="grid items-center gap-8 rounded-3xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/80 sm:gap-12 sm:p-10 md:grid-cols-[minmax(240px,0.8fr)_1.2fr]">
    <div className="mx-auto w-full max-w-sm overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-xl shadow-slate-900/10 dark:border-slate-700 dark:bg-slate-950"><img src={images.principal} alt="Portrait of the Valley Public School principal" className="aspect-[4/5] w-full object-cover object-center" /></div>
    <div className="max-w-2xl"><p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-700 dark:text-blue-400">Valley Public School</p><h2 id="principal-welcome-title" className="mt-3 text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-3xl">{principalWelcome.heading}</h2><p className="mt-5 text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base">“{principalWelcome.message}”</p><div className="mt-7 border-t border-slate-200 pt-5 dark:border-slate-800"><p className="font-semibold text-slate-900 dark:text-white">{principalWelcome.name}</p><p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{principalWelcome.designation}</p></div></div>
  </section>;
}
