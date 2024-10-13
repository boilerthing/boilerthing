import { eq } from "drizzle-orm"
import { db } from "@/lib/db"

export async function getUserByEmail(email: string) {
  return await db.query.user.findFirst({
    where: table => eq(table.email, email),
  })
}

export async function getUserById(id: string) {
  return await db.query.user.findFirst({
    where: table => eq(table.id, id),
    with: {
      accounts: true,
    },
  })
}
