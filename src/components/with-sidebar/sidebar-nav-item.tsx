"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"
import { useCurrentPath } from "@/hooks/use-current-path"
import { Badge } from "@/components/ui/badge"

export function SidebarNavItem({
  href,
  className,
  icon: Icon,
  children,
  notification,
}: {
  className?: string
  href: string
  children: React.ReactNode
  icon: React.ElementType
  notification?: React.ReactNode
}) {
  const isCurrentPath = useCurrentPath(href)

  return (
    <li className="w-full">
      <Link
        href={href}
        className={cn(
          "group flex w-full items-center rounded-full px-3 py-2 text-zinc-900 hover:bg-zinc-100",
          isCurrentPath && "bg-zinc-100 hover:bg-zinc-100",
          className,
        )}
        aria-current={isCurrentPath ? "page" : undefined}
      >
        <span className="flex items-center space-x-3">
          <Icon
            className={cn(isCurrentPath ? "text-zinc-900" : "text-zinc-500")}
            size={18}
            aria-hidden="true"
          />

          <span
            className={cn(
              "whitespace-nowrap text-sm",
              isCurrentPath ? "text-zinc-900" : "text-zinc-500",
            )}
          >
            {children}
          </span>
        </span>
        {notification && <Badge>{notification}</Badge>}
      </Link>
    </li>
  )
}
