import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from '@/components/ui/toaster'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: '%s | Artigiano is in Belém, PA',
    default:
      'Artigiano | A cozy, nostalgic Mediterranean restaurant and wine bar in Belém, PA',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-zinc-900">
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
