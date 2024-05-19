import { Sidebar } from "@/components/with-sidebar/sidebar"

export default async function WithSidebarLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex w-full">
      <Sidebar />
      {children}
    </div>
  )
}
