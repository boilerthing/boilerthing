import { ExtendedUser } from "./types"

declare module "next-auth" {
  // eslint-disable-next-line unused-imports/no-unused-vars
  interface Session {
    user: ExtendedUser
  }
}
