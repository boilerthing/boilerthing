import { usePathname } from "next/navigation"
import { useLocale } from "next-intl"

export function useCurrentPath(href: string) {
  const locale = useLocale()
  const currentPath = usePathname()

  return currentPath.startsWith(`/${locale}${href}`)
}
