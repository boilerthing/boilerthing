import { getTranslations } from "next-intl/server"
import { Hero } from "@/components/hero"
import { HeroSubtitle } from "@/components/hero-subtitle"
import { HeroTitle } from "@/components/hero-title"
import { PricingSelector } from "@/components/pricing-selector"
import { PricingFAQ } from "@/components/pricing-faq"

export default async function Pricing() {
  const t = await getTranslations("Pages.Pricing")
  return (
    <main>
      <Hero>
        <HeroTitle>{t("title")}</HeroTitle>
        <HeroSubtitle>{t("subtitle")}</HeroSubtitle>
      </Hero>
      <PricingSelector />
      <PricingFAQ />
    </main>
  )
}
