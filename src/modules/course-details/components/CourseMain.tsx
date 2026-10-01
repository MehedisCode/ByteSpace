import Image from "next/image";
import { COURSE_DETAILS } from "../course-details.data";
import { CourseTabs } from "./CourseTabs";
import { CheckIcon } from "./icons";

const TABS = [
  { key: "about", label: "About" },
  { key: "lessons", label: "Lessons" },
  { key: "reviews", label: "Reviews" },
] as const;

type CourseMainProps = {
  slug: string;
};

export function CourseMain({ slug }: CourseMainProps) {
  return (
    <div>
      <CourseTabs slug={slug} active="about" tabs={[...TABS]} />

      <div className="mt-10">
        <h2 className="font-display text-xl font-semibold text-ink">
          {COURSE_DETAILS.descriptionHeading}
        </h2>
        <div className="mt-6 space-y-4 font-sans text-base leading-relaxed text-pill">
          <p>{COURSE_DETAILS.description}</p>
          <p>{COURSE_DETAILS.descriptionExtra}</p>
          <p>{COURSE_DETAILS.descriptionExtra2}</p>
        </div>
      </div>

      <div className="mt-6">
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
              className="h-[125px] w-full rounded-[12px] object-cover"
            />
          ))}
        </div>
      </div>

      <div className="mt-6">
        <h2 className="font-display text-xl font-semibold text-ink">
          {COURSE_DETAILS.keyPointsHeading}
        </h2>
        <ul className="mt-6 space-y-3">
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
