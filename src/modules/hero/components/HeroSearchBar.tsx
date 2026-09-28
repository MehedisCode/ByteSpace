import { ROUTES } from "@/config/routes";
import { cn } from "@/lib/utils";
import { ICONS, SEARCH_COPY } from "../hero.data";

type HeroSearchBarProps = {
  className?: string;
};

export function HeroSearchBar({ className }: HeroSearchBarProps) {
  return (
    <form
      role="search"
      action={ROUTES.search}
      className={cn(
        "flex w-full max-w-[581px] items-center gap-4",
        className,
      )}
    >
      <div className="flex h-[52px] flex-1 items-center gap-2 rounded-pill bg-white pl-6 pr-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={ICONS.search}
          alt=""
          width={24}
          height={24}
          className="shrink-0"
        />
        <input
          type="search"
          name="q"
          placeholder={SEARCH_COPY.placeholder}
          aria-label={SEARCH_COPY.placeholder}
          className="h-full w-full bg-transparent font-sans text-lg text-ink outline-none placeholder:text-muted"
        />
      </div>
      <button
        type="submit"
        className="h-[46px] shrink-0 rounded-pill bg-accent px-6 font-sans text-lg font-medium text-ink transition-colors hover:bg-accent-strong"
      >
        {SEARCH_COPY.action}
      </button>
    </form>
  );
}
