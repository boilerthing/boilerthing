import Link from "next/link"
import { cn } from "@/lib/utils"
import { useCurrentPath } from "@/hooks/use-current-path"

export function SidebarMobileNavItem({
  href = "",
  className,
  icon: Icon,
  children,
  notification,
  onClick,
  scroll = true,
}: React.ComponentProps<"a"> & {
  icon?: React.ElementType
  notification?: React.ReactNode
  scroll?: boolean
}) {
  const isCurrentPath = useCurrentPath(href)

  if (!children) {
    return null
  }

  return (
    <li className="w-full">
      <Link
        href={!isCurrentPath ? href : ""}
        className={cn(
          "group -ml-3 flex w-full items-center rounded-full py-2 pl-3 pr-2 text-zinc-900 hover:bg-zinc-100",
          isCurrentPath && "bg-zinc-100 hover:bg-zinc-100",
          className,
        )}
        aria-current={isCurrentPath ? "page" : undefined}
        onClick={onClick}
        scroll={scroll}
      >
        <span className="flex items-center space-x-3">
          {Icon && (
            <Icon
              className={cn(isCurrentPath ? "text-zinc-900" : "text-zinc-500")}
              size={18}
              aria-hidden="true"
            />
          )}

          <span
            className={cn(
              "whitespace-nowrap",
              isCurrentPath ? "font-bold text-zinc-900" : "text-zinc-500",
            )}
          >
            {children}
          </span>
        </span>
        {notification && (
          <span className="flex size-6 items-center justify-center rounded-full bg-black text-white">
            {notification}
          </span>
        )}
      </Link>
    </li>
  )
}
