import Link from "next/link";
import { cn } from "@/lib/utils";
import { AUTH_LINKS, BRAND, ICONS, NAV_LINKS } from "../hero.data";

export function HeroHeader() {
  return (
    <header className="relative z-30 flex h-[120px] items-center justify-between px-6 lg:px-[122px]">
      <Link href="/" className="flex items-center gap-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={BRAND.logo} alt="" width={29} height={32} />
        <span className="font-brand text-2xl font-bold text-subtle">
          {BRAND.name}
        </span>
      </Link>

      <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-6 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className={cn(
              "font-sans text-base text-subtle transition-opacity hover:opacity-75",
              link.active ? "font-medium" : "font-normal",
            )}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="hidden items-center gap-6 lg:flex">
        {AUTH_LINKS.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="font-sans text-base text-subtle transition-opacity hover:opacity-75"
          >
            {link.label}
          </Link>
        ))}
        <button type="button" aria-label="Shopping bag">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={ICONS.bag} alt="" width={24} height={24} />
        </button>
      </div>

      <button
        type="button"
        aria-label="Open menu"
        className="flex size-10 items-center justify-center rounded-full text-subtle lg:hidden"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden
        >
          <path
            d="M4 7h16M4 12h16M4 17h16"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </header>
  );
}
