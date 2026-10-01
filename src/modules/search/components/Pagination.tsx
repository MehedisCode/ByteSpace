import { cn } from "@/lib/utils";
import { SEARCH_PAGINATION } from "../search.data";
import { ArrowLeftIcon, ArrowRightIcon } from "./icons";

export function Pagination() {
  return (
    <nav
      aria-label="Pagination"
      className="flex items-center justify-center gap-4"
    >
      <button
        type="button"
        aria-label="Previous page"
        className="flex h-12 w-14 items-center justify-center rounded-[24px] bg-white text-ink shadow-[0_8px_24px_-16px_rgba(4,8,25,0.5)] transition-colors hover:bg-subtle"
      >
        <ArrowLeftIcon className="size-5" />
      </button>

      <div className="flex items-center gap-4">
        {SEARCH_PAGINATION.pages.map((page) => (
          <button
            key={page}
            type="button"
            aria-current={page === SEARCH_PAGINATION.active ? "page" : undefined}
            className={cn(
              "min-w-7 font-display text-xl font-semibold transition-colors",
              page === SEARCH_PAGINATION.active
                ? "text-[#ced0d3]"
                : "text-ink hover:text-brand",
            )}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        type="button"
        aria-label="Next page"
        className="flex h-12 w-14 items-center justify-center rounded-[24px] bg-white text-ink shadow-[0_8px_24px_-16px_rgba(4,8,25,0.5)] transition-colors hover:bg-subtle"
      >
        <ArrowRightIcon className="size-5" />
      </button>
    </nav>
  );
}
