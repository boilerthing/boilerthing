import { cn } from "@/lib/utils"

export function LandingSection({
  id,
  children,
  className,
  classNameContainer,
}: React.ComponentProps<"section"> & {
  classNameContainer?: string
}) {
  return (
    <section id={id} className={cn("", className)}>
      <div
        className={cn(
          "container space-y-6 py-12 lg:space-y-12 lg:py-36",
          classNameContainer,
        )}
      >
        {children}
      </div>
    </section>
  )
}
