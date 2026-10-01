import { ROUTES } from "@/config/routes";
import { HeroGrid, HeroHeader } from "@/modules/hero";
import { SEARCH_HERO } from "../search.data";
import { ChevronDownIcon, SearchIcon } from "./icons";

export function SearchHero() {
  return (
    <section className="relative isolate overflow-hidden bg-brand lg:h-[360px]">
      <HeroGrid />

      <div className="relative z-20 mx-auto w-full max-w-[1440px]">
        <HeroHeader />

        <div className="mx-auto flex w-full max-w-[624px] flex-col items-center gap-8 px-6 pb-16 pt-4 text-center lg:pt-11">
          <h1 className="font-display text-[28px] font-semibold leading-[1.15] text-white sm:text-[36px]">
            {SEARCH_HERO.title}
          </h1>

          <form
            role="search"
            action={ROUTES.search}
            className="flex w-full items-center gap-4"
          >
            <div className="flex h-[52px] flex-1 items-center gap-2 rounded-pill bg-white pl-6 pr-4">
              <SearchIcon className="size-6 shrink-0 text-muted" />
              <input
                type="search"
                name="q"
                placeholder={SEARCH_HERO.placeholder}
                aria-label={SEARCH_HERO.placeholder}
                className="h-full w-full bg-transparent font-sans text-lg text-ink outline-none placeholder:text-muted"
              />
            </div>

            <button
              type="button"
              className="flex h-[48px] shrink-0 items-center gap-2 rounded-pill bg-white px-5 font-sans text-lg font-medium text-ink"
            >
              {SEARCH_HERO.scope}
              <ChevronDownIcon className="size-6" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
