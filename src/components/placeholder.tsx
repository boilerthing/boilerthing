import { cn } from "@/lib/utils"

export function Placeholder({
  children,
  className,
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex h-32 grow items-center justify-center rounded-lg border border-dashed border-zinc-200 px-4 py-36 text-center text-base text-zinc-400 lg:px-6",
        className,
      )}
    >
      {children}
    </div>
  )
}
