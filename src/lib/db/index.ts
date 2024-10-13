//import { Logger } from "drizzle-orm/logger"
import { drizzle } from "drizzle-orm/node-postgres"
import { Pool } from "pg"
import * as schema from "./schema"

/*
class LoggerThing implements Logger {
  logQuery(query: string, params: unknown[]): void {
    console.log({ query, params, time: new Date() })
  }
}
*/
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl:
    process.env.DATABASE_SSL === "true" ? { rejectUnauthorized: false } : false,
})

const db = drizzle(pool, { schema })

export const client = pool
export { db }
