import { Banana, Cherry, Citrus } from "lucide-react"
import { getTranslations } from "next-intl/server"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LandingSection } from "@/components/landing-section"
import { LandingSubtitle } from "@/components/landing-subtitle"
import { LandingTitle } from "@/components/landing-title"

export async function LandingQuotes() {
  const t = await getTranslations("Components.LandingQuotes")
  return (
    <LandingSection className="bg-zinc-100/80">
      <div className="space-y-2 text-center">
        <LandingSubtitle>{t("title")}</LandingSubtitle>
        <LandingTitle>{t("subtitle")}</LandingTitle>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Quote
          quote={t("quote1.quote")}
          name={t("quote1.name")}
          position={t("quote1.position")}
          icon={Banana}
        />
        <Quote
          quote={t("quote2.quote")}
          name={t("quote2.name")}
          position={t("quote2.position")}
          icon={Cherry}
        />
        <Quote
          quote={t("quote3.quote")}
          name={t("quote3.name")}
          position={t("quote3.position")}
          icon={Citrus}
        />
      </div>
    </LandingSection>
  )
}

export function Quote({
  quote,
  name,
  position,
  icon: Icon,
}: {
  quote: string
  name: string
  position: string
  icon: React.ElementType
}) {
  return (
    <Card className="flex flex-col border-0 bg-white shadow-none">
      <CardHeader className="flex flex-1 flex-row gap-2 pb-4">
        <CardTitle className="!ml-0 !mt-0 text-xl font-medium text-zinc-800">
          &quot;{quote}&quot;
        </CardTitle>
      </CardHeader>
      <CardContent className="mt-6 flex space-x-2">
        <span>
          <Icon className="size-8 text-zinc-500" />
        </span>
        <span>
          <p className="text-sm font-bold">{name}</p>
          <p className="text-xs text-zinc-500">{position}</p>
        </span>
      </CardContent>
    </Card>
  )
}
