import { cn } from "@/lib/utils"

export function Title({ children, className }: React.ComponentProps<"h1">) {
  return <h1 className={cn("text-2xl font-bold", className)}>{children}</h1>
}
