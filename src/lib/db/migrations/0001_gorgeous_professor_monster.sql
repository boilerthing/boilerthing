ALTER TABLE "Account" RENAME TO "account";--> statement-breakpoint
ALTER TABLE "User" RENAME TO "user";--> statement-breakpoint
ALTER TABLE "account" DROP CONSTRAINT "Account_userId_fkey";
--> statement-breakpoint
DROP INDEX IF EXISTS "User_email_key";--> statement-breakpoint
DROP INDEX IF EXISTS "Account_provider_providerAccountId_key";--> statement-breakpoint
ALTER TABLE "user" ALTER COLUMN "createdAt" SET DEFAULT now();--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "account" ADD CONSTRAINT "account_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "user_email_key" ON "user" USING btree ("email");--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "account_provider_provider_account_id_key" ON "account" USING btree ("provider","providerAccountId");