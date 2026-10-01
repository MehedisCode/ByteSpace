import Image from "next/image";
import { CourseTabs } from "@/modules/course-details";
import { cn } from "@/lib/utils";
import { REVIEWS, REVIEWS_CONTENT } from "../reviews.data";
import { StarIcon } from "./icons";

const TABS = [
  { key: "about", label: "About" },
  { key: "lessons", label: "Lessons" },
  { key: "reviews", label: "Reviews" },
] as const;

function Stars({ filled }: { filled: number }) {
  return (
    <span className="flex items-center gap-1">
      {Array.from({ length: 5 }, (_, index) => (
        <StarIcon
          key={index}
          className={cn(
            "size-6",
            index < filled ? "text-pill" : "text-[#ced0d3]",
          )}
        />
      ))}
    </span>
  );
}

type ReviewsMainProps = {
  slug: string;
};

export function ReviewsMain({ slug }: ReviewsMainProps) {
  const { summary } = REVIEWS_CONTENT;

  return (
    <div>
      <CourseTabs slug={slug} active="reviews" tabs={[...TABS]} />

      <div className="mt-10">
        <h2 className="font-display text-xl font-semibold text-ink">
          {REVIEWS_CONTENT.heading}
        </h2>
        <p className="mt-6 font-sans text-base leading-relaxed text-pill">
          {REVIEWS_CONTENT.description}
        </p>
      </div>

      <div className="mt-6 flex flex-col gap-6 rounded-2xl border border-[#ced0d3] bg-white p-6 sm:p-10 lg:flex-row lg:items-center">
        <div className="flex h-[140px] w-[129px] shrink-0 flex-col items-center justify-center gap-1 rounded-lg bg-accent">
          <span className="font-sans text-sm font-medium text-ink">
            {summary.label}
          </span>
          <span className="font-display text-4xl font-semibold text-ink">
            {summary.value}
          </span>
        </div>

        <div className="flex-1 space-y-1">
          {summary.rows.map((row) => (
            <div key={row.stars} className="flex items-center gap-4">
              <div className="h-2 w-full max-w-[282px] overflow-hidden rounded-pill bg-subtitle">
                <div
                  className="h-full rounded-pill bg-accent"
                  style={{ width: `${row.ratio * 100}%` }}
                />
              </div>
              <Stars filled={row.stars} />
              <span className="w-10 shrink-0 text-right font-sans text-base text-pill">
                {row.count}
              </span>
            </div>
          ))}
        </div>
      </div>

      <h2 className="mt-6 font-display text-xl font-semibold text-ink">
        {REVIEWS_CONTENT.listHeading}
      </h2>

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <button
          type="button"
          className="h-[43px] rounded-pill bg-accent px-5 font-sans text-base font-medium text-ink"
        >
          {REVIEWS_CONTENT.allRating}
        </button>
        {REVIEWS_CONTENT.filters.map((rating) => (
          <button
            key={rating}
            type="button"
            className="flex h-12 items-center gap-1.5 rounded-pill bg-subtle px-4 font-sans text-base font-medium text-pill transition-colors hover:bg-track"
          >
            <StarIcon className="size-6 text-pill" />
            {rating}
          </button>
        ))}
      </div>

      <div className="mt-6 space-y-6">
        {REVIEWS.map((review) => (
          <article
            key={review.name}
            className="rounded-[24px] border border-[#ced0d3] p-6 sm:p-10"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-4">
                  <Image
                    src={review.avatar}
                    alt={review.name}
                    width={52}
                    height={52}
                    className="size-[52px] rounded-full object-cover"
                  />
                  <div>
                    <p className="font-sans text-lg font-medium text-ink">
                      {review.name}
                    </p>
                    <p className="font-sans text-base text-pill">
                      {review.role}
                    </p>
                  </div>
                </div>
                <div className="mt-6">
                  <Stars filled={review.rating} />
                </div>
              </div>
              <p className="shrink-0 font-sans text-base text-pill">
                {review.date}
              </p>
            </div>

            <p className="mt-6 font-sans text-base leading-relaxed text-pill">
              {review.text}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
