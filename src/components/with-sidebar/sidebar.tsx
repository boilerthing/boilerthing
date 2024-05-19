import { auth, getIsAdmin } from "@/lib/auth"
import { Logo } from "@/components/logo"
import { SidebarNav } from "@/components/with-sidebar/sidebar-nav"
import { appConfig } from "@/../app.config"
import { Badge } from "@/components/ui/badge"

export async function Sidebar() {
  const session = await auth()
  const isAdmin = await getIsAdmin()

  if (!session?.user) {
    return null
  }

  return (
    <aside
      id="sidebar"
      className="fixed left-0 top-0 z-40 h-screen w-72 -translate-x-full transition-transform lg:translate-x-0"
      aria-label="Sidebar"
      tabIndex={-1}
    >
      <div className="flex h-full flex-col overflow-y-auto border-r bg-zinc-100/40">
        <div className="flex h-16 shrink-0 items-center justify-between border-b px-4 backdrop-blur-lg lg:px-6">
          <Logo href="/" />
          {isAdmin && <Badge variant="outline">Admin</Badge>}
        </div>
        <nav className="flex h-full flex-col p-4" aria-label="Main Navigation">
          <ul className="space-y-1.5 font-medium">
            <SidebarNav />
          </ul>
          <ul className="mt-auto">
            <span className="text-sm text-zinc-500">
              © {new Date().getFullYear()} {appConfig.name}
            </span>
          </ul>
        </nav>
      </div>
    </aside>
  )
}
