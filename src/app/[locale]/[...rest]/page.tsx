import Link from "next/link"
import { getTranslations } from "next-intl/server"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Title } from "@/components/title"

export default async function Error404() {
  const t = await getTranslations("Pages.Page404")
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="grow">
        <div className="container space-y-8 py-24 text-center">
          <p className="text-6xl">{t("title")}</p>

          <Title>{t("description")}</Title>
          <div>
            <Link href="/">{t("link")}</Link>
          </div>
        </div>
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  )
}
