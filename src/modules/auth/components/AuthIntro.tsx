type AuthIntroProps = {
  eyebrow: string;
  description: string;
};

/** Marketing copy shown beside the auth card. */
export function AuthIntro({ eyebrow, description }: AuthIntroProps) {
  return (
    <div>
      <h2 className="font-display text-xl font-semibold text-subtle">
        {eyebrow}
      </h2>
      <p className="mt-4 font-sans text-lg leading-relaxed text-subtle">
        {description}
      </p>
    </div>
  );
}
