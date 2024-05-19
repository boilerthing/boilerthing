import * as React from "react"
import { type VariantProps, cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

const textareaVariants = cva(
  [
    "flex w-full rounded-md border-2 disabled:cursor-not-allowed disabled:opacity-50",
    "border-zinc-200 bg-white dark:border-zinc-700 dark:bg-zinc-900",
    "ring-offset-white dark:ring-offset-zinc-950",
    "placeholder:text-zinc-500 dark:placeholder:text-zinc-400",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 dark:focus-visible:ring-zinc-300",
  ].join(" "),
  {
    variants: {
      size: {
        sm: "h-9 min-h-24 px-3 py-2 text-sm",
        default: "min-h-32 px-4 py-2 text-base",
        lg: "min-h-40 px-4 py-2 md:px-5 md:py-4 md:text-lg",
        xl: "min-h-48 px-4 py-3 md:p-5 md:text-lg",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
)

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, size, ...props }, ref) => {
    return (
      <textarea
        className={cn(textareaVariants({ size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Textarea.displayName = "Textarea"

export { Textarea }
