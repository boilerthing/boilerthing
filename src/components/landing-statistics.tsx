import {
  CloudDownload,
  LucideIcon,
  ShoppingBasket,
  UserRoundCheck,
  Users,
} from "lucide-react"
import { getTranslations } from "next-intl/server"
import { LandingSection } from "@/components/landing-section"
import { LandingSubtitle } from "@/components/landing-subtitle"
import { LandingTitle } from "@/components/landing-title"

export function Statistic({
  icon: Icon,
  stat,
  label,
}: {
  icon: LucideIcon
  stat: string
  label: string
}) {
  return (
    <div className="flex flex-col items-center space-y-2">
      <Icon size={32} className="text-zinc-500" />
      <h2 className="text-2xl font-bold sm:text-3xl ">{stat}</h2>
      <p className="text text-zinc-400">{label}</p>
    </div>
  )
}

export async function LandingStatistics() {
  const t = await getTranslations("Components.LandingStatistics")
  return (
    <LandingSection classNameContainer="lg:py-12">
      <div className="space-y-2 text-center">
        <LandingSubtitle>{t("title")}</LandingSubtitle>
        <LandingTitle>{t("subtitle")}</LandingTitle>
      </div>
      <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
        <Statistic icon={Users} stat="2.7K+" label={t("stat1.label")} />
        <Statistic
          icon={UserRoundCheck}
          stat="1.8K+"
          label={t("stat2.label")}
        />
        <Statistic icon={CloudDownload} stat="11K+" label={t("stat3.label")} />
        <Statistic icon={ShoppingBasket} stat="12+" label={t("stat4.label")} />
      </div>
    </LandingSection>
  )
}
