import { getTranslations } from "next-intl/server"
import { ProfileCard } from "@/components/profile-card"
import { Title } from "@/components/title"
import { Content } from "@/components/with-sidebar/content"

export default async function Profile() {
  const t = await getTranslations("Pages.Profile")
  return (
    <Content>
      <Title>{t("title")}</Title>
      <ProfileCard />
    </Content>
  )
}
