import * as React from "react"
import { type VariantProps, cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

const inputVariants = cva(
  [
    "flex w-full rounded-md border-2",
    "bg-white border-zinc-200 dark:bg-zinc-900 dark:border-zinc-700",
    "disabled:cursor-not-allowed disabled:opacity-50",
    "file:border-0 file:bg-transparent file:text-sm file:font-medium",
    "ring-offset-white dark:ring-offset-zinc-950",
    "placeholder:text-zinc-500 dark:placeholder:text-zinc-400",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 dark:focus-visible:ring-zinc-300",
  ].join(" "),
  {
    variants: {
      size: {
        sm: "h-9 px-3 text-sm",
        default: "h-10 px-4 py-2 text-base",
        lg: "h-10 px-4 py-2 md:h-11 md:px-5 md:py-3 md:text-lg",
        xl: "h-11 px-4 py-3 md:h-14 md:px-5 md:py-4 md:text-lg",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
)

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, size, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants({ size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Input.displayName = "Input"

export { Input, inputVariants }
