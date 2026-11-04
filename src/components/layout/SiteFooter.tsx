import { Link } from "react-router-dom";
import { liveNavLinks, school } from "@/data/site";
import { Icon } from "@/components/common/Icon";
import { images } from "@/assets/images";
import { currentYear } from "@/utils/format";

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white transition-colors dark:border-slate-800 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl space-y-10 px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-2">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white p-1 dark:border-slate-700"><img src={images.logo} alt="" className="h-full w-full rounded-lg object-contain" /></span>
              <div><div className="text-lg font-extrabold text-blue-900 dark:text-blue-100">Valley Public School</div><div className="text-xs text-slate-500"><em>"Love, Honesty and Service"</em> · Estd. 2052 B.S.</div></div>
            </div>
            <p className="max-w-sm text-xs leading-relaxed text-slate-500 dark:text-slate-400">An inclusive, homely learning sanctuary committed to academic excellence, creative exploration, and personal integrity in a serene campus environment nestled in Lamatar, Lalitpur.</p>
          </div>
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">Quick Navigation</h2>
            <ul className="space-y-2 text-xs">{liveNavLinks.map((link) => <li key={link.to}><Link className="text-slate-500 hover:text-blue-600 dark:hover:text-blue-400" to={link.to}>{link.label}</Link></li>)}</ul>
          </div>
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">Academics</h2>
            <ul className="space-y-2 text-xs text-slate-500"><li>Pre-Primary (Playgroup – UKG)</li><li>Basic Level (Classes 1 – 8)</li><li>Secondary Level (Class 9 &amp; 10 SEE)</li><li>Computer &amp; Experiential Labs</li><li>Sports &amp; Inter-Valley Clubs</li></ul>
          </div>
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">Get In Touch</h2>
            <div className="space-y-2 text-xs text-slate-500">
              <p className="flex items-start gap-2"><Icon name="map-pin" className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-rose-500" />{school.address}</p>
              <p className="flex items-center gap-2"><Icon name="phone" className="h-3.5 w-3.5 flex-shrink-0 text-blue-500" />{school.phone}</p>
              <p className="flex items-center gap-2 truncate"><Icon name="mail" className="h-3.5 w-3.5 flex-shrink-0 text-indigo-500" /><span className="truncate">{school.email}</span></p>
              <p className="flex items-center gap-2 text-emerald-600"><Icon name="clock" className="h-3.5 w-3.5 flex-shrink-0" />Sun – Fri: 8:30 AM – 4:30 PM</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 text-xs text-slate-500 dark:border-slate-800 sm:flex-row">
          <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-500" /><span>Affiliated with Ministry of Education &amp; National Examination Board (NEB), Nepal</span></div>
          <div>© {currentYear()} Valley Public School. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
