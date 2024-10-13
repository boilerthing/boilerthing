import "dotenv/config"
import { defineConfig } from "drizzle-kit"
import { parse } from "pg-connection-string"

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not set")
}
const dbUrl = process.env.DATABASE_URL!
const dbConfig = parse(dbUrl)

export default defineConfig({
  dialect: "postgresql",
  out: "./src/lib/db/migrations",
  schema: "./src/lib/db/schema.ts",
  dbCredentials: {
    host: dbConfig.host!,
    port: Number(dbConfig.port!),
    user: dbConfig.user!,
    password: dbConfig.password!,
    database: dbConfig.database!,
    ssl:
      process.env.DATABASE_SSL === "true"
        ? { rejectUnauthorized: false }
        : false,
  },
  verbose: true,
  strict: true,
})
