import { UserRole } from "@prisma/client"
import { DefaultSession } from "next-auth"

export type ExtendedUser = DefaultSession["user"] & {
  role: UserRole
  createdAt: Date
}

export enum SocialProvider {
  Google = "google",
  Github = "github",
}
