import Image from 'next/image'

import ECVLogo from '@/assets/images/ECV.png'

import { H2, P } from '@/components/ui/typography'

import { SectionWrapper } from './Wrapper'

export function WeAreAuthorized() {
  return (
    <section id="somos-autorizados" className="bg-indigo-50/50">
      <SectionWrapper>
        <div>
          <H2 className="text-indigo-900">Somos Autorizados</H2>
          <P>
            Temos autorização como Empresa Credenciada de Vistoria (ECV) para
            realizar serviços de vistoria veicular. Garantimos que todos os
            procedimentos seguem as exigências e regulamentações do Detran-SP,
            assegurando a qualidade e confiabilidade nos laudos emitidos.
          </P>
        </div>

        <div className="flex justify-center sm:justify-end">
          <Image
            src={ECVLogo}
            className="w-[300px] md:w-[500px] lg:w-[500px] rounded-2xl object-contain self-end"
            alt="Imagem de selo de Empresa Credenciada de Vistoria"
            role="img"
          />
        </div>
      </SectionWrapper>
    </section>
  )
}
