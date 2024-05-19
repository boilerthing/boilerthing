import { cn } from "@/lib/utils"

export const Hero = ({
  className,
  children,
}: React.ComponentProps<"section">) => {
  return (
    <section className={cn(className)}>
      <div className="container space-y-4 pt-12 text-center md:space-y-6 md:pt-24">
        {children}
      </div>
    </section>
  )
}
