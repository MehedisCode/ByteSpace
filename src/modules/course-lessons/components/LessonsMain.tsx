import { cn } from "@/lib/utils";
import { LESSONS_CONTENT, LESSON_MODULES } from "../lessons.data";
import { ModuleIcon } from "./icons";

export function LessonsMain() {
  const { progressCard } = LESSONS_CONTENT;

  return (
    <div>
      <div className="flex flex-wrap items-center gap-3">
        {LESSONS_CONTENT.tabs.map((tab) => {
          const active = tab === LESSONS_CONTENT.activeTab;
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
          {LESSONS_CONTENT.exploreHeading}
        </h2>
        <p className="mt-6 font-sans text-base leading-relaxed text-pill">
          {LESSONS_CONTENT.exploreText}
        </p>
      </div>

      <div className="mt-6">
        <h2 className="font-display text-xl font-semibold text-ink">
          {LESSONS_CONTENT.listHeading}
        </h2>
        <ul className="mt-6 space-y-6">
          {LESSON_MODULES.map((module) => (
            <li key={module.title} className="flex items-start gap-4">
              <span className="flex size-[72px] shrink-0 items-center justify-center rounded-[24px] bg-accent text-ink">
                <ModuleIcon className="size-10" />
              </span>
              <div className="min-w-0">
                <p className="font-sans text-base font-medium text-ink">
                  {module.title}
                </p>
                <p className="mt-1 font-sans text-base leading-relaxed text-pill">
                  {module.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <h2 className="font-display text-xl font-semibold text-ink">
          {LESSONS_CONTENT.contentHeading}
        </h2>
        <p className="mt-6 font-sans text-base leading-relaxed text-pill">
          {LESSONS_CONTENT.contentText}
        </p>
      </div>

      <div className="mt-6">
        <h2 className="font-display text-xl font-semibold text-ink">
          {LESSONS_CONTENT.progressHeading}
        </h2>
        <p className="mt-6 font-sans text-base leading-relaxed text-pill">
          {LESSONS_CONTENT.progressText}
        </p>
      </div>

      <div className="mt-6 rounded-2xl bg-white p-4 shadow-[0_16px_40px_-32px_rgba(4,8,25,0.5)]">
        <p className="font-sans text-sm font-medium text-ink">
          {progressCard.label}
        </p>
        <p className="mt-2 font-display text-4xl font-semibold leading-none text-ink">
          {progressCard.value}
        </p>
        <div
          className="mt-2 h-2 w-full overflow-hidden rounded-pill bg-subtitle"
          role="progressbar"
          aria-valuenow={Math.round(progressCard.progress * 100)}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div
            className="h-full rounded-pill bg-accent"
            style={{ width: `${progressCard.progress * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}
