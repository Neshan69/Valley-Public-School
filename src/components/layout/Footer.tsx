import { school, navLinks } from "@/data/site";

const year = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0a0a0a]">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="font-semibold text-white">{school.name}</div>
            <p className="mt-2 text-sm text-slate-400">{school.tagline}</p>
          </div>
          <div>
            <div className="text-sm font-semibold text-white">Quick links</div>
            <ul className="mt-2 space-y-1 text-sm text-slate-400">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <a href={l.to} className="hover:text-white">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold text-white">Contact</div>
            <ul className="mt-2 space-y-1 text-sm text-slate-400">
              <li>{school.address}</li>
              <li>{school.phone}</li>
              <li>{school.email}</li>
              <li>{school.hours}</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-6 text-xs text-slate-500">
          © {year} {school.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
