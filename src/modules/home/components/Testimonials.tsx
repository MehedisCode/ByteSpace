import Image from "next/image";
import { TESTIMONIALS, TESTIMONIALS_HEADING } from "../home.data";

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-white bg-[radial-gradient(60%_60%_at_88%_10%,#defba0_0%,transparent_60%),radial-gradient(70%_60%_at_6%_94%,#dcd9f7_0%,transparent_60%)]">
      <div className="mx-auto w-full max-w-[1204px] px-6 py-16 lg:py-[100px]">
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
