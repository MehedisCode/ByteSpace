import Link from "next/link";
import { BRAND } from "@/modules/hero/hero.data";
import { FOOTER } from "../home.data";
import { NewsletterForm } from "./NewsletterForm";

export function SiteFooter() {
  return (
    <footer className="border-t border-[#ced0d3] bg-white">
      <div className="mx-auto w-full max-w-[1440px] px-6 pb-10 pt-16 lg:px-[120px] lg:pt-[78px]">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.9fr)] lg:gap-16">
          <div>
            <Link href="/" className="flex items-center gap-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={BRAND.logo} alt="" width={29} height={32} />
              <span className="font-brand text-2xl font-bold text-ink">
                {BRAND.name}
              </span>
            </Link>

            <p className="mt-6 max-w-[430px] font-sans text-sm leading-relaxed text-body">
              {FOOTER.tagline}
            </p>

            <NewsletterForm />

            <p className="mt-6 max-w-[470px] font-sans text-xs leading-relaxed text-body">
              {FOOTER.legal}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {FOOTER.columns.map((column, columnIndex) => (
              <ul key={columnIndex} className="space-y-4">
                {column.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="font-sans text-sm text-body transition-colors hover:text-ink"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-[#ced0d3] pt-6 font-sans text-xs text-body sm:flex-row sm:items-center sm:justify-between">
          <p>{FOOTER.copyright}</p>
          <div className="flex flex-wrap gap-6">
            {FOOTER.bottomLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="transition-colors hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
