import NextImage from "next/image"
import { cn } from "@/lib/utils"

export function Image({
  src,
  alt,
  className,
  priority
}: {
  src: string
  alt: string
  className?: string
  priority?: boolean
}) {
  return (
    <div
      className={cn(
        "[> div]:relative relative flex aspect-auto w-full items-center justify-center overflow-hidden",
        className,
      )}
    >
      <NextImage
        className="!relative w-full object-fill"
        src={src}
        alt={alt}
        fill
        priority={priority}
      />
    </div>
  )
}
