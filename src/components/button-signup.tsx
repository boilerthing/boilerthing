"use client"

import Link from "next/link"
import { useTranslations } from "next-intl"
import { cn } from "@/lib/utils"
import { useCurrentPath } from "@/hooks/use-current-path"
import { Button, ButtonProps } from "@/components/ui/button"

export function ButtonSignup({
  className,
  scroll = false,
  variant,
}: ButtonProps & { scroll?: boolean }) {
  const t = useTranslations("Components.ButtonSignup")
  const isCurrentPath = useCurrentPath("/login")
  return (
    <Button
      variant={variant}
      asChild
      className={cn("flex items-center justify-start", className)}
    >
      <Link href={!isCurrentPath ? "/login" : ""} scroll={scroll}>
        {t("title")}
      </Link>
    </Button>
  )
}
