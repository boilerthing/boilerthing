import { getTranslations } from "next-intl/server"
import { FormContact } from "@/components/form-contact"
import { Hero } from "@/components/hero"
import { HeroSubtitle } from "@/components/hero-subtitle"
import { HeroTitle } from "@/components/hero-title"
import { Section } from "@/components/section"

export default async function Contact() {
  const t = await getTranslations("Pages.Contact")
  return (
    <main>
      <Hero>
        <HeroTitle>{t("title")}</HeroTitle>
        <HeroSubtitle>{t("subtitle")}</HeroSubtitle>
      </Hero>
      <Section container className="mb-24 max-w-3xl">
        <FormContact />
      </Section>
    </main>
  )
}
