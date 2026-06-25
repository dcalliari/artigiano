'use client'

import { DesktopSidebar } from './DesktopSidebar'
import { navItems } from './navItems'

export function Sidebar() {
  return (
    <div className="fixed left-0 top-0 z-10 hidden h-screen w-64 flex-col justify-center overflow-auto p-8 lg:flex">
      <DesktopSidebar items={navItems} />
    </div>
  )
}
