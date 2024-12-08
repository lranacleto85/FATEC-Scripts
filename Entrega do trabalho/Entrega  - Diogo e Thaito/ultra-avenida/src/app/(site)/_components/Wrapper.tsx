export function SectionWrapper({ children }: React.PropsWithChildren) {
  return (
    <div className="mx-auto max-w-7xl py-16 sm:py-32 grid lg:grid-cols-[1fr,1fr] items-center px-8">
      {children}
    </div>
  )
}
