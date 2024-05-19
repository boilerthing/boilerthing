import { Menu } from "lucide-react"
import { getTranslations } from "next-intl/server"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Logo } from "@/components/logo"
import { SidebarNav } from "@/components/with-sidebar/sidebar-nav"

export async function SidebarMobile() {
  const t = await getTranslations("Components.withSidebar.SidebarMobile")
  return (
    <Sheet>
      <SheetTrigger
        className="transition hover:opacity-30 lg:hidden"
        aria-label={t("sheet_trigger_aria_label")}
      >
        <Menu />
      </SheetTrigger>
      <SheetContent
        side="left"
        role="navigation"
        aria-label={t("sheet_content_aria_label")}
      >
        <SheetHeader>
          <SheetTitle>
            <Logo href="/" />
          </SheetTitle>
          <SheetDescription asChild>
            <ul className="space-y-2 pt-4 font-medium">
              <SidebarNav />
            </ul>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}
