import Image from "next/image";
import { LOGO_STRIP } from "../home.data";

export function LogoStrip() {
  return (
    <section className="bg-subtle">
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-center px-6 py-14 lg:h-[202px] lg:py-0">
        <Image
          src={LOGO_STRIP.src}
          alt={LOGO_STRIP.alt}
          width={1132}
          height={42}
          className="h-auto w-full max-w-[1132px]"
        />
      </div>
    </section>
  );
}
