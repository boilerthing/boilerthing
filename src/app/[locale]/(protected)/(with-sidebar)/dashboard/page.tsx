import { auth, getIsAdmin } from "@/lib/auth"
import { Placeholder } from "@/components/placeholder"
import { Title } from "@/components/title"
import { Content } from "@/components/with-sidebar/content"

export default async function Dashboard() {
  const session = await auth()
  const isAdmin = await getIsAdmin()

  if (!session?.user) {
    return null
  }

  if (isAdmin) {
    return (
      <Content>
        <Title>Dashboard</Title>
        <div className="flex flex-col gap-4 md:flex-row">
          <Placeholder />
          <Placeholder />
          <Placeholder />
        </div>
        <div className="flex flex-col gap-4 md:flex-row">
          <Placeholder />
          <Placeholder />
        </div>
      </Content>
    )
  }

  return (
    <Content>
      <Title>Dashboard</Title>
      <Placeholder />
    </Content>
  )
}
