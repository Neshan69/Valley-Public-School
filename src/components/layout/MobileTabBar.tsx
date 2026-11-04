import { NavLink } from "react-router-dom";
import { Icon } from "@/components/common/Icon";

const tabs = [
  { to: "/", label: "Home", icon: "compass" as const },
  { to: "/about", label: "About", icon: "landmark" as const },
  { to: "/gallery", label: "Gallery", icon: "image" as const },
  { to: "/contacts", label: "Contacts", icon: "map-pin" as const },
];

export function MobileTabBar() {
  return <nav aria-label="Mobile page navigation" className="fixed bottom-0 left-0 right-0 z-40 flex items-center justify-around border-t border-slate-200 bg-white/95 px-3 py-2 shadow-lg backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/95 md:hidden">
    {tabs.map((tab) => <NavLink key={tab.to} to={tab.to} end={tab.to === "/"} className={({ isActive }) => `flex flex-col items-center gap-1 transition-colors ${isActive ? "font-bold text-blue-700 dark:text-blue-400" : "text-slate-500 hover:text-blue-600 dark:text-slate-400"}`}>
      <Icon name={tab.icon} className="h-5 w-5" /><span className="text-[10px]">{tab.label}</span>
    </NavLink>)}
  </nav>;
}
