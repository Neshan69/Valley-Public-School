import { Link } from "react-router-dom";
import { school } from "@/data/site";
import { EnquiryForm } from "@/components/forms/EnquiryForm";

export function AdmissionsPage() {
  return <section className="py-12"><h1 className="text-3xl font-bold text-slate-900 dark:text-white">Admissions</h1><p className="mt-4 max-w-2xl text-slate-500 dark:text-slate-400">Contact the school directly for current admissions information.</p><div className="mt-8"><EnquiryForm /></div><div className="mt-6 flex flex-wrap gap-3"><a className="rounded-md bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800" href={`tel:${school.phone}`}>Call {school.phone}</a><a className="rounded-md bg-slate-200 px-5 py-2.5 text-sm font-medium text-slate-800 hover:bg-slate-300 dark:bg-white/10 dark:text-white dark:hover:bg-white/20" href={`mailto:${school.email}`}>Email the school</a><Link to="/contacts" className="rounded-md px-5 py-2.5 text-sm font-medium text-blue-700 hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-white/5">Contact &amp; Visit</Link></div></section>;
}
