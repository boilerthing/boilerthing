"use client"

import { useRouter } from "@/lib/i18n"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { FormLogin } from "@/components/form-login"

export default function DialogLogin() {
  const router = useRouter()
  return (
    <Dialog open={true} onOpenChange={() => router.back()}>
      <DialogContent className="w-full p-4 md:max-w-md">
        <FormLogin />
      </DialogContent>
    </Dialog>
  )
}
