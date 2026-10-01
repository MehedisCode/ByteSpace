import Image from "next/image";
import { cn } from "@/lib/utils";
import { ENROLL } from "../course-details.data";
import { IncludeIcon } from "./icons";

type EnrollCardProps = {
  className?: string;
};

export function EnrollCard({ className }: EnrollCardProps) {
  return (
    <aside
      className={cn(
        "rounded-[24px] bg-white p-8 shadow-[0_24px_70px_-50px_rgba(4,8,25,0.5)] lg:p-10",
        className,
      )}
    >
      <p className="font-display text-xl font-semibold text-ink">
        {ENROLL.lessonsHeading}
      </p>

      <ul className="mt-6 space-y-3">
        {ENROLL.lessons.map((lesson) => (
          <li key={lesson.no} className="flex items-start gap-3">
            <span className="font-sans text-base font-medium text-ink">
              {lesson.no}
            </span>
            <span className="flex-1 font-sans text-base font-medium text-ink">
              {lesson.title}
            </span>
            <span className="shrink-0 font-sans text-base text-brand">
              {lesson.duration}
            </span>
          </li>
        ))}
      </ul>

      <p className="mt-3 font-sans text-base text-pill">
        {ENROLL.moreLessons}
      </p>

      <p className="mt-6 font-sans text-base leading-relaxed text-pill">
        {ENROLL.cta}
      </p>

      <p className="mt-6 font-display text-4xl font-semibold text-brand">
        {ENROLL.price}
        <span className="ml-1 font-sans text-base font-normal text-pill">
          {ENROLL.priceSuffix}
        </span>
      </p>

      <button
        type="button"
        className="mt-6 h-[46px] w-full rounded-pill bg-accent font-sans text-lg font-medium text-ink transition-colors hover:bg-accent-strong"
      >
        {ENROLL.action}
      </button>

      <p className="mt-6 font-display text-xl font-semibold text-ink">
        {ENROLL.includesHeading}
      </p>

      <ul className="mt-6 space-y-3">
        {ENROLL.includes.map((item) => (
          <li
            key={item}
            className="flex items-center gap-3 font-sans text-base text-pill"
          >
            <IncludeIcon className="size-6 shrink-0 text-pill" />
            {item}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex items-center gap-3 border-t border-[#e5e6e8] pt-6">
        <Image
          src={ENROLL.instructor.avatar}
          alt={ENROLL.instructor.name}
          width={52}
          height={52}
          className="size-[52px] rounded-full object-cover"
        />
        <div>
          <p className="font-sans text-lg font-medium text-ink">
            {ENROLL.instructor.name}
          </p>
          <p className="font-sans text-base text-pill">
            {ENROLL.instructor.role}
          </p>
        </div>
      </div>

      <p className="mt-6 font-sans text-base leading-relaxed text-pill">
        {ENROLL.cta}
      </p>

      <button
        type="button"
        className="mt-6 inline-flex h-10 items-center rounded-pill border border-[#ced0d3] px-5 font-sans text-base font-medium text-pill transition-colors hover:bg-subtle"
      >
        {ENROLL.profile}
      </button>
    </aside>
  );
}
