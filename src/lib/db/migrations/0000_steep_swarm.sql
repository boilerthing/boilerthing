-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
DO $$ BEGIN CREATE TYPE "public"."UserRole" AS ENUM('ADMIN', 'USER');
EXCEPTION
WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "User" (
    "id" text PRIMARY KEY NOT NULL,
    "name" text,
    "email" text,
    "image" text,
    "emailVerified" boolean DEFAULT false,
    "role" "UserRole" DEFAULT 'USER' NOT NULL,
    "createdAt" timestamp(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Account" (
    "id" text PRIMARY KEY NOT NULL,
    "userId" text NOT NULL,
    "type" text NOT NULL,
    "provider" text NOT NULL,
    "providerAccountId" text NOT NULL,
    "refresh_token" text,
    "access_token" text,
    "expires_at" integer,
    "token_type" text,
    "scope" text,
    "id_token" text,
    "session_state" text
);
--> statement-breakpoint
DO $$ BEGIN
ALTER TABLE "Account"
ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "User_email_key" ON "User" USING btree ("email" text_ops);
--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "Account_provider_providerAccountId_key" ON "Account" USING btree ("provider" text_ops, "providerAccountId" text_ops);