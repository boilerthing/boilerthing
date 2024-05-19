import { forwardRef, useEffect, useState } from "react"
import ReCAPTCHA from "react-google-recaptcha"
import { cn } from "@/lib/utils"

export const Recaptcha = forwardRef(
  (
    {
      sitekey,
      isFormSubmitVisible,
      isDarkMode,
      hidden,
    }: {
      sitekey: string
      isFormSubmitVisible?: boolean
      isDarkMode?: boolean
      hidden?: boolean
    },
    ref: React.Ref<ReCAPTCHA>,
  ) => {
    const [recaptchaKey, setRecaptchaKey] = useState(crypto.randomUUID())
    useEffect(() => {
      setRecaptchaKey(crypto.randomUUID())
    }, [isDarkMode])

    return (
      <div
        className={cn(
          "md:ase-in-out justify-center md:fixed md:right-4 md:z-50 md:opacity-0 md:transition-all md:duration-300",
          isFormSubmitVisible ? "md:bottom-4 md:opacity-100" : "md:-bottom-10",
          hidden && "!hidden",
        )}
      >
        <ReCAPTCHA
          key={recaptchaKey}
          ref={ref}
          sitekey={sitekey}
          size="invisible"
          theme={isDarkMode ? "dark" : "light"}
          badge="inline"
        />
      </div>
    )
  },
)

Recaptcha.displayName = "Recaptcha"
