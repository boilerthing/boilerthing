import * as React from "react"
import { type VariantProps, cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border border-zinc-200 px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 dark:border-zinc-800 dark:focus:ring-zinc-300",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-zinc-900 text-zinc-50 dark:bg-zinc-50 dark:text-zinc-900",
        secondary:
          "border-transparent bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-50",
        destructive:
          "border-transparent bg-red-500 text-zinc-50 dark:bg-red-900 dark:text-zinc-50",
        outline: "text-zinc-950 dark:text-zinc-50",
      },
      hover: {
        true: "",
      },
    },
    compoundVariants: [
      {
        variant: "default",
        hover: true,
        className: "hover:bg-zinc-900/80 dark:hover:bg-zinc-50/80",
      },
      {
        variant: "secondary",
        hover: true,
        className: "hover:bg-zinc-100/80 dark:hover:bg-zinc-800/80",
      },
      {
        variant: "destructive",
        hover: true,
        className: "hover:bg-red-500/80 dark:hover:bg-red-900/80",
      },
      {
        variant: "outline",
        hover: true,
        className: "",
      },
    ],
    defaultVariants: {
      variant: "default",
      hover: false,
    },
  },
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  hover?: boolean
}

function Badge({ className, variant, hover, ...props }: BadgeProps) {
  return (
    <div
      className={cn(badgeVariants({ variant, hover }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
