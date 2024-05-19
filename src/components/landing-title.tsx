import { cn } from "@/lib/utils"

export function LandingTitle({
  children,
  className,
}: React.ComponentProps<"h2">) {
  return (
    <h2 className={cn("text-2xl font-bold lg:text-4xl", className)}>
      {children}
    </h2>
  )
}
