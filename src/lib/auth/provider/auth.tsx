import { SessionProvider } from "next-auth/react"
import { auth } from "@/lib/auth"

export async function AuthProvider({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const session = await auth()

  return <SessionProvider session={session}>{children}</SessionProvider>
}
