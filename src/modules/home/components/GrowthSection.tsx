import { radialGlow } from "@/lib/glow";
import { CREATOR_BLOCK, GROWTH } from "../home.data";
import { CheckCircleIcon } from "./icons";
import { GrowthShowcaseOne } from "./growth/GrowthShowcaseOne";
import { GrowthShowcaseTwo } from "./growth/GrowthShowcaseTwo";

/** Figma radial glows: x is the offset from the 1440 frame centre. */
const GLOWS = [
  { x: -872, y: -466, size: 1137, rgb: "203,252,1", opacity: 0.4 },
  { x: 91, y: -458, size: 1137, rgb: "0,59,226", opacity: 0.08 },
  { x: -1228, y: 183, size: 1137, rgb: "0,59,226", opacity: 0.16 },
  { x: 2, y: 788, size: 1137, rgb: "0,59,226", opacity: 0.24 },
  { x: -1007, y: 946, size: 672, rgb: "203,252,1", opacity: 0.6 },
];

export function GrowthSection() {
  return (
    <section className="relative overflow-hidden bg-[#fafafa]">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {GLOWS.map((glow) => (
          <div
            key={`${glow.x}-${glow.y}`}
            className="absolute rounded-full"
            style={{
              left: `calc(50% + ${glow.x}px)`,
              top: glow.y,
              width: glow.size,
              height: glow.size,
              background: radialGlow(glow.rgb, glow.opacity),
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto w-full max-w-[1248px] px-6 py-16 lg:py-[120px]">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,574px)_minmax(0,621px)] lg:justify-between lg:gap-0">
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

          <GrowthShowcaseOne />
        </div>

        <div className="mt-16 grid items-center gap-12 lg:mt-[72px] lg:grid-cols-[minmax(0,541px)_minmax(0,580px)] lg:justify-between lg:gap-0">
          <GrowthShowcaseTwo />

          <div>
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
