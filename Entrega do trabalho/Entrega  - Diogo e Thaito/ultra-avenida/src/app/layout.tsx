import '@/styles/globals.css'

import { GeistSans } from 'geist/font/sans'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ultra Avenida',
  description: 'Ultra Avenida Vistoria Veicular'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${GeistSans.variable}  font-sans antialiased`}>
        <main className="w-full">{children}</main>
      </body>
    </html>
  )
}
