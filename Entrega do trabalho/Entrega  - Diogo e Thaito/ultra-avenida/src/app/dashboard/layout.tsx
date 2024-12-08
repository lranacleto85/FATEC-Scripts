import { Header } from './_layout/Header'

export default function SiteLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <Header />
      <div>{children}</div>
    </div>
  )
}
