"use client"

import { useCallback, useEffect, useState } from "react"
import { ArrowUpToLine } from "lucide-react"
import { useTranslations } from "next-intl"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export function ScrollToTop() {
  const t = useTranslations("Components.ScrollToTop")
  const [showTopBtn, setShowTopBtn] = useState(false)

  const handleScroll = useCallback(() => {
    setShowTopBtn(window.scrollY > window.innerHeight / 2)
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    })
  }

  return (
    <Button
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-8 right-8 z-50 opacity-0 shadow-md transition-opacity duration-300 ease-in-out",
        showTopBtn
          ? "opacity-100"
          : "pointer-events-none cursor-default opacity-0",
      )}
      aria-label={t("aria_label")}
      size="icon"
    >
      <ArrowUpToLine size={24} aria-hidden="true" />
    </Button>
  )
}
