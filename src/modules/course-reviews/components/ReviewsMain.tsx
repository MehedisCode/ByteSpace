import { CourseTabs } from "@/modules/course-details";

const TABS = [
  { key: "about", label: "About" },
  { key: "lessons", label: "Lessons" },
  { key: "reviews", label: "Reviews" },
] as const;

type ReviewsMainProps = {
  slug: string;
};

/** In-shell placeholder until the Reviews frame is implemented. */
export function ReviewsMain({ slug }: ReviewsMainProps) {
  return (
    <div>
      <CourseTabs slug={slug} active="reviews" tabs={[...TABS]} />

      <div className="mt-10 rounded-[24px] border border-dashed border-[#ced0d3] px-6 py-16 text-center">
        <h2 className="font-display text-xl font-semibold text-ink">
          Reviews coming soon
        </h2>
        <p className="mt-2 font-sans text-base text-pill">
          Student reviews for this course will appear here.
        </p>
      </div>
    </div>
  );
}
