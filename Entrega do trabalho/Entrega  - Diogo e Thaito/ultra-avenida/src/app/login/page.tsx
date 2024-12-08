'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { AlertDialogDescription } from '@radix-ui/react-alert-dialog'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'

import logoEmpresa from '@/assets/images/logo-web.png'

import { ControlledInput } from '@/components/form/ControlledInput'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle
} from '@/components/ui/alert-dialog'
import { H1 } from '@/components/ui/typography'

interface LoginDTO {
  username: string
  password: string
}

export default function Login() {
  const [showError, setShowError] = useState(false)

  const router = useRouter()

  useEffect(() => {
    const user = sessionStorage.getItem('user')

    if (user) {
      router.push('/dashboard')
    }
  }, [])

  const formSchema = z.object({
    username: z
      .string({
        message: 'Campo obrigatório'
      })
      .min(4, 'Deve conter no mínimo 4 caracteres'),
    password: z
      .string({
        message: 'Campo obrigatório'
      })
      .min(4, 'A senha deve conter no mínimo 4 caracteres')
  })

  const form = useForm<LoginDTO>({
    resolver: zodResolver(formSchema)
  })

  const onSubmit = async (data: LoginDTO) => {
    const { username, password } = data

    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      })

      if (res.ok) {
        const data = await res.json()
        sessionStorage.setItem('user', data.username)

        router.push('/dashboard')
      } else {
        setShowError(true)
      }
    } catch (_) {
      setShowError(true)
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-indigo-950">
      <div>
        <Image
          src={logoEmpresa}
          alt="Logo da empresa"
          width={144}
          height={144}
          className="mx-auto size-36 rounded"
        />
        <div className="bg-white min-w-80 min-h-96 p-8 rounded-2xl mt-8">
          <H1 className="mt-4 !text-base text-center font-bold">
            Entre com suas credenciais
          </H1>
          <FormProvider {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-6 mt-6"
            >
              <ControlledInput name="username" label="Digite seu usuário" />
              <ControlledInput
                name="password"
                label="Digite sua senha:"
                type="password"
              />

              <button
                type="submit"
                className="w-full rounded-lg bg-amber-500 px-4 py-2 font-bold text-white"
              >
                Fazer Login
              </button>
              <Link href="/" className="text-xs text-center">
                Voltar ao site
              </Link>
            </form>
          </FormProvider>
        </div>
      </div>
      <AlertDialog open={showError} onOpenChange={setShowError}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Erro no Login</AlertDialogTitle>
            <AlertDialogDescription>
              Usuário ou senha inválidos. Por favor, tente novamente.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogAction onClick={() => setShowError(false)}>
              Fechar
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
