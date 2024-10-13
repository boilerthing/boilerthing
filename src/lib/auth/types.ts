import { DefaultSession } from "next-auth"

export type ExtendedUser = DefaultSession["user"] & {
  role: string
  createdAt: Date
}

export enum SocialProvider {
  Google = "google",
  Github = "github",
}
