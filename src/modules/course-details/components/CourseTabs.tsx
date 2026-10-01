import Link from "next/link";
import { courseDetails, courseLessons, courseReviews } from "@/config/routes";
import { cn } from "@/lib/utils";

export type CourseTabKey = "about" | "lessons" | "reviews";

export type CourseTab = {
  key: CourseTabKey;
  label: string;
};

const HREF: Record<CourseTabKey, (slug: string) => string> = {
  about: courseDetails,
  lessons: courseLessons,
  reviews: courseReviews,
};

type CourseTabsProps = {
  slug: string;
  active: CourseTabKey;
  tabs: CourseTab[];
};

export function CourseTabs({ slug, active, tabs }: CourseTabsProps) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {tabs.map((tab) => {
        const isActive = tab.key === active;
        return (
          <Link
            key={tab.key}
            href={HREF[tab.key](slug)}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "flex h-[43px] items-center rounded-pill px-5 font-sans text-base font-medium transition-colors",
              isActive
                ? "bg-accent text-ink"
                : "bg-subtle text-pill hover:bg-track",
            )}
          >
            {tab.label}
          </Link>
        );
      })}
    </div>
  );
}
