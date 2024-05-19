import { Resend } from "resend"
import { env } from "@/../.env.mjs"

const resend = new Resend(env.PRIVATE_RESEND_API_KEY)
const appUrl = env.NEXT_PUBLIC_APP_URL

export const sendContactFormMessage = async (
  from: string,
  to: string,
  {
    email,
    message,
  }: {
    email: string
    message: string
  },
) => {
  await resend.emails.send({
    from,
    to,
    subject: `${appUrl}: Contact request from ${email}`,
    html: message,
  })
}
