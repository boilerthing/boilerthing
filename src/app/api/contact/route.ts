import { NextResponse } from "next/server"
import axios from "axios"
import { sendContactFormMessage } from "@/lib/mail"
import { env } from "@/../.env.mjs"

const verifyCaptcha = async (captcha: string) => {
  const recaptchaValidation = await axios.post(
    `https://www.google.com/recaptcha/api/siteverify?secret=${env.PRIVATE_RECAPTCHA_KEY}&response=${captcha}`,
  )
  return recaptchaValidation.data && recaptchaValidation.data.success
}

export async function POST(req: Request): Promise<NextResponse> {
  try {
    const data = await req.json()
    const { email, message, captcha } = data

    if (!email || !message) {
      return new NextResponse(
        JSON.stringify({
          message: "Missing email or message in the request.",
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        },
      )
    }

    if (!captcha) {
      return new NextResponse(
        JSON.stringify({
          message: "Verification token is required.",
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        },
      )
    }

    const captchaVerified = await verifyCaptcha(captcha)

    if (!captchaVerified) {
      return new NextResponse(
        JSON.stringify({
          message: "Verification failed.",
        }),
        {
          status: 403,
          headers: { "Content-Type": "application/json" },
        },
      )
    }

    const response = await sendContactFormMessage(
      env.PRIVATE_CONTACT_FROM_EMAIL,
      env.PRIVATE_CONTACT_TO_EMAIL,
      { email, message },
    )

    return new NextResponse(
      JSON.stringify({
        message: "Email sent successfully.",
        response: response,
        success: true,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      },
    )
  } catch (error) {
    console.log("/api/contact:::error", error)
    return new NextResponse(
      JSON.stringify({
        message: "Something went wrong....",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    )
  }
}
