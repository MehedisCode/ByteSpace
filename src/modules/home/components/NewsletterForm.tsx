"use client";

import type { FormEvent } from "react";
import { FOOTER } from "../home.data";

export function NewsletterForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 flex items-center gap-3">
      <input
        type="email"
        required
        placeholder={FOOTER.emailPlaceholder}
        aria-label={FOOTER.emailPlaceholder}
        className="h-12 w-full max-w-[377px] rounded-pill border border-black/10 bg-white px-6 font-sans text-base text-ink outline-none placeholder:text-body focus:border-brand/40"
      />
      <button
        type="submit"
        className="h-12 shrink-0 rounded-pill bg-accent px-6 font-sans text-lg font-medium text-ink transition-colors hover:bg-accent-strong"
      >
        {FOOTER.subscribe}
      </button>
    </form>
  );
}
