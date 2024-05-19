"use client"

import { useTransition } from "react"
import { useParams } from "next/navigation"
import { Globe } from "lucide-react"
import { useLocale, useTranslations } from "next-intl"
import { usePathname, useRouter } from "@/lib/i18n"
import { cn } from "@/lib/utils"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { appConfig } from "@/../app.config"

export function LocaleSwitcher({ className }: { className?: string }) {
  const [isPending, startTransition] = useTransition()
  const t = useTranslations("Components.LocaleSwitcher")
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const params = useParams()

  function handleChange(value: string) {
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: value },
      )
      router.refresh()
    })
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild disabled={isPending}>
        <span
          className={cn("flex items-center space-x-2", className)}
          aria-label="Change Language"
        >
          <Globe size={16} aria-hidden="true" />
          <span className="hidden sm:block">{locale.toLocaleUpperCase()}</span>
        </span>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuRadioGroup
          value={locale}
          onValueChange={handleChange}
          aria-label="Select Language"
        >
          {appConfig.locales.map(locale => (
            <DropdownMenuRadioItem key={locale} value={locale}>
              {t("locale", { locale })}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
