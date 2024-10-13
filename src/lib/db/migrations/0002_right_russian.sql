ALTER TABLE "account"
    RENAME COLUMN "userId" TO "user_id";
--> statement-breakpoint
ALTER TABLE "account"
    RENAME COLUMN "providerAccountId" TO "provider_account_id";
--> statement-breakpoint
ALTER TABLE "user"
    RENAME COLUMN "emailVerified" TO "email_verified";
--> statement-breakpoint
ALTER TABLE "user"
    RENAME COLUMN "createdAt" TO "created_at";
--> statement-breakpoint
ALTER TABLE "user"
    RENAME COLUMN "updatedAt" TO "updated_at";
--> statement-breakpoint
ALTER TABLE "account" DROP CONSTRAINT "account_userId_user_id_fk";
--> statement-breakpoint
DROP INDEX IF EXISTS "account_provider_provider_account_id_key";
--> statement-breakpoint
DROP INDEX IF EXISTS "user_email_key";
--> statement-breakpoint
ALTER TABLE "user"
ALTER COLUMN "email"
SET NOT NULL;
--> statement-breakpoint
ALTER TABLE "user"
ALTER COLUMN "email_verified" DROP DEFAULT;
--> statement-breakpoint
ALTER TABLE "user"
ALTER COLUMN "email_verified" TYPE timestamp without time zone USING CASE
        WHEN "email_verified" THEN current_timestamp
        ELSE NULL
    END;
--> statement-breakpoint
ALTER TABLE "user"
ALTER COLUMN "created_at"
SET DATA TYPE timestamp with time zone;
--> statement-breakpoint
ALTER TABLE "user"
ALTER COLUMN "updated_at"
SET DATA TYPE timestamp with time zone;
--> statement-breakpoint
ALTER TABLE "user"
ALTER COLUMN "updated_at"
SET DEFAULT now();
-- Drop existing primary key constraint if it exists
ALTER TABLE "account" DROP CONSTRAINT IF EXISTS "Account_pkey";
--> statement-breakpoint
ALTER TABLE "account"
ADD CONSTRAINT "account_provider_provider_account_id_pk" PRIMARY KEY("provider", "provider_account_id");
--> statement-breakpoint
ALTER TABLE "account"
ADD COLUMN "created_at" timestamp with time zone DEFAULT now() NOT NULL;
--> statement-breakpoint
ALTER TABLE "account"
ADD COLUMN "updated_at" timestamp with time zone DEFAULT now() NOT NULL;
--> statement-breakpoint
DO $$ BEGIN
ALTER TABLE "account"
ADD CONSTRAINT "account_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "account" DROP COLUMN IF EXISTS "id";
--> statement-breakpoint
ALTER TABLE "user" DROP COLUMN IF EXISTS "role";