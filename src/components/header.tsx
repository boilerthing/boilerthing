"use client"

import { useCurrentUser } from "@/lib/auth/hooks/use-current-user"
import { cn } from "@/lib/utils"
import { ButtonLogin } from "@/components/button-login"
import { ButtonSignup } from "@/components/button-signup"
import { HeaderNav } from "@/components/header-nav"
import { LocaleSwitcher } from "@/components/locale-switcher"
import { Logo } from "@/components/logo"
import { SidebarMobile } from "@/components/sidebar-mobile"
import { UserDropdown } from "@/components/user-dropdown"

export function Header({ className }: { className?: string }) {
  const user = useCurrentUser()
  return (
    <header
      className={cn(
        "sticky top-0 flex h-16 shrink-0 items-center justify-between border-b px-4 backdrop-blur-lg lg:px-6",
        className,
      )}
      role="banner"
    >
      <span className="flex items-center">
        <SidebarMobile className="mr-2 lg:hidden" />
        <span className="flex items-center space-x-8">
          <Logo />
          <HeaderNav className="hidden lg:block" />
        </span>
      </span>

      <span className="flex items-center space-x-4">
        <LocaleSwitcher />
        {!user && <ButtonLogin className="hidden sm:flex" variant="link" />}
        {user ? <UserDropdown user={user} /> : <ButtonSignup />}
      </span>
    </header>
  )
}
