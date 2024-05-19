import { cn } from "@/lib/utils"

export const HeroSubtitle = ({
  className,
  children,
}: React.ComponentProps<"p">) => {
  return <p className={cn("md:text-xl", className)}>{children}</p>
}
