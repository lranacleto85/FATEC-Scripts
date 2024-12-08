'use client'

import { Lock, Menu, User, X } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { cn } from '@/lib/utils'

import LogoEmpresa from '@/assets/images/logo-web.png'

import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
import { H1 } from '@/components/ui/typography'
import Link from 'next/link'
import { useState } from 'react'

const navigation = [{ name: 'Voltar ao site', href: '/' }]

export function Header(): React.ReactElement {
  const [isOpen, setIsOpen] = useState(false)

  const router = useRouter()

  const handleLogout = () => {
    sessionStorage.removeItem('user')

    router.push('/login')
  }

  return (
    <nav className="bg-indigo-950">
      <div className="mx-auto max-w-7xl px-8">
        <div className="relative flex h-24 items-center justify-between">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="!h-6 !w-6 text-white" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64">
              <SheetHeader>
                <SheetTitle></SheetTitle>
              </SheetHeader>
              <nav className="mt-4">
                <ul className="space-y-2">
                  {navigation.map(item => (
                    <li key={item.name}>
                      <SheetClose asChild>
                        <Link href={item.href}>{item.name}</Link>
                      </SheetClose>
                    </li>
                  ))}
                </ul>
              </nav>
            </SheetContent>
          </Sheet>
          <div className="flex flex-1 items-center justify-center sm:justify-start">
            <div className="flex shrink-0 items-center">
              <Image
                onClick={() => setIsOpen(!isOpen)}
                src={LogoEmpresa}
                alt="Logo Ultra Avenida"
                className="h-16 w-16"
              />
            </div>
            <H1 className="text-white font-bold ml-2 !text-sm tracking-tight">
              Painel administrativo
            </H1>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map(item => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      'text-gray-300 hover:bg-indigo-950 hover:text-white font-normal',
                      'rounded-md px-3 py-2 text-sm '
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <Button
              onClick={() => handleLogout()}
              className="bg-yellow-600 hidden sm:flex hover:bg-yellow-600 text-white text-xs"
            >
              Sair
            </Button>
          </div>
          <Button
            size="icon"
            onClick={() => handleLogout()}
            className="bg-yellow-600 rounded-full sm:hidden hover:bg-yellow-600 text-white text-xs"
          >
            <User className="!h-6 !w-6" />
          </Button>
        </div>
      </div>
    </nav>
  )
}
