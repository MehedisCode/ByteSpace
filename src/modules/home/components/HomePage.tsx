import { HeroSection } from "@/modules/hero";
import { CategoryFilters } from "./CategoryFilters";
import { CourseGrid } from "./CourseGrid";
import { CreatorCta } from "./CreatorCta";
import { GrowthSection } from "./GrowthSection";
import { LearningPaths } from "./LearningPaths";
import { LogoStrip } from "./LogoStrip";
import { SiteFooter } from "./SiteFooter";
import { SkillsHeading } from "./SkillsHeading";
import { Testimonials } from "./Testimonials";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <LogoStrip />
      <SkillsHeading />
      <CategoryFilters />
      <CourseGrid />
      <LearningPaths />
      <GrowthSection />
      <CreatorCta />
      <Testimonials />
      <SiteFooter />
    </>
  );
}
