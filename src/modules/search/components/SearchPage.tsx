import { SiteFooter } from "@/modules/home";
import { Pagination } from "./Pagination";
import { SearchCategories } from "./SearchCategories";
import { SearchFilterBar } from "./SearchFilterBar";
import { SearchHero } from "./SearchHero";
import { SearchResults } from "./SearchResults";

export function SearchPage() {
  return (
    <>
      <SearchHero />

      <section className="bg-white">
        <div className="mx-auto w-full max-w-[1200px] px-6 pb-16 pt-10 lg:pb-[72px] lg:pt-[72px]">
          <SearchFilterBar />

          <div className="mt-8">
            <SearchCategories />
          </div>

          <div className="mt-12 lg:mt-[77px]">
            <SearchResults />
          </div>

          <div className="mt-12 lg:mt-[72px]">
            <Pagination />
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
