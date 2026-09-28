import { REGISTER_INTRO } from "../register.data";

export function RegisterIntro() {
  return (
    <div>
      <h2 className="font-display text-xl font-semibold text-subtle">
        {REGISTER_INTRO.eyebrow}
      </h2>
      <p className="mt-3 font-sans text-lg leading-relaxed text-subtle/90">
        {REGISTER_INTRO.description}
      </p>
    </div>
  );
}
