import { notFound } from "next/navigation"
import { createLocalizedPathnamesNavigation } from "next-intl/navigation"
import { getRequestConfig } from "next-intl/server"
import { appConfig, protectedRoutes, publicRoutes } from "@/../app.config"
import enTranslations from "@/locales/en.json"

const { locales, localePrefix } = appConfig

export type { Pathnames } from "next-intl/navigation"

export type Languages<T extends string[]> = T[number]

export type LocalePaths = { [key in Languages<typeof locales>]: string }

export type TranslationKeys = keyof typeof enTranslations.Routes
export interface LocalizedRoute {
  href: string
  translationKey: TranslationKeys
  icon: React.ElementType
  public?: boolean
  locale?: LocalePaths
}

export type LocaleHasTranslationKey<T> = Partial<{
  [key in TranslationKeys]: T
}>

type Pathnames = {
  [key: string]: LocalePaths | string
}

export const generatePathnames = (
  routes: LocaleHasTranslationKey<LocalizedRoute>[],
): Pathnames => {
  const pathnames: Pathnames = {
    "/": "/",
  }

  routes.forEach(routeSet => {
    Object.values(routeSet).forEach(route => {
      if (typeof route.locale === "object") {
        pathnames[route.href] = route.locale
      } else {
        pathnames[route.href] = route.href
      }
    })
  })

  return pathnames
}

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale)) notFound()

  return {
    messages: (
      await (locale === "en"
        ? // When using Turbopack, this will enable HMR for `en`
          import("../locales/en.json")
        : import(`../locales/${locale}.json`))
    ).default,
  }
})

export const pathnames = generatePathnames([publicRoutes, protectedRoutes])

export const { Link, getPathname, redirect, usePathname, useRouter } =
  createLocalizedPathnamesNavigation({
    locales,
    pathnames,
    localePrefix,
  })
