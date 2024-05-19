import { cn } from "@/lib/utils"

export const Section = ({
  className,
  rootClassName,
  children,
  container,
}: React.ComponentProps<"section"> & {
  rootClassName?: string
  container?: boolean
}) => {
  return (
    <section className={cn(rootClassName)}>
      <div
        className={cn("space-y-6 py-16", container && "container", className)}
      >
        {children}
      </div>
    </section>
  )
}
