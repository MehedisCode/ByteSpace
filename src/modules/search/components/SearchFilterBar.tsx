import type { SVGProps } from "react";
import { SEARCH_FILTERS, SEARCH_SORT } from "../search.data";
import type { FilterKey } from "../search.data";
import { CategoryIcon, FilterIcon, LevelIcon, SortIcon } from "./icons";

const FILTER_ICONS: Record<FilterKey, (props: SVGProps<SVGSVGElement>) => React.JSX.Element> = {
  filter: FilterIcon,
  level: LevelIcon,
  category: CategoryIcon,
};

export function SearchFilterBar() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4">
      <div className="flex flex-wrap items-center gap-4">
        {SEARCH_FILTERS.map((filter) => {
          const Icon = FILTER_ICONS[filter.key];
          return (
            <button
              key={filter.key}
              type="button"
              className="flex h-12 items-center gap-1.5 rounded-pill border border-[#ced0d3] bg-white px-5 font-sans text-base font-medium text-pill transition-colors hover:bg-subtle"
            >
              <Icon className="size-6" />
              {filter.label}
            </button>
          );
        })}
      </div>

      <button
        type="button"
        className="flex h-12 items-center gap-1.5 rounded-pill border border-[#ced0d3] bg-white px-5 font-sans text-base font-medium text-pill transition-colors hover:bg-subtle"
      >
        <SortIcon className="size-6" />
        {SEARCH_SORT}
      </button>
    </div>
  );
}
