"use client"

import { useTranslations } from "next-intl"
import { SocialProvider } from "@/lib/auth/types"
import { ButtonSocialLogin } from "@/components/button-social-login"

export function FormLogin() {
  const t = useTranslations("Components.FormLogin")
  return (
    <section className="space-y-8 py-12">
      <header className="flex justify-center">
        <h1 className="flex flex-col items-center space-y-4 text-3xl font-extrabold">
          <span>{t("title")}</span>
        </h1>
      </header>
      <hr className="mx-auto max-w-64" />
      <div className="flex flex-col items-center justify-center space-y-4">
        <ButtonSocialLogin provider={SocialProvider.Google} size="lg">
          {t("button_google")}
        </ButtonSocialLogin>
        <ButtonSocialLogin provider={SocialProvider.Github} size="lg">
          {t("button_github")}
        </ButtonSocialLogin>
      </div>
    </section>
  )
}
