'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'

import { ControlledInput } from '@/components/form/ControlledInput'
import { Button } from '@/components/ui/button'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle
} from '@/components/ui/alert-dialog'

import { H2, P } from '@/components/ui/typography'
import { validateCPF } from '@/lib/validateCPF'
import { validatePhone } from '@/lib/validatePhone'
import { useState } from 'react'

interface FormDto {
  name: string
  cpf: string
  email: string
  phone: string
}

export const ContactForm = () => {
  const [showMessage, setShowMessage] = useState(false)

  const formSchema = z.object({
    name: z
      .string({
        message: 'Campo obrigatório'
      })
      .min(10, 'Deve conter no mínimo 10 caracteres'),
    cpf: z
      .string({
        message: 'Campo obrigatório'
      })
      .length(11, 'O CPF deve conter 11 dígitos')
      .regex(/^\d+$/, 'O CPF deve conter apenas números')
      .refine(cpf => validateCPF(cpf), 'CPF Inválido'),
    email: z
      .string({
        message: 'Campo obrigatório'
      })
      .min(10, 'Deve conter no mínimo 10 caracteres')
      .email('Endereço de email inválido'),
    phone: z
      .string({
        required_error: 'Campo obrigatório'
      })
      .min(1, 'Telefone é obrigatório')
      .refine(phone => validatePhone(phone), 'Número de telefone inválido')
  })

  const form = useForm<FormDto>({
    resolver: zodResolver(formSchema)
  })

  const onSubmit = (data: FormDto) => {
    const savedItems = localStorage.getItem('agendamentos')

    const parsedItems = savedItems ? JSON.parse(savedItems) : []

    parsedItems.push(data)

    localStorage.setItem('agendamentos', JSON.stringify(parsedItems))

    setShowMessage(true)

    form.reset()
  }

  return (
    <section id="agendamento" className="text-center py-24 sm:py-36">
      <div className="max-w-7xl mx-auto px-8">
        <H2>Agende sua vistoria</H2>
        <P>Fale conosco e agende já a vistoria do seu veículo</P>

        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="max-w-xl mx-auto gap-4 flex flex-col">
              <ControlledInput
                labelClassName="text-white"
                name="name"
                label="Nome"
                placeholder="Digite o seu nome"
              />
              <ControlledInput
                labelClassName="text-white"
                name="cpf"
                label="CPF"
                placeholder="Digite o seu CPF"
              />
              <ControlledInput
                labelClassName="text-white"
                name="phone"
                label="Telefone"
                placeholder="Digite o seu telefone"
              />
              <ControlledInput
                labelClassName="text-white"
                name="email"
                label="Email"
                placeholder="Digite o seu email"
              />
              <Button type="submit" className="bg-yellow-600 w-full mt-4">
                Quero agendar a vistoria
              </Button>
            </div>
          </form>
        </FormProvider>
      </div>
      <AlertDialog open={showMessage} onOpenChange={setShowMessage}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Obrigado pelo agendamento</AlertDialogTitle>
            <AlertDialogDescription>
              Em breve entraremos em contato para confirmar a data e horário
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogAction onClick={() => setShowMessage(false)}>
              Combinado
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </section>
  )
}
