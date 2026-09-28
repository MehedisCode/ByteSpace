import { cn } from "@/lib/utils";
import { CATEGORY_FILTERS, FILTERS_ACTIVE } from "../home.data";

export function CategoryFilters() {
  return (
    <section className="bg-white pt-[42px]">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-3 px-6">
        {CATEGORY_FILTERS.map((row, rowIndex) => (
          <div key={rowIndex} className="flex flex-wrap justify-center gap-3">
            {row.map((label) => {
              const active = label === FILTERS_ACTIVE;
              return (
                <button
                  key={label}
                  type="button"
                  className={cn(
                    "rounded-pill px-5 py-2.5 font-sans text-sm font-medium transition-colors lg:text-base",
                    active
                      ? "bg-accent text-ink"
                      : "bg-subtle text-pill hover:bg-track",
                  )}
                >
                  {label}
                </button>
              );
            })}
            {rowIndex === CATEGORY_FILTERS.length - 1 && (
              <button
                type="button"
                className="rounded-pill px-3 py-2.5 font-sans text-sm font-medium text-brand lg:text-base"
              >
                + More
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
