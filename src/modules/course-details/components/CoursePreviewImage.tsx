import Image from "next/image";
import { COURSE_DETAILS } from "../course-details.data";
import { PlayIcon } from "./icons";

export function CoursePreviewImage() {
  return (
    <div className="relative">
      <Image
        src={COURSE_DETAILS.heroImage}
        alt={COURSE_DETAILS.title}
        width={720}
        height={479}
        priority
        className="h-auto w-full rounded-[24px] object-cover"
      />
      <button
        type="button"
        aria-label="Play course preview"
        className="absolute left-1/2 top-1/2 flex size-[72px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-ink shadow-[0_8px_24px_-8px_rgba(4,8,25,0.45)] transition-transform hover:scale-105"
      >
        <PlayIcon className="size-7 translate-x-0.5" />
      </button>
    </div>
  );
}
