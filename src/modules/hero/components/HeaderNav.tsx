"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "../hero.data";

function isSectionActive(pathname: string, match?: string[]) {
  if (!match) return false;
  return match.some((prefix) =>
    prefix === "/"
      ? pathname === "/"
      : pathname === prefix || pathname.startsWith(`${prefix}/`),
  );
}

export function HeaderNav() {
  const pathname = usePathname();

  return (
    <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-6 lg:flex">
      {NAV_LINKS.map((link) => {
        const active = isSectionActive(pathname, link.match);
        return (
          <Link
            key={link.label}
            href={link.href}
            aria-current={active ? "page" : undefined}
            className={cn(
              "font-sans text-base text-subtle transition-opacity hover:opacity-75",
              active ? "font-medium" : "font-normal",
            )}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
