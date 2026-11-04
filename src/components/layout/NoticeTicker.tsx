import { Link } from "react-router-dom";
import { Container } from "@/components/common/ui";

export function NoticeTicker() {
  return (
    <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 py-2 text-xs text-white shadow-inner">
      <Container className="flex items-center justify-between">
        <div className="flex min-w-0 items-center gap-2 overflow-hidden whitespace-nowrap">
          <span className="flex-shrink-0 animate-pulse rounded bg-amber-400 px-2 py-0.5 text-[10px] font-black uppercase tracking-wider text-blue-950">Notice</span>
          <p className="truncate text-[11px] font-medium text-blue-50 sm:text-xs">Contact the school for current admissions and campus-visit information.</p>
        </div>
        <Link to="/contacts" className="ml-4 hidden flex-shrink-0 text-[11px] font-bold underline hover:text-amber-300 md:inline-flex">Inquire Now →</Link>
      </Container>
    </div>
  );
}
