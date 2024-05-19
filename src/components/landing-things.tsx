import Link from "next/link"
import { Mail, Rocket } from "lucide-react"
import { getTranslations } from "next-intl/server"
import { Button } from "@/components/ui/button"
import { LandingSection } from "@/components/landing-section"
import { LandingTitle } from "@/components/landing-title"

export async function LandingThings() {
  const t = await getTranslations("Components.LandingThings")
  return (
    <div className="grid divide-y divide-dashed text-center lg:grid-cols-2 lg:divide-x lg:divide-y-0">
      <LandingSection>
        <div className="space-y-4">
          <Mail size={48} className="mx-auto text-zinc-500" />
          <LandingTitle>{t("title2")}</LandingTitle>
          <p className="text-zinc-500">{t("subtitle2")}</p>
          <div className="space-x-4">
            <Button variant="outline" size="xl" asChild>
              <Link href="/">{t("link2")}</Link>
            </Button>
          </div>
        </div>
      </LandingSection>
      <LandingSection>
        <div className="space-y-4">
          <Rocket size={48} className="mx-auto text-zinc-500" />
          <LandingTitle>{t("title1")}</LandingTitle>
          <p className="text-zinc-500">{t("subtitle1")}</p>
          <div className="space-x-4">
            <Button variant="gradient" size="xl" asChild>
              <Link href="/">{t("link1")}</Link>
            </Button>
          </div>
        </div>
      </LandingSection>
    </div>
  )
}
