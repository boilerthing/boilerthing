import { Apple, Banana, Cherry, Citrus } from "lucide-react"
import { getTranslations } from "next-intl/server"
import { LandingSection } from "@/components/landing-section"
import { LandingSubtitle } from "@/components/landing-subtitle"
import { LandingTitle } from "@/components/landing-title"

export async function LandingReferences() {
  const t = await getTranslations("Components.LandingReferences")
  return (
    <LandingSection className="bg-zinc-50" classNameContainer="py-6 lg:py-12">
      <div className="space-y-2 text-center">
        <LandingSubtitle>{t("title")}</LandingSubtitle>
        <LandingTitle>{t("subtitle")}</LandingTitle>
      </div>
      <div className="grid gap-4 sm:mx-auto sm:max-w-lg sm:grid-cols-2 lg:max-w-4xl lg:grid-cols-4 lg:gap-8">
        <div className="flex items-center justify-center space-x-4">
          <Cherry className="size-6 shrink-0 text-zinc-500 lg:size-10" />
          <p className="text-xl font-bold text-zinc-500">
            {t("reference1.label")}
          </p>
        </div>
        <div className="flex items-center justify-center space-x-4">
          <Banana className="size-6 shrink-0 text-zinc-500 lg:size-10" />
          <p className="text-xl font-bold text-zinc-500">
            {t("reference2.label")}
          </p>
        </div>
        <div className="flex items-center justify-center space-x-4">
          <Apple className="size-6 shrink-0 text-zinc-500 lg:size-10" />
          <p className="text-xl font-bold text-zinc-500">
            {t("reference3.label")}
          </p>
        </div>
        <div className="flex items-center justify-center space-x-4">
          <Citrus className="size-6 shrink-0 text-zinc-500 lg:size-10" />
          <p className="text-xl font-bold text-zinc-500">
            {t("reference4.label")}
          </p>
        </div>
      </div>
    </LandingSection>
  )
}
