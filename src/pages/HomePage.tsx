import { AccomplishmentsSection } from "@/components/home/AccomplishmentsSection";
import { AcademicWingsSection } from "@/components/home/AcademicWingsSection";
import { HomeHero } from "@/components/home/HomeHero";
import { MetricCards } from "@/components/home/MetricCards";
import { PrincipalWelcome } from "@/components/home/PrincipalWelcome";

export function HomePage() {
  return <div className="space-y-12"><HomeHero /><MetricCards /><PrincipalWelcome /><AccomplishmentsSection /><AcademicWingsSection /></div>;
}
