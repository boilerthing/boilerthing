import createIntlMiddleware from "next-intl/middleware"
import { auth as authMiddleware } from "@/lib/auth"
import { pathnames } from "@/lib/i18n"
import { apiPrefix, appConfig } from "@/../app.config"

export default authMiddleware(request => {
  const { nextUrl } = request

  const isApiRoute = nextUrl.pathname.startsWith(apiPrefix)

  if (isApiRoute) {
    return void 0
  }

  const { locales, defaultLocale, localePrefix } = appConfig

  const handleI18nRouting = createIntlMiddleware({
    locales,
    defaultLocale,
    localePrefix,
    pathnames,
  })

  return handleI18nRouting(request)
})

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}
