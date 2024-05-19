import { useTranslations } from "next-intl"
import { Badge } from "@/components/ui/badge"

export function BadgeAdmin() {
  const t = useTranslations("Components.BadgeAdmin")
  return <Badge variant="outline">{t("label")}</Badge>
}
