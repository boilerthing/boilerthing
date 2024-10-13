-- Rename the existing "UserRole" enum to "user_role"
ALTER TYPE "UserRole"
RENAME TO "user_role";
-- Now alter the user table to add the role column using the renamed enum
ALTER TABLE "user"
ADD COLUMN "role" "user_role" DEFAULT 'USER' NOT NULL;