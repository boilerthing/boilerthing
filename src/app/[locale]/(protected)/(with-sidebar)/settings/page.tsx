import { getTranslations } from "next-intl/server"
import { Placeholder } from "@/components/placeholder"
import { Title } from "@/components/title"
import { Content } from "@/components/with-sidebar/content"

export default async function Settings() {
  const t = await getTranslations("Pages.Settings")
  return (
    <Content>
      <Title>{t("title")}</Title>
      <Placeholder />
      <div className="flex flex-col gap-4 md:flex-row">
        <Placeholder />
        <Placeholder />
        <Placeholder />
      </div>
    </Content>
  )
}
