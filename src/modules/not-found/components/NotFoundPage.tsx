import Link from "next/link";
import { ROUTES } from "@/config/routes";
import { SiteFooter } from "@/modules/home";
import { HeroGrid, HeroHeader } from "@/modules/hero";

export function NotFoundPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-brand lg:h-[957px]">
        <HeroGrid />

        <div className="relative z-20 mx-auto w-full max-w-[1440px]">
          <HeroHeader />
        </div>

        <div className="relative z-20 mx-auto flex w-full max-w-[1440px] flex-col items-center px-6 pt-10 text-center lg:pt-[40px]">
          <span
            aria-hidden
            className="bg-gradient-to-b from-accent to-transparent bg-clip-text font-display text-[160px] font-semibold leading-none text-transparent sm:text-[260px] lg:text-[480px]"
          >
            404
          </span>

          <div className="flex flex-col items-center lg:-mt-[119px]">
            <h1 className="max-w-[935px] font-display text-[40px] font-semibold leading-[1.2] text-white sm:text-[56px] lg:text-[72px]">
              The page you are looking for doesn&apos;t exist
            </h1>

            <p className="mt-8 max-w-[486px] font-sans text-lg text-subtitle">
              Try to use a correct url or go back to homepage to start again
            </p>

            <Link
              href={ROUTES.home}
              className="mt-8 flex h-[46px] items-center rounded-pill bg-accent px-6 font-sans text-lg font-medium text-ink transition-colors hover:bg-accent-strong"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
