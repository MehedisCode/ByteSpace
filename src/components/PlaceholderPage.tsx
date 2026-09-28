import Link from "next/link";
import { BRAND, HeroGrid } from "@/modules/hero";
import { ROUTES } from "@/config/routes";

type PlaceholderPageProps = {
  title: string;
  description?: string;
};

/** Branded stand-in for Figma pages that are not implemented yet. */
export function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <section className="relative isolate flex min-h-screen flex-col items-center justify-center overflow-hidden bg-brand px-6 text-center">
      <HeroGrid />

      <div className="relative z-10 flex flex-col items-center">
        <Link href={ROUTES.home} className="flex items-center gap-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={BRAND.logo} alt="" width={29} height={32} />
          <span className="font-brand text-2xl font-bold text-subtle">
            {BRAND.name}
          </span>
        </Link>

        <h1 className="mt-8 font-display text-4xl font-semibold text-white sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-xl font-sans text-lg text-subtitle">
          {description ?? "This page is coming soon."}
        </p>

        <Link
          href={ROUTES.home}
          className="mt-8 inline-flex h-12 items-center rounded-pill bg-accent px-6 font-sans text-lg font-medium text-ink transition-colors hover:bg-accent-strong"
        >
          Back to home
        </Link>
      </div>
    </section>
  );
}
