import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { NoticeTicker } from "@/components/layout/NoticeTicker";
import { MobileTabBar } from "@/components/layout/MobileTabBar";
import { SEO } from "@/components/seo/SEO";

const pageMetadata: Record<string, { title: string; description: string }> = {
  "/": { title: "Valley Public School - Official Portal", description: "Nurturing minds and building character in Lamatar, Lalitpur. Love, Honesty and Service." },
  "/about": { title: "Our Story | Valley Public School", description: "Learn about Valley Public School's story, values, and milestones in Lamatar, Lalitpur." },
  "/gallery": { title: "Campus Gallery | Valley Public School", description: "View campus, activities, and school community moments from Valley Public School." },
  "/contacts": { title: "Contact & Visit | Valley Public School", description: "Contact Valley Public School or plan a campus visit in Lamatar, Lalitpur." },
  "/contact": { title: "Contact & Visit | Valley Public School", description: "Contact Valley Public School or plan a campus visit in Lamatar, Lalitpur." },
  "/academics": { title: "Academics | Valley Public School", description: "Explore academic levels and learning programs at Valley Public School." },
  "/facilities": { title: "Facilities | Valley Public School", description: "Explore school facilities at Valley Public School in Lamatar, Lalitpur." },
  "/admissions": { title: "Admissions | Valley Public School", description: "Contact Valley Public School for admissions information." },
};

export function AppLayout() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 pb-20 text-slate-800 transition-colors duration-200 selection:bg-blue-600 selection:text-white dark:bg-slate-950 dark:text-slate-100 md:pb-0">
      <SEO {...(pageMetadata[location.pathname] ?? pageMetadata["/"])} path={location.pathname} />
      <SiteHeader />
      <NoticeTicker />
      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-6 sm:px-6 sm:py-8 lg:px-8"><div key={location.pathname} className="page-route-enter"><Outlet /></div></main>
      <SiteFooter />
      <MobileTabBar />
    </div>
  );
}
