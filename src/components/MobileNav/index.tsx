'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import { navItems } from '@/components/Sidebar/navItems'
import { SidebarItem } from '@/components/Sidebar/SidebarItem'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet'

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-20 flex h-14 items-center justify-between bg-zinc-900 px-4 lg:hidden">
      <Link href="/">
        <Image
          src="/logo-white.png"
          alt="Artigiano"
          width={120}
          height={0}
          className="h-auto w-28"
          loading="eager"
        />
      </Link>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <button
            aria-label="Abrir menu"
            className="rounded-md p-2 text-red-400 transition-colors hover:text-white"
          >
            <Menu className="size-6" />
          </button>
        </SheetTrigger>

        <SheetContent
          side="left"
          className="flex w-72 flex-col bg-zinc-900 pt-10 text-red-400"
        >
          <div className="mb-6 flex justify-center pt-4">
            <Link href="/" onClick={() => setOpen(false)}>
              <Image
                src="/logo.png"
                alt="Artigiano"
                width={160}
                height={0}
                className="h-auto w-40"
              />
            </Link>
          </div>

          <div className="border-y border-red-100 py-4 text-center font-serif text-sm italic transition-colors duration-500 hover:text-white">
            <Link
              href="https://maps.app.goo.gl/fnNPvmhLtxyhdAs58"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
            >
              <span>1454 Av. Visc. de Souza Franco, </span>
              <span>Belém, PA 66053-000</span>
            </Link>
          </div>

          <nav className="flex flex-col items-center space-y-1 py-4 text-center">
            {navItems.map((item, index) => (
              <SheetClose key={index} asChild>
                <div className="w-full" onClick={() => setOpen(false)}>
                  <SidebarItem item={item} />
                </div>
              </SheetClose>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  )
}
