import { Sidebar } from '@/components/Sidebar'
import { MobileNav } from '@/components/MobileNav'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <MobileNav />
      <Sidebar />
      <main className="flex overflow-y-auto pt-14 lg:pt-0">
        <div className="flex size-full flex-col lg:ml-64">{children}</div>
      </main>
    </>
  )
}
