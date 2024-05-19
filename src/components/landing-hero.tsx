"use client"

import Link from "next/link"
import { useTranslations } from "next-intl"
import { FaGithub } from "react-icons/fa6"
import TypewriterComponent from "typewriter-effect"
import { useCurrentUser } from "@/lib/auth/hooks/use-current-user"
import { Button } from "@/components/ui/button"

export function LandingHero() {
  const user = useCurrentUser()
  const t = useTranslations("Components.LandingHero")
  return (
    <div className="space-y-3 py-36 text-center font-bold sm:space-y-5">
      <div className="lg:text-7-xl z-50 space-y-1 text-3xl font-extrabold sm:space-y-5 sm:text-5xl md:text-6xl">
        <h1>
          {t.rich("title", {
            underline: value => <span className="underline">{value}</span>,
          })}
        </h1>
        <div className="h-10 bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent sm:h-16">
          <TypewriterComponent
            options={{
              strings: [t("typewriter1"), t("typewriter2"), t("typewriter3")],
              autoStart: true,
              loop: true,
              delay: 50,
            }}
          />
        </div>
        <div className="text-sm font-medium text-zinc-600 md:text-xl  ">
          {t("subtitle")}
        </div>
        <div className="!mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild variant="gradient" size="xl">
            {user ? (
              <Link href="/dashboard">{t("link_dashboard")}</Link>
            ) : (
              <Link href="/login" scroll={false}>
                {t("link_login")}
              </Link>
            )}
          </Button>
          <Button asChild size="xl" variant="outline">
            <Link
              href="https://github.com/boilerthing/boilerthing"
              scroll={false}
              className="space-x-2"
              target="_blank"
            >
              {/* {t("link_pricing")} */}
              <FaGithub className="size-5 shrink-0" />
              <span>Star on GitHub</span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
