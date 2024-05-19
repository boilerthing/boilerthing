import { Axe, Globe, HelpCircle, LineChart, Lock, Zap } from "lucide-react"
import { useLocale, useTranslations } from "next-intl"
import { LandingSection } from "@/components/landing-section"
import { LandingSubtitle } from "@/components/landing-subtitle"
import { LandingTitle } from "@/components/landing-title"
import { Card, CardHeader } from "@/components/ui/card"

export function LandingFeatures() {
  const t = useTranslations("Components.LandingFeatures")
  const locale = useLocale() as "de" | "en"
  return (
    <LandingSection>
      <div className="space-y-2 text-center">
        <LandingSubtitle>{t("subtitle")}</LandingSubtitle>
        <LandingTitle>{t("title")}</LandingTitle>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {features.map(({ [locale]: { title, details }, icon: Icon }, index) => (
          <Card
            key={index}
            className="mx-auto flex flex-col items-center justify-center border-0 bg-zinc-100/80 py-4 lg:py-8"
          >
            <CardHeader>
              <Icon
                size={48}
                className="mx-auto text-zinc-500 dark:text-zinc-50"
              />
              <div className="space-y-2 text-center">
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="text-zinc-500 dark:text-zinc-400">{details}</p>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </LandingSection>
  )
}

interface LocalizedContent {
  title: string
  details: string
}

interface Feature {
  icon: React.ElementType
  de: LocalizedContent
  en: LocalizedContent
}

const features: Feature[] = [
  {
    icon: Axe,
    de: {
      title: "Werkzeug Ding",
      details:
        "Unser Ding erledigt alle Dinge, damit Sie sich zurücklehnen und entspannen können.",
    },
    en: {
      title: "Tool thing",
      details:
        "Our thing handles all the things, so you can sit back and relax.",
    },
  },
  {
    icon: LineChart,
    de: {
      title: "Daten Ding",
      details:
        "Analysieren Sie Ihre Dinge mühelos mit unserem Ding. Zahlen waren noch nie so unterhaltsam!",
    },
    en: {
      title: "Data thing",
      details:
        "Analyze your things effortlessly with our thing. Numbers have never been this fun!",
    },
  },
  {
    icon: Zap,
    de: {
      title: "Schnell Ding",
      details:
        "Dieses Ding lässt Ihre Aufgaben im Nu erledigen. Kein Warten mehr, bis Dinge erledigt sind.",
    },
    en: {
      title: "Fast thing",
      details:
        "This thing makes your tasks zoom by. No more waiting around for things to get done.",
    },
  },
  {
    icon: Lock,
    de: {
      title: "Sicherheits Ding",
      details:
        "Halten Sie Ihre Dinge sicher und geschützt mit diesem Ding. Es ist wie ein Tresor für Ihre Daten.",
    },
    en: {
      title: "Secure thing",
      details:
        "Keep your things safe and sound with this thing. It's like a vault for your data.",
    },
  },
  {
    icon: Globe,
    de: {
      title: "Zugriffs Ding",
      details:
        "Greifen Sie von überall auf Ihre Dinge zu. Selbst von Ihrem Lieblingscafé aus.",
    },
    en: {
      title: "Access thing",
      details:
        "Get to your things from anywhere with the thing. Even from your favorite coffee shop.",
    },
  },
  {
    icon: HelpCircle,
    de: {
      title: "Support Ding",
      details:
        "Brauchen Sie Hilfe bei einem Ding? Unser Support-Team ist rund um die Uhr für Sie da, um Ihnen mit Ihren Dingen zu helfen.",
    },
    en: {
      title: "Support thing",
      details:
        "Need help with a thing? Our support team is here 24/7 to assist you with your things.",
    },
  },
]
