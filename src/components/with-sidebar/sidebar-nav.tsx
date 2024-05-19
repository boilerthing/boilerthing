"use client"

import { useTranslations } from "next-intl"
import { LocaleHasTranslationKey } from "@/lib/i18n"
import { SidebarNavItem } from "@/components/with-sidebar/sidebar-nav-item"
import { protectedRoutes } from "@/../app.config"

export function SidebarNav() {
  const t = useTranslations("Routes")
  const notifications: LocaleHasTranslationKey<React.ReactNode> = {
    dashboard: "2",
  }
  const routes = [protectedRoutes.dashboard]
  return (
    <>
      {routes.map(
        (route, index) =>
          route && (
            <SidebarNavItem
              key={index}
              className="flex justify-between"
              href={route.href}
              icon={route.icon}
              notification={notifications[route.translationKey] || null}
            >
              {t(route.translationKey)}
            </SidebarNavItem>
          ),
      )}
    </>
  )
}
