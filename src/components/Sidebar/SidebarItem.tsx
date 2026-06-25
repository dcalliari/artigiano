import { usePathname, useRouter } from 'next/navigation'
import { useMemo } from 'react'

type ISidebarItem = {
  name: string
  path: string
}

export function SidebarItem({ item }: { item: ISidebarItem }) {
  const { name, path } = item
  const router = useRouter()
  const pathname = usePathname()

  const onClick = () => {
    return router.push(path)
  }
  const isActive = useMemo(() => {
    return path === pathname
  }, [path, pathname])

  return (
    <>
      <div
        className={`hover:bg-sidebar-background flex cursor-pointer items-center justify-center rounded-lg p-3 text-center transition-colors duration-500 hover:text-white
     ${isActive && 'text-sidebar-active bg-sidebar-background'}`}
        onClick={onClick}
      >
        <p className="font-serif text-lg">{name}</p>
      </div>
    </>
  )
}
