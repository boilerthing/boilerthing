"use client"

import { useEffect } from "react"
import Error from "next/error"
import * as Sentry from "@sentry/nextjs"

export default function GlobalError({ error }: { error: unknown }) {
  useEffect(() => {
    Sentry.captureException(error)
  }, [error])

  return (
    <html>
      <body>
        <Error statusCode={500} />
      </body>
    </html>
  )
}
