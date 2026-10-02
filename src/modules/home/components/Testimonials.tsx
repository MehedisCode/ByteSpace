import Image from "next/image";
import { radialGlow } from "@/lib/glow";
import { TESTIMONIALS, TESTIMONIALS_HEADING } from "../home.data";

/** Figma radial glows: x is the offset from the 1440 frame centre. */
const GLOWS = [
  { x: 122, y: -241, size: 1137, rgb: "203,252,1", opacity: 0.4 },
  { x: -325, y: -138, size: 672, rgb: "203,252,1", opacity: 0.6 },
  { x: -1162, y: 149, size: 1137, rgb: "0,59,226", opacity: 0.24 },
];

export function Testimonials() {
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

      <div className="relative mx-auto w-full max-w-[1204px] px-6 py-16 lg:py-[100px]">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-16">
          <h2 className="font-display text-[32px] font-semibold leading-[1.15] text-black lg:text-[44px]">
            {TESTIMONIALS_HEADING.title}
          </h2>
          <p className="font-sans text-base leading-relaxed text-body lg:text-lg">
            {TESTIMONIALS_HEADING.subtitle}
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {TESTIMONIALS.map((testimonial) => (
            <article
              key={testimonial.name}
              className="flex flex-col rounded-2xl bg-white p-8 shadow-[0_24px_60px_-36px_rgba(4,8,25,0.45)]"
            >
              <Image
                src={testimonial.avatar}
                alt={testimonial.name}
                width={80}
                height={80}
                sizes="80px"
                className="size-20 rounded-full object-cover"
              />
              <h3 className="mt-5 font-display text-xl font-semibold text-black">
                {testimonial.name}
              </h3>
              <p className="mt-1 font-sans text-lg text-brand">
                {testimonial.role}
              </p>
              <p className="mt-5 font-sans text-base leading-relaxed text-body lg:text-lg">
                {testimonial.quote}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
