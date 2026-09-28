import Image from "next/image";
import { CREATOR_BLOCK, GROWTH } from "../home.data";
import { CheckCircleIcon } from "./icons";

export function GrowthSection() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#eafbc9_0%,#f4f6ff_48%,#ddd9f8_100%)]">
      <div className="mx-auto w-full max-w-[1200px] px-6 py-16 lg:py-[120px]">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-display text-[32px] font-semibold leading-[1.15] text-ink lg:text-[44px]">
              {GROWTH.heading}
            </h2>
            <p className="mt-6 font-sans text-base leading-relaxed text-body lg:text-lg">
              {GROWTH.subtitle}
            </p>
            <div className="mt-10 flex gap-10 lg:gap-14">
              {GROWTH.stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-[32px] font-medium leading-none text-brand lg:text-[36px]">
                    {stat.value}
                  </p>
                  <p className="mt-2 font-sans text-base text-body lg:text-lg">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <Image
              src={GROWTH.showcase.src}
              alt={GROWTH.showcase.alt}
              width={670}
              height={600}
              className="h-auto w-full max-w-[621px] [mask-image:radial-gradient(closest-side,#000_72%,transparent_100%)]"
            />
          </div>
        </div>

        <div className="mt-20 grid items-center gap-12 lg:mt-[100px] lg:grid-cols-2 lg:gap-16">
          <div className="order-2 flex justify-center lg:order-1 lg:justify-start">
            <Image
              src={CREATOR_BLOCK.image.src}
              alt={CREATOR_BLOCK.image.alt}
              width={600}
              height={650}
              className="h-auto w-full max-w-[541px] [mask-image:radial-gradient(closest-side,#000_72%,transparent_100%)]"
            />
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="font-display text-[32px] font-semibold leading-[1.15] text-ink lg:text-[44px]">
              {CREATOR_BLOCK.heading}
            </h2>
            <p className="mt-6 font-sans text-base leading-relaxed text-body lg:text-lg">
              {CREATOR_BLOCK.subtitle}
            </p>
            <ul className="mt-8 space-y-4">
              {CREATOR_BLOCK.benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-center gap-3 font-sans text-base font-medium text-ink lg:text-lg"
                >
                  <CheckCircleIcon className="size-5 shrink-0 text-brand" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
