import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { H2, P } from '@/components/ui/typography'

import { Car, Cog, FilePen, SearchCheck } from 'lucide-react'

interface ServiceProps {
  icon: React.ReactElement
  title: string
  description: string
}

const services: ServiceProps[] = [
  {
    icon: <Car size={36} />,
    title: 'Vistoria Cautelar',
    description:
      'Verificamos a condição para identificar possíveis problemas antes da compra ou venda.'
  },
  {
    icon: <Cog size={36} />,
    title: 'Vistoria Estrutural',
    description:
      'Avaliamos a estrutura para verficar se já sofreu colisões de pequeno, médio ou grande porte.'
  },
  {
    icon: <SearchCheck size={36} />,
    title: 'Laudo de Transferência',
    description:
      'Obrigatório para transferência de veículos ou processos documentais como segunda via de recibo, troca de placas, etc.'
  },
  {
    icon: <FilePen size={36} />,
    title: 'Recuperação de chassi',
    description:
      'Serviço indicado para veículos com chassis danificados por ferrugem ou corrosão.'
  }
]

export const OurServices = () => {
  return (
    <section id="nossos-servicos" className="text-center py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-8">
        <H2 className="text-indigo-900">Nossos serviços</H2>
        <P>Soluções Completas para Atender às Suas Necessidades Veiculares</P>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {services.map(({ icon, title, description }: ServiceProps) => (
            <Card key={title} className="bg-indigo-50/50 border-none">
              <CardHeader>
                <CardTitle className="grid gap-4 place-items-center text-lg">
                  <span className="text-indigo-900 flex mb-2">{icon}</span>
                  {title}
                </CardTitle>
              </CardHeader>
              <CardContent>{description}</CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
