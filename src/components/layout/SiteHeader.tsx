import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { liveNavLinks, school } from "@/data/site";
import { images } from "@/assets/images";
import { Icon } from "@/components/common/Icon";
import { useTheme } from "@/hooks/useTheme";

export function SiteHeader() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const devanagariDigits = "०१२३४५६७८९";
  const toDevanagari = (n: number): string =>
    String(n)
      .split("")
      .map((ch) => devanagariDigits[Number(ch)] ?? ch)
      .join("");

  const nepaliMonths = [
    "Baisakh",
    "Jestha",
    "Ashadh",
    "Shrawan",
    "Bhadra",
    "Ashwin",
    "Kartik",
    "Mangsir",
    "Poush",
    "Magh",
    "Falgun",
    "Chaitra",
  ];

  const toNepaliDate = (date: Date): { year: number; month: number; day: number; monthName: string } => {
    // Reference: 1 Baisakh 2083 B.S. ≈ 14 April 2026 A.D.
    const ref = new Date(Date.UTC(2026, 3, 14));
    const diffDays = Math.floor((date.getTime() - ref.getTime()) / 86400000);
    let dayOfYear = 1 + diffDays;
    let year = 2083;
    while (dayOfYear > 365) {
      dayOfYear -= 365;
      year += 1;
    }
    while (dayOfYear < 1) {
      dayOfYear += 365;
      year -= 1;
    }
    const lengths = [31, 31, 32, 31, 31, 30, 30, 30, 30, 30, 30, 30];
    let mi = 0;
    let rem = dayOfYear;
    while (mi < 12 && rem > lengths[mi]) {
      rem -= lengths[mi];
      mi += 1;
    }
    return { year, month: mi + 1, day: rem, monthName: nepaliMonths[mi] };
  };

  const nepali = toNepaliDate(now);

  const { isDark, toggleTheme } = useTheme();
  const linkClass = ({ isActive }: { isActive: boolean }) => `nav-btn rounded-lg px-4 py-2 text-sm font-semibold transition-all ${isActive ? "bg-blue-50 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400" : "text-slate-600 hover:bg-slate-100 hover:text-blue-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-blue-400"}`;

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur-md transition-colors dark:border-slate-800 dark:bg-slate-900/95">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
        <Link to="/" className="group flex items-center gap-3">
          <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white p-1 shadow-md shadow-blue-500/10 transition-transform group-hover:scale-105 dark:border-slate-700 sm:h-12 sm:w-12">
            <img src={images.logo} alt={`${school.name} logo`} className="h-full w-full rounded-lg object-contain" />
          </span>
          <span className="flex flex-col">
            <span className="flex items-center gap-2">
              <span className="text-base font-extrabold leading-tight tracking-tight text-blue-900 dark:text-blue-100 sm:text-xl">Valley Public School</span>
              <span className="hidden rounded-full border border-blue-200 bg-blue-100 px-2 py-0.5 text-[10px] font-bold text-blue-800 dark:border-blue-800 dark:bg-blue-950/80 dark:text-blue-300 sm:inline-block">Estd. 2052 B.S.</span>
            </span>
            <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 sm:text-xs">Lamatar, Lalitpur · <em>"Love, Honesty and Service"</em></span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:gap-2 md:flex" aria-label="Main navigation">
          {liveNavLinks.map((link) => <NavLink key={link.to} to={link.to} end={link.to === "/"} className={linkClass}>{link.label}</NavLink>)}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a className="hidden items-center gap-1.5 rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-700 transition-colors hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 sm:inline-flex" href={`tel:${school.phone}`}>
            <Icon name="phone-call" className="h-3.5 w-3.5 text-emerald-600" />01-5580355
          </a>
          <button type="button" aria-label="Toggle dark mode" onClick={toggleTheme} className="rounded-xl border border-slate-200 bg-slate-50 p-2 text-slate-700 transition-colors hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 sm:p-2.5">
            {isDark ? <Icon name="sun" className="h-5 w-5 text-amber-400" /> : <Icon name="moon" className="h-5 w-5" />}
          </button>
          <Link to="/contacts" className="hidden items-center gap-2 rounded-xl bg-blue-700 px-4 py-2 text-sm font-bold text-white shadow-sm shadow-blue-700/20 transition-all hover:bg-blue-800 active:scale-95 lg:flex">Apply / Visit <Icon name="arrow-right" className="h-4 w-4" /></Link>
          {/* Digital clock */}
          <div className="flex flex-col items-center gap-0.5">
            <div className="flex items-center gap-1 rounded-lg border border-slate-200 bg-slate-50 p-1.5 text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200">
              <span className="text-xs font-mono font-bold tabular-nums">{String(now.getHours()).padStart(2, "0")}</span>
              <span className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400">:</span>
              <span className="text-xs font-mono font-bold tabular-nums">{String(now.getMinutes()).padStart(2, "0")}</span>
              <span className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400">:</span>
              <span className="text-xs font-mono font-bold tabular-nums">{String(now.getSeconds()).padStart(2, "0")}</span>
            </div>
            <div className="text-[10px] font-mono font-bold text-slate-500 dark:text-slate-400 leading-none">
              {toDevanagari(nepali.day)} {nepali.monthName} {toDevanagari(nepali.year)}
            </div>
          </div>
          {/* Hamburger menu system (commented — ready to re-enable; add back `const [menuOpen, setMenuOpen] = useState(false);` above when enabling)
          <button type="button" className="rounded-lg p-1 text-slate-700 dark:text-white md:hidden" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>
            {menuOpen ? <Icon name="x" className="h-6 w-6" /> : <Icon name="menu" className="h-6 w-6" />}
          </button>
          */}
        </div>
      </div>
      {/* Hamburger mobile navigation (commented — ready to re-enable; requires the state + button above to be uncommented too)
      {menuOpen && <nav className="border-t border-slate-200 px-5 py-3 dark:border-slate-800 md:hidden" aria-label="Mobile navigation">{liveNavLinks.map((link) => <NavLink key={link.to} to={link.to} end={link.to === "/"} onClick={() => setMenuOpen(false)} className={({ isActive }) => `block rounded-md px-3 py-2 text-sm ${isActive ? "font-semibold text-blue-700 dark:text-blue-400" : "text-slate-600 dark:text-slate-300"}`}>{link.label}</NavLink>)}</nav>}
      */}
    </header>
  );
}
