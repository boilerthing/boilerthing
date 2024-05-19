import { getTranslations } from "next-intl/server"
import { FaGithub } from "react-icons/fa6"
import { LandingSection } from "@/components/landing-section"
import { LandingTitle } from "@/components/landing-title"
import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"

export async function LandingAction() {
  const t = await getTranslations("Components.LandingAction")
  return (
    <LandingSection className="bg-zinc-50/80">
      <div className="mx-auto max-w-6xl space-y-6 rounded-xl bg-gradient-to-r from-rose-500 to-pink-500 py-24 text-center">
        <Heart size={48} className="mx-auto text-white" />
        <LandingTitle className="text-white">{t("title")}</LandingTitle>
        <Button size="xl" className="space-x-2">
          <FaGithub className="size-6" />
          <span>{t("button")}</span>
        </Button>
      </div>
    </LandingSection>
  )
}
