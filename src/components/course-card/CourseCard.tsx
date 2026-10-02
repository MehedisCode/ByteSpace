import Image from "next/image";
import Link from "next/link";
import { courseDetails, creatorProfile } from "@/config/routes";
import { cn } from "@/lib/utils";
import { CARD_AVATARS, CARD_LEARNERS } from "./course-card.data";
import type { CardCourse } from "./course-card.types";
import { SignalBarsIcon, StarIcon } from "./icons";

type CourseCardProps = {
  course: CardCourse;
  /** When false the card renders as a static block (used in decorative collages). */
  link?: boolean;
  className?: string;
};

export function CourseCard({ course, link = true, className }: CourseCardProps) {
  return (
    <article
      className={cn(
        "group relative flex flex-col rounded-[24px] border border-[#ced0d3] bg-white p-4",
        link && "transition-transform duration-200 hover:-translate-y-1",
        className,
      )}
    >
      {link && (
        <Link
          href={courseDetails(course.slug)}
          aria-label={course.title}
          className="absolute inset-0 z-10 rounded-[24px]"
        />
      )}

      <div className="relative overflow-hidden rounded-[12px]">
        <Image
          src={course.image}
          alt={course.title}
          width={341}
          height={195}
          className="h-[195px] w-full object-cover"
        />
        <div className="absolute inset-x-[13px] bottom-[19px] flex flex-nowrap gap-2">
          {course.badges.map((badge) => (
            <span
              key={badge}
              className="flex h-[26px] items-center whitespace-nowrap rounded-pill bg-track/80 px-2.5 font-sans text-xs font-medium text-body backdrop-blur-sm"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-5 flex items-start justify-between gap-2">
        <h3 className="truncate font-display text-xl font-semibold text-black">
          {course.title}
        </h3>
        <span className="flex shrink-0 items-center font-sans text-lg text-body">
          {course.rating}
          <StarIcon className="size-6 text-[#ced0d3]" />
        </span>
      </div>

      <p className="font-sans text-xs text-body">
        by{" "}
        {link ? (
          <Link
            href={creatorProfile(course.creatorSlug)}
            className="relative z-20 text-brand transition-opacity hover:opacity-75"
          >
            {course.author}
          </Link>
        ) : (
          <span className="text-brand">{course.author}</span>
        )}
      </p>

      <div className="mt-4 flex items-center gap-3">
        <span className="flex h-8 items-center gap-1.5 rounded-pill bg-subtle px-3 font-sans text-xs font-medium text-pill">
          <SignalBarsIcon className="size-3.5 text-pill" />
          {course.level}
        </span>

        <span className="flex items-center">
          {CARD_AVATARS.map((avatar, index) => (
            <Image
              key={avatar}
              src={avatar}
              alt=""
              width={32}
              height={32}
              className={cn(
                "size-8 rounded-full object-cover",
                index > 0 && "-ml-2",
              )}
            />
          ))}
          <span className="-ml-2 flex size-8 items-center justify-center rounded-full bg-accent font-sans text-xs font-medium text-ink">
            {CARD_LEARNERS}
          </span>
        </span>
      </div>

      <p className="mt-3 font-display text-xl font-semibold text-brand">
        {course.price}
        <span className="ml-0.5 font-sans text-xs font-normal text-body">
          {course.priceSuffix}
        </span>
      </p>
    </article>
  );
}
