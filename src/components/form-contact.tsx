"use client"

import { useRef, useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios"
import { HeartCrack, Loader2, MessageSquare, PartyPopper } from "lucide-react"
import { useTranslations } from "next-intl"
import ReCAPTCHA from "react-google-recaptcha"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { cn } from "@/lib/utils"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Recaptcha } from "@/components/recaptcha"
import { env } from "@/../.env.mjs"

enum ResultType {
  Error = "error",
  MessageSent = "messageSent",
}

interface Result<T> {
  type: ResultType
  data?: T
}

interface SubmitMessageResponse {
  body: string
  statusCode: number
}

export function FormContact({ className }: { className?: string }) {
  const t = useTranslations("Components.FormContact")
  const recaptchaRef = useRef<ReCAPTCHA | null>(null)
  const [result, setResult] = useState<
    Result<SubmitMessageResponse> | undefined
  >(undefined)
  const [isLoading, setIsLoading] = useState(false)

  const FormSchema = z.object({
    email: z
      .string()
      .min(1, { message: t("messages.email_min_1") })
      .email({ message: t("messages.email_not_valid") }),
    message: z.string().min(1, t("messages.message_min_1")),
  })

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      message: "",
    },
  })

  const handleSubmit = async (values: z.infer<typeof FormSchema>) => {
    try {
      setResult(undefined)
      setIsLoading(true)
      const captchaValue = await recaptchaRef.current?.executeAsync()
      if (!captchaValue) throw new Error()
      const response = await axios.post("/api/contact", {
        ...values,
        captcha: captchaValue,
      })
      const data = await response.data
      if (data?.success) {
        recaptchaRef.current?.reset()
        setResult({ type: ResultType.MessageSent, data })
        form.reset()
      } else {
        throw new Error()
      }
    } catch (error) {
      setResult({ type: ResultType.Error })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Form {...form}>
      <form
        className={cn("relative mt-0 space-y-4 md:space-y-6", className)}
        onSubmit={form.handleSubmit(handleSubmit)}
      >
        {result?.type === ResultType.Error && (
          <Alert variant="destructive">
            <HeartCrack className="size-8 shrink-0" />
            <span className="space-y-2">
              <AlertTitle>{t("alertDestructive.title")}</AlertTitle>
              <AlertDescription>
                {t("alertDestructive.description")}
              </AlertDescription>
            </span>
          </Alert>
        )}
        {result?.type === ResultType.MessageSent && (
          <Alert variant="success">
            <PartyPopper className="size-8 shrink-0" />
            <span className="flex w-full flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
              <span className="space-y-2">
                <AlertTitle>{t("alertSuccess.title")}</AlertTitle>
                <AlertDescription>
                  {t("alertSuccess.description")}
                </AlertDescription>
              </span>
            </span>
          </Alert>
        )}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("fieldEmail.label")}</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder={t("fieldEmail.placeholder")}
                  type="email"
                  disabled={isLoading}
                  size="xl"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("fieldMessage.label")}</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  placeholder={t("fieldMessage.placeholder")}
                  disabled={isLoading}
                  size="xl"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <p className="text-sm text-zinc-400 dark:text-zinc-500">
          {t.rich("captcha", {
            privacy: privacy => (
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                {privacy}
              </a>
            ),
            terms: terms => (
              <a
                href="https://policies.google.com/terms"
                target="_blank"
                rel="noopener noreferrer"
              >
                {terms}
              </a>
            ),
          })}
        </p>
        <div className="flex items-center justify-between space-x-4">
          <Button
            className="mx-auto w-full space-x-2 md:w-auto"
            size="xl"
            disabled={isLoading}
            type="submit"
          >
            {isLoading ? (
              <Loader2 className="animate-spin" />
            ) : (
              <MessageSquare />
            )}
            <span>
              {result?.type !== ResultType.MessageSent
                ? t("buttonSubmit.label")
                : t("buttonSubmit.label_send_another")}
            </span>
          </Button>
        </div>
        <Recaptcha
          hidden={true}
          ref={recaptchaRef}
          sitekey={env.NEXT_PUBLIC_RECAPTCHA_KEY}
        />
      </form>
    </Form>
  )
}
