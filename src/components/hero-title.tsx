import { cn } from "@/lib/utils"

export const HeroTitle = ({
  className,
  children,
}: React.ComponentProps<"h1">) => {
  return (
    <h1 className={cn("text-4xl font-bold md:text-6xl", className)}>
      {children}
    </h1>
  )
}
