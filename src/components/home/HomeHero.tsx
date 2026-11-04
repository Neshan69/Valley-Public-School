import { Link } from "react-router-dom";
import { images } from "@/assets/images";
import { Icon } from "@/components/common/Icon";
import { school } from "@/data/site";

export function HomeHero() {
  return <section className="relative flex min-h-[460px] items-end overflow-hidden rounded-3xl border border-slate-200 shadow-2xl dark:border-slate-800 sm:min-h-[520px]">
    <div className="absolute inset-0 z-0"><img alt="Valley Public School building in Lamatar Lalitpur" className="h-full w-full object-cover object-center brightness-95" src={images.campus} /><div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/70 to-slate-900/30" /><div className="absolute inset-0 bg-blue-950/40 mix-blend-multiply" /></div>
    <div className="relative z-10 max-w-3xl space-y-4 p-6 text-white sm:p-10 lg:p-12">
      <div className="flex flex-wrap items-center gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-400/90 px-3 py-1 text-xs font-bold text-slate-950 backdrop-blur-md"><Icon name="compass" className="h-3.5 w-3.5" />Motto: "{school.tagline}"</span>
        <span className="inline-flex items-center gap-1 rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-md"><Icon name="calendar" className="h-3.5 w-3.5 text-amber-300" />Estd. 2052 B.S. (1996 A.D.)</span>
      </div>
      <h1 className="text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">Nurturing Minds, Building Character in the Heart of the Valley</h1>
      <p className="text-sm font-normal leading-relaxed text-slate-200 sm:text-base">English Medium Co-Ed Secondary School nestled at the peaceful foothills of Lamatar, Lalitpur. Away from urban congestion, offering a joyful sanctuary where academic distinction and moral integrity flourish together.</p>
      <div className="flex items-center gap-2 text-xs text-slate-300 sm:text-sm"><Icon name="map-pin" className="h-4 w-4 flex-shrink-0 text-rose-400" />Mahalaxmi Municipality Ward No. 9, Lamatar, Lalitpur, Bagmati Province</div>
      <div className="flex flex-col gap-3 pt-2 sm:flex-row">
        <Link to="/contacts" className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-amber-400 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-amber-400/20 transition-all hover:bg-amber-300 active:scale-95 sm:w-auto"><Icon name="clipboard-check" className="h-4 w-4" />Admissions enquiries</Link>
        <Link to="/about" className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-700/60 bg-slate-900/60 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-md transition-all hover:bg-slate-900/80 active:scale-95 sm:w-auto">Read Our Story<Icon name="arrow-right" className="h-4 w-4" /></Link>
      </div>
    </div>
  </section>;
}
