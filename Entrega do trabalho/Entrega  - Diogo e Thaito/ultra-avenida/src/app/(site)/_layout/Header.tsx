'use client'

import { Menu, User } from 'lucide-react'
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
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import { useState } from 'react'
import { Link as ScrollLink } from 'react-scroll'

const navigation = [
  { name: 'Serviços', href: '#nossos-servicos' },
  { name: 'Somos Autorizados', href: '#somos-autorizados' },
  { name: 'Agendamento', href: '#agendamento' }
]

export function Header(): React.ReactElement {
  const [isOpen, setIsOpen] = useState(false)

  const router = useRouter()

  return (
    <nav className="bg-indigo-950" aria-label="Main navigation">
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
              <VisuallyHidden>
                <SheetHeader>
                  <SheetTitle></SheetTitle>
                </SheetHeader>
              </VisuallyHidden>

              <ul className="space-y-2">
                {navigation.map(item => (
                  <li key={item.name}>
                    <SheetClose asChild>
                      <ScrollLink
                        key={item.name}
                        to={item.href.replace('#', '')}
                        smooth={true}
                        duration={500}
                        className={cn(
                          'text-indigo-900 hover:text-indigo-950 font-sans font-medium',
                          'rounded-md px-3 py-2 text-sm '
                        )}
                      >
                        {item.name}
                      </ScrollLink>
                    </SheetClose>
                  </li>
                ))}
              </ul>
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
            <div className="hidden sm:ml-6 sm:block">
              <div
                className="flex space-x-4"
                role="navigation"
                aria-label="Main"
              >
                {navigation.map(item => (
                  <ScrollLink
                    key={item.name}
                    to={item.href.replace('#', '')}
                    smooth={true}
                    duration={500}
                    className={cn(
                      'text-gray-300 hover:bg-indigo-950 hover:text-white font-normal',
                      'rounded-md px-3 py-2 text-sm '
                    )}
                  >
                    {item.name}
                  </ScrollLink>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <Button
              onClick={() => {
                router.push('/login')
              }}
              className="bg-yellow-600 hidden sm:flex hover:bg-yellow-600 text-white text-xs"
            >
              Acessar painel
            </Button>
          </div>
          <Button
            size="icon"
            onClick={() => {
              router.push('/login')
            }}
            className="bg-yellow-600 rounded-full sm:hidden hover:bg-yellow-600 text-white text-xs"
          >
            <User className="!h-6 !w-6" />
          </Button>
        </div>
      </div>
    </nav>
  )
}
