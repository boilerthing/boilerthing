import { getTranslations } from "next-intl/server"
import { cn } from "@/lib/utils"

export async function ContentFooter({
  className,
}: React.ComponentProps<"footer">) {
  const t = await getTranslations("Components.withSidebar.ContentFooter")
  return (
    <footer className={cn("border-t p-4 lg:px-6 lg:py-4", className)}>
      <span className="text-sm text-zinc-500">{t("message")}</span>
    </footer>
  )
}
