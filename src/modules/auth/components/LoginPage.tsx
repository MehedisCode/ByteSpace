import { HeroGrid } from "@/modules/hero";
import { frameBoxStyle, frameLeft } from "@/lib/frame";
import { LOGIN_FORM, LOGIN_INTRO } from "../login.data";
import { AuthCollage } from "./AuthCollage";
import { AuthHeader } from "./AuthHeader";
import { AuthIntro } from "./AuthIntro";
import { LoginForm } from "./LoginForm";

export function LoginPage() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-brand">
      <HeroGrid />

      <div className="relative mx-auto w-full max-w-[1440px] lg:h-[1024px]">
        <AuthHeader />

        {/* Desktop composition */}
        <div className="hidden lg:block">
          <div className="absolute" style={frameBoxStyle(LOGIN_INTRO.box)}>
            <AuthIntro
              eyebrow={LOGIN_INTRO.eyebrow}
              description={LOGIN_INTRO.description}
            />
          </div>

          <AuthCollage />

          <div
            className="absolute"
            style={{
              left: frameLeft(LOGIN_FORM.box),
              top: LOGIN_FORM.box.y,
              width: LOGIN_FORM.box.width,
            }}
          >
            <LoginForm />
          </div>
        </div>

        {/* Mobile / tablet stack */}
        <div className="px-6 pb-16 pt-4 lg:hidden">
          <AuthIntro
            eyebrow={LOGIN_INTRO.eyebrow}
            description={LOGIN_INTRO.description}
          />
          <LoginForm className="mx-auto mt-8 max-w-[579px]" />
        </div>
      </div>
    </section>
  );
}
