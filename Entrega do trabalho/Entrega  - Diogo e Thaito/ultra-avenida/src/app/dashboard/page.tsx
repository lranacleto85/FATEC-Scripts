'use client'

import { useEffect, useState } from 'react'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { H1 } from '@/components/ui/typography'

interface ScheduleProps {
  name: string
  cpf: string
  phone: string
  email: string
}

export default function DashboardPage() {
  const [schedules, setSchedules] = useState<ScheduleProps[]>([])

  useEffect(() => {
    const storedData = localStorage.getItem('agendamentos')

    if (storedData) {
      setSchedules(JSON.parse(storedData))
    }
  }, [])

  const formatCPF = (cpf: string) => {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
  }

  const formatPhone = (phone: string) => {
    return phone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')
  }

  return (
    <div className="w-full">
      <div className="mx-auto max-w-7xl px-8 py-16">
        <div>
          <H1 className="!text-xl mb-8">Lista de agendamentos</H1>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nome</TableHead>
              <TableHead>CPF</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Telefone</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {schedules.map((schedule, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{schedule.name}</TableCell>
                <TableCell>{formatCPF(schedule.cpf)}</TableCell>
                <TableCell>{schedule.email}</TableCell>
                <TableCell>{formatPhone(schedule.phone)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
