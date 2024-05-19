import { cn } from "@/lib/utils"
import { ContentFooter } from "@/components/with-sidebar/content-footer"
import { ContentHeader } from "@/components/with-sidebar/content-header"

export async function Content({
  children,
  className,
}: React.ComponentProps<"main">) {
  return (
    <div className={"flex h-screen w-full flex-col lg:ml-72"}>
      <ContentHeader />
      <main
        role="main"
        className={cn("z-40 mt-16 w-full grow space-y-4 p-4 lg:p-6", className)}
      >
        {children}
      </main>
      <ContentFooter />
    </div>
  )
}
