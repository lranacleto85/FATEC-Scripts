import LaudoImage from '@/assets/images/laudo.png'
import Image from 'next/image'

import { H2, P } from '@/components/ui/typography'

import { SectionWrapper } from './Wrapper'

export function Hero() {
  return (
    <section
      id="inicio"
      className="bg-indigo-50"
      aria-labelledby="hero-section"
    >
      <SectionWrapper>
        <div className="flex justify-start mb-8 sm:mb-0">
          <Image
            src={LaudoImage}
            className="w-[350px] md:w-[300px] lg:w-[500px] rounded-2xl object-contain"
            alt="Imagem de uma inspeção veicular"
            role="img"
          />
        </div>
        <div>
          <H2 id="hero-section" className="text-indigo-900">
            Vistoria de identificação veicular
          </H2>

          <P>
            Realizamos a vistoria de identificação veicular, também conhecida
            como laudo de transferência, serviço exigido pelo Detran-SP para a
            documentação de veículos automotores. Esse procedimento tem como
            objetivo assegurar a integridade do veículo e sua conformidade com
            as normas de trânsito vigentes.
          </P>
        </div>
      </SectionWrapper>
    </section>
  )
}
