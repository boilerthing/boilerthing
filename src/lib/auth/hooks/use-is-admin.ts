"use client"

import { useSession } from "next-auth/react"

export function useIsAdmin() {
  const session = useSession()

  return session.data?.user?.role === "ADMIN"
}
