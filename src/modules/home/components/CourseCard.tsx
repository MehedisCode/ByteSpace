import Image from "next/image";
import Link from "next/link";
import { courseDetails, creatorProfile } from "@/config/routes";
import { cn } from "@/lib/utils";
import { COURSE_AVATARS } from "../home.data";
import type { Course } from "../home.data";
import { SignalBarsIcon, StarIcon } from "./icons";

type CourseCardProps = {
  course: Course;
  /** When false the card renders as a static block (used in decorative collages). */
  link?: boolean;
  className?: string;
};

export function CourseCard({ course, link = true, className }: CourseCardProps) {
  return (
    <article
      className={cn(
        "group relative flex h-full flex-col rounded-[20px] border border-black/5 bg-white p-4 shadow-[0_16px_40px_-28px_rgba(4,8,25,0.4)]",
        link && "transition-transform duration-200 hover:-translate-y-1",
        className,
      )}
    >
      {link && (
        <Link
          href={courseDetails(course.slug)}
          aria-label={course.title}
          className="absolute inset-0 z-0 rounded-[20px]"
        />
      )}

      <div className="relative overflow-hidden rounded-[14px]">
        <Image
          src={course.image}
          alt={course.title}
          width={341}
          height={195}
          className="h-auto w-full object-cover"
        />
        <div className="absolute inset-x-3 bottom-3 flex flex-wrap gap-2">
          {course.badges.map((badge) => (
            <span
              key={badge}
              className="rounded-pill bg-black/35 px-2.5 py-1 font-sans text-xs font-medium text-white backdrop-blur-sm"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-4 flex items-start justify-between gap-2">
        <h3 className="truncate font-display text-xl font-semibold text-black">
          {course.title}
        </h3>
        <span className="flex shrink-0 items-center gap-1 font-sans text-lg text-body">
          {course.rating}
          <StarIcon className="size-4 text-[#d1d1d6]" />
        </span>
      </div>

      <p className="mt-1 font-sans text-xs text-body">
        {link ? (
          <Link
            href={creatorProfile(course.creatorSlug)}
            className="relative z-10 transition-colors hover:text-ink"
          >
            {course.author}
          </Link>
        ) : (
          course.author
        )}
      </p>

      <div className="mt-3 flex items-center gap-2">
        <span className="flex items-center gap-1.5 rounded-pill bg-subtle px-3 py-1.5 font-sans text-xs font-medium text-pill">
          <SignalBarsIcon className="size-3.5 text-body" />
          {course.level}
        </span>
        <Image
          src={COURSE_AVATARS}
          alt=""
          width={158}
          height={40}
          className="h-[34px] w-auto"
        />
      </div>

      <p className="mt-4 font-display text-xl font-semibold text-brand">
        {course.price}
        <span className="ml-0.5 font-sans text-xs font-normal text-body">
          {course.priceSuffix}
        </span>
      </p>
    </article>
  );
}
