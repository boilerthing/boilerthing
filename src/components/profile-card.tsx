"use client"

import { format } from "date-fns"
import { Clock, Mail } from "lucide-react"
import { useTranslations } from "next-intl"
import { useCurrentUser } from "@/lib/auth/hooks/use-current-user"
import { useIsAdmin } from "@/lib/auth/hooks/use-is-admin"
import { Button } from "@/components/ui/button"
import { Image } from "@/components/image"
import { BadgeAdmin } from "@/components/badge-admin"

export function ProfileCard() {
  const t = useTranslations("Components.ProfileCard")
  const user = useCurrentUser()
  const isAdmin = useIsAdmin()

  if (!user) {
    return null
  }

  return (
    <div className="flex flex-col items-center justify-center space-y-6 py-12 md:py-24">
      <div className="flex w-32 overflow-hidden rounded-full">
        <Image priority src={user.image!} alt={user.name!} />
      </div>
      <div className="flex flex-col items-center space-y-2">
        {isAdmin && <BadgeAdmin />}
        <h2 className="text-xl font-bold">
          <span>{user.name}</span>
        </h2>
        <p className="flex items-center space-x-2">
          <span className="text-zinc-400">
            <Mail size={16} />
          </span>
          <span>{user.email}</span>
        </p>
        <p className="flex items-center space-x-2">
          <span className="text-zinc-400">
            <Clock size={16} />
          </span>
          <span>
            {t("joined_on", { date: format(user.createdAt, "dd.MM.yyyy") })}
          </span>
        </p>
      </div>
      {!isAdmin && (
        <div>
          <Button>{t("button_delete_account")}</Button>
        </div>
      )}
    </div>
  )
}
