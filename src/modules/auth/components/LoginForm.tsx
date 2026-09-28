"use client";

import Link from "next/link";
import type { FormEvent } from "react";
import { ROUTES } from "@/config/routes";
import { cn } from "@/lib/utils";
import { LOGIN_FORM } from "../login.data";
import { AppleIcon, GoogleIcon } from "./login-icons";

const SOCIAL_ICONS = {
  google: GoogleIcon,
  apple: AppleIcon,
} as const;

type LoginFormProps = {
  className?: string;
};

export function LoginForm({ className }: LoginFormProps) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <div
      className={cn(
        "w-full rounded-[24px] bg-white px-8 py-10 lg:px-[63px] lg:pb-[40px] lg:pt-[61px]",
        className,
      )}
    >
      <div>
        <p className="font-sans text-lg leading-[29px] text-brand">
          {LOGIN_FORM.eyebrow}
        </p>
        <h1 className="font-display text-[32px] font-semibold leading-[1.2] text-ink lg:text-[44px]">
          {LOGIN_FORM.title}
        </h1>
      </div>

      <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-6">
        {LOGIN_FORM.fields.map((field) => (
          <div key={field.name} className="flex flex-col gap-2">
            <label
              htmlFor={`login-${field.name}`}
              className="font-sans text-sm font-medium leading-[17px] text-ink"
            >
              {field.label}
            </label>
            <input
              id={`login-${field.name}`}
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
            {LOGIN_FORM.action}
          </button>
        </div>
      </form>

      <div className="mt-10 lg:mt-[73px]">
        <div className="flex items-center gap-3">
          <span className="h-px flex-1 bg-[#d1d1d1]" />
          <span className="font-sans text-lg text-[#888888]">
            {LOGIN_FORM.dividerLabel}
          </span>
          <span className="h-px flex-1 bg-[#d1d1d1]" />
        </div>

        <div className="mt-10 flex justify-center gap-4">
          {LOGIN_FORM.socials.map((social) => {
            const Icon = SOCIAL_ICONS[social.provider];
            return (
              <button
                key={social.provider}
                type="button"
                aria-label={social.label}
                className="flex size-[72px] items-center justify-center rounded-[24px] border border-[#d1d1d1] bg-[#d9d9d9] text-black transition-colors hover:bg-[#cfcfcf]"
              >
                <Icon className="size-[33px]" />
              </button>
            );
          })}
        </div>
      </div>

      <p className="mt-10 flex items-center justify-center gap-1 font-sans text-base text-[#888888] lg:mt-[73px]">
        {LOGIN_FORM.footerQuestion}
        <Link href={ROUTES.register} className="text-brand hover:underline">
          {LOGIN_FORM.footerAction}
        </Link>
      </p>
    </div>
  );
}
