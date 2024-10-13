import { DrizzleAdapter } from "@auth/drizzle-adapter"
import NextAuth from "next-auth"
import { Adapter } from "next-auth/adapters"
import Github from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import { getUserById } from "@/lib/auth/db/user"
import { db } from "@/lib/db"
import * as schema from "@/lib/db/schema"
import { env } from "@/../.env.mjs"

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  secret: env.AUTH_SECRET,
  pages: {
    signIn: "/login",
    newUser: "/dashboard",
    error: "/error",
  },
  adapter: DrizzleAdapter(db, {
    usersTable: schema.user,
    accountsTable: schema.account,
    sessionsTable: schema.session,
  }) as Adapter,
  session: { strategy: "jwt" },
  providers: [
    Google({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    }),
    Github({
      clientId: env.GITHUB_CLIENT_ID,
      clientSecret: env.GITHUB_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async jwt({ token }) {
      if (!token.sub) {
        return token
      }

      const existingUser = await getUserById(token.sub).then(user => {
        return user
      })

      if (!existingUser) {
        return token
      }

      token.role = existingUser.role
      token.createdAt = existingUser.createdAt

      return token
    },
    async session({ session, token }) {
      if (token) {
        if (token.sub && session.user) {
          session.user.id = token.sub
        }

        if (token.role && session.user) {
          session.user.role = token.role as string
        }

        if (token.createdAt && session.user) {
          session.user.createdAt = token.createdAt as Date
        }
      }

      return session
    },
  },
})

export async function getSessionOrThrow(message?: string) {
  const session = await auth()

  if (!session) {
    throw new Error(message || "Unauthorized")
  }

  return session
}

export async function getIsAdmin(message?: string) {
  const session = await auth()

  if (!session) {
    throw new Error(message || "Unauthorized")
  }

  return session.user.role === "ADMIN"
}
