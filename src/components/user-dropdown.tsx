"use client"

import Link from "next/link"
import { User } from "lucide-react"
import { Session } from "next-auth"
import { useTranslations } from "next-intl"
import { useIsAdmin } from "@/lib/auth/hooks/use-is-admin"
import { cn } from "@/lib/utils"
import { useCurrentPath } from "@/hooks/use-current-path"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ButtonLogout } from "@/components/button-logout"
import { Image } from "@/components/image"
import { protectedRoutes } from "@/../app.config"
import { BadgeAdmin } from "@/components/badge-admin"

export function UserDropdown({ user }: { user: Session["user"] }) {
  const t = useTranslations("Routes")
  const isCurrentPath = useCurrentPath
  const isAdmin = useIsAdmin()
  const userRoutes = [
    protectedRoutes.dashboard,
    protectedRoutes.profile,
    protectedRoutes.settings,
  ]
  return (
    <div className="flex">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className={cn("hover:bg-zinc-200", user.image && "p-1")}
          >
            {user.image ? (
              <span className="size-8 overflow-hidden rounded-full">
                <Image priority src={user.image} alt={user.name || ""} />
              </span>
            ) : (
              <span className="flex size-8 shrink-0 items-center justify-center overflow-hidden rounded-full border bg-white">
                <User size={24} aria-hidden="true" />
              </span>
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mr-4 w-48">
          {isAdmin && (
            <>
              <DropdownMenuLabel className="p-2">
                <BadgeAdmin />
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
            </>
          )}
          {userRoutes.map(
            (route, index) =>
              route && (
                <DropdownMenuItem key={index} asChild>
                  <Link
                    href={route.href}
                    className={cn(
                      "text-zinc-500",
                      isCurrentPath(route.href) && "font-bold text-black",
                    )}
                  >
                    <span className="flex items-center space-x-2">
                      <route.icon size={18} />
                      <span>{t(route.translationKey)}</span>
                    </span>
                  </Link>
                </DropdownMenuItem>
              ),
          )}
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <ButtonLogout />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
