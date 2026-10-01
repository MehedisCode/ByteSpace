import { SKILLS_HEADING } from "../home.data";

export function SkillsHeading() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-[917px] px-6 pt-16 text-center lg:pt-[72px]">
        <h2 className="font-display text-[32px] font-semibold leading-[1.2] text-navy sm:text-[38px] lg:text-[44px]">
          <span className="block">Discover Your Passion,</span>
          <span className="block">Build Your Skills</span>
        </h2>
        <p className="mt-5 font-sans text-base leading-relaxed text-muted lg:text-lg">
          {SKILLS_HEADING.subtitle}
        </p>
      </div>
    </section>
  );
}
