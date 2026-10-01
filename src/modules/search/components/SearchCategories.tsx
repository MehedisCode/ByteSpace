import { cn } from "@/lib/utils";
import { SEARCH_ACTIVE_CATEGORY, SEARCH_CATEGORIES } from "../search.data";

export function SearchCategories() {
  return (
    <div className="flex flex-wrap gap-4">
      {SEARCH_CATEGORIES.map((category) => {
        const active = category === SEARCH_ACTIVE_CATEGORY;
        return (
          <button
            key={category}
            type="button"
            className={cn(
              "h-[43px] rounded-pill px-5 font-sans text-base font-medium transition-colors",
              active ? "bg-accent text-ink" : "bg-subtle text-pill hover:bg-track",
            )}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
