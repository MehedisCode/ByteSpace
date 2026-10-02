import Link from "next/link";
import { AUTH_LINKS, BRAND, ICONS } from "../hero.data";
import { HeaderNav } from "./HeaderNav";

export function HeroHeader() {
  return (
    <header className="relative z-30 flex h-[120px] items-center justify-between px-6 lg:px-[122px]">
      <Link
        href="/"
        className="flex items-center gap-2 lg:absolute lg:left-[122px] lg:top-[35px] lg:block lg:h-[37px] lg:w-[171px]"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={BRAND.logo}
          alt=""
          width={29}
          height={32}
          className="lg:absolute lg:left-0 lg:top-0"
        />
        <span className="font-brand text-2xl font-bold text-subtle lg:absolute lg:left-[37px] lg:top-[7px] lg:leading-[30px]">
          {BRAND.name}
        </span>
      </Link>

      <HeaderNav />

      <div className="ml-auto hidden items-center gap-6 lg:flex">
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
