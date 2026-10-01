import Image from "next/image";
import { cn } from "@/lib/utils";
import { COURSE_DETAILS } from "../course-details.data";
import { CheckIcon } from "./icons";

export function CourseMain() {
  return (
    <div>
      <div className="flex flex-wrap items-center gap-3">
        {COURSE_DETAILS.tabs.map((tab) => {
          const active = tab === COURSE_DETAILS.activeTab;
          return (
            <button
              key={tab}
              type="button"
              className={cn(
                "h-[43px] rounded-pill px-5 font-sans text-base font-medium transition-colors",
                active
                  ? "bg-accent text-ink"
                  : "bg-subtle text-pill hover:bg-track",
              )}
            >
              {tab}
            </button>
          );
        })}
      </div>

      <div className="mt-10">
        <h2 className="font-display text-xl font-semibold text-ink">
          {COURSE_DETAILS.descriptionHeading}
        </h2>
        <div className="mt-4 space-y-4 font-sans text-base leading-relaxed text-pill">
          <p>{COURSE_DETAILS.description}</p>
          <p>{COURSE_DETAILS.descriptionExtra}</p>
          <p>{COURSE_DETAILS.descriptionExtra2}</p>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="font-display text-xl font-semibold text-ink">
          {COURSE_DETAILS.sneakPeekHeading}
        </h2>
        <div className="mt-6 grid grid-cols-2 gap-5 lg:grid-cols-4">
          {COURSE_DETAILS.sneakPeek.map((src) => (
            <Image
              key={src}
              src={src}
              alt=""
              width={167}
              height={125}
              className="h-auto w-full rounded-[12px] object-cover"
            />
          ))}
        </div>
      </div>

      <div className="mt-12">
        <h2 className="font-display text-xl font-semibold text-ink">
          {COURSE_DETAILS.keyPointsHeading}
        </h2>
        <ul className="mt-6 space-y-4">
          {COURSE_DETAILS.keyPoints.map((point) => (
            <li
              key={point}
              className="flex items-center gap-3 font-sans text-base text-pill"
            >
              <CheckIcon className="size-6 shrink-0 text-brand" />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
