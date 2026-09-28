"use client";

import Link from "next/link";
import type { FormEvent } from "react";
import { ROUTES } from "@/config/routes";
import { cn } from "@/lib/utils";
import { REGISTER_FORM } from "../register.data";

type RegisterFormProps = {
  className?: string;
};

export function RegisterForm({ className }: RegisterFormProps) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <div
      className={cn(
        "w-full rounded-[24px] bg-white px-8 py-10 shadow-[0_40px_80px_-40px_rgba(2,12,60,0.45)] lg:px-[63px] lg:py-[61px]",
        className,
      )}
    >
      <p className="font-sans text-lg text-brand">{REGISTER_FORM.eyebrow}</p>
      <h1 className="mt-1 font-display text-[32px] font-semibold leading-[1.15] text-ink lg:text-[44px]">
        {REGISTER_FORM.title}
      </h1>

      <form onSubmit={handleSubmit} className="mt-10 space-y-6">
        {REGISTER_FORM.fields.map((field) => (
          <div key={field.name} className="space-y-2">
            <label
              htmlFor={`register-${field.name}`}
              className="block font-sans text-sm font-medium text-ink"
            >
              {field.label}
            </label>
            <input
              id={`register-${field.name}`}
              name={field.name}
              type={field.type}
              placeholder={field.placeholder}
              autoComplete={field.name}
              className="h-[52px] w-full rounded-xl border border-subtitle bg-white px-5 font-sans text-lg text-ink outline-none transition-colors placeholder:text-muted focus:border-brand/50"
            />
          </div>
        ))}

        <div className="flex justify-end pt-2">
          <button
            type="submit"
            className="h-[46px] rounded-pill bg-accent px-8 font-sans text-lg font-medium text-ink transition-colors hover:bg-accent-strong"
          >
            {REGISTER_FORM.action}
          </button>
        </div>
      </form>

      <p className="mt-8 text-center font-sans text-base text-pill">
        {REGISTER_FORM.footerQuestion}{" "}
        <Link href={ROUTES.login} className="text-brand hover:underline">
          {REGISTER_FORM.footerAction}
        </Link>
      </p>
    </div>
  );
}
