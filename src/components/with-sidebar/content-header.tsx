"use server"

import { Session } from "next-auth"
import { auth } from "@/lib/auth"
import { redirect } from "@/lib/i18n"
import { cn } from "@/lib/utils"
import { LocaleSwitcher } from "@/components/locale-switcher"
import { UserDropdown } from "@/components/user-dropdown"
import { SidebarMobile } from "@/components/with-sidebar/sidebar-mobile"

export async function ContentHeader({
  className,
}: React.ComponentProps<"header">) {
  const session = (await auth()) as Session

  if (!session) {
    redirect("/login")
  }

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 flex h-16 shrink-0 items-center justify-between border-b px-4 backdrop-blur-lg lg:left-72 lg:px-6",
        className,
      )}
      role="banner"
    >
      <span>
        <SidebarMobile />
      </span>
      <span className="flex items-center space-x-4">
        <LocaleSwitcher />
        <UserDropdown user={session.user} />
      </span>
    </header>
  )
}
