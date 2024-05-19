import { redirect } from "next/navigation"
import { Session } from "next-auth"
import { auth } from "@/lib/auth"

export default async function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const session = (await auth()) as Session
  if (!session) {
    redirect("/login")
  }

  return <div className="w-full">{children}</div>
}
