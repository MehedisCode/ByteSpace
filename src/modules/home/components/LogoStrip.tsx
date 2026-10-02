import Image from "next/image";
import { LOGO_STRIP } from "../home.data";

export function LogoStrip() {
  return (
    <section aria-label={LOGO_STRIP.alt} className="bg-subtle">
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-center px-6 py-14 lg:h-[202px] lg:py-0">
        <div className="flex w-full max-w-[1132px] flex-wrap items-center justify-center gap-x-[72px] gap-y-8 lg:flex-nowrap lg:justify-between">
          {LOGO_STRIP.logos.map((logo) => (
            <Image
              key={logo.src}
              src={logo.src}
              alt=""
              width={logo.width}
              height={logo.height}
              className="h-auto w-auto"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
