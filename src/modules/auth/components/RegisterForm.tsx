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
        "w-full rounded-[24px] bg-white px-8 py-10 lg:px-[63px] lg:pb-[51px] lg:pt-[61px]",
        className,
      )}
    >
      <div className="flex flex-col gap-10">
        <div>
          <p className="font-sans text-lg leading-[29px] text-brand">
            {REGISTER_FORM.eyebrow}
          </p>
          <h1 className="font-display text-[32px] font-semibold leading-[1.2] text-ink lg:text-[44px]">
            {REGISTER_FORM.title}
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {REGISTER_FORM.fields.map((field) => (
            <div key={field.name} className="flex flex-col gap-2">
              <label
                htmlFor={`register-${field.name}`}
                className="font-sans text-sm font-medium leading-[17px] text-ink"
              >
                {field.label}
              </label>
              <input
                id={`register-${field.name}`}
                name={field.name}
                type={field.type}
                placeholder={field.placeholder}
                autoComplete={field.name}
                className="h-[52px] w-full rounded-[12px] border border-subtitle bg-white px-6 font-sans text-lg text-ink outline-none transition-colors placeholder:text-muted focus:border-brand/50"
              />
            </div>
          ))}

          <div className="flex justify-end">
            <button
              type="submit"
              className="h-[46px] rounded-pill bg-accent px-6 font-sans text-lg font-medium text-ink transition-colors hover:bg-accent-strong"
            >
              {REGISTER_FORM.action}
            </button>
          </div>
        </form>
      </div>

      <p className="mt-10 flex items-center justify-center gap-1 font-sans text-base text-pill lg:mt-[122px]">
        {REGISTER_FORM.footerQuestion}
        <Link href={ROUTES.login} className="text-brand hover:underline">
          {REGISTER_FORM.footerAction}
        </Link>
      </p>
    </div>
  );
}
