import Image from "next/image";
import Porschegt3 from "../../../public/img/porschegt3.jpg"
import Porscheturbo from "../../../public/img/porsche911.jpg"
import Bmw from "../../../public/img/bmwm4.jpg"
import Mclaren from "../../../public/img/mclaren.jpg"

export function Content( ){

    return(

        <section id="painel" className="flex flex-col sm:flex-row bg-neutral-800 justify-center gap-4 m-4" aria-labelledby="painel-titulo">
  
            <h2 id="painel-titulo" className="sr-only">Modelos de carros disponíveis</h2> {/* Título acessível para leitores de tela */}
        
            <article className="flex flex-col items-center bg-white rounded-sm" role="region" aria-labelledby="carro1-titulo">
                <div className="p-4 flex flex-col gap-4 items-center">
                    <p id="carro1-titulo" className="text-neutral-800 w-auto font-bold text-lg">Porsche 911 GT3 RS</p>
                    <Image src={Porschegt3} alt="Imagem de um Porsche 911 GT3 RS" className="w-40 h-auto" />
                    <p className="text-black w-auto text-start text-sm">R$ 1.920.000</p>
                </div>
            </article>
        
            <article className="flex flex-col items-center bg-white rounded-sm" role="region" aria-labelledby="carro2-titulo">
                <div className="p-4 flex flex-col gap-4 items-center">
                    <p id="carro2-titulo" className="text-neutral-800 w-auto font-bold text-lg">Porsche 911 Turbo S</p>
                    <Image src={Porscheturbo} alt="Imagem de um Porsche 911 Turbo S" className="w-40 h-auto" />
                    <p className="text-black w-auto text-start text-sm">R$ 1.795.000</p>
                </div>
            </article>
        
            <article className="flex flex-col items-center bg-white rounded-sm" role="region" aria-labelledby="carro3-titulo">
                <div className="p-4 flex flex-col gap-4 items-center">
                    <p id="carro3-titulo" className="text-neutral-800 w-auto font-bold text-lg">BMW M4</p>
                    <Image src={Bmw} alt="Imagem de uma BMW M4" className="w-40 h-auto" />
                    <p className="text-black w-auto text-start text-sm">R$ 1.399.000</p>
                </div>
            </article>

            <article className="flex flex-col items-center bg-white rounded-sm" role="region" aria-labelledby="carro4-titulo">
                <div className="p-4 flex flex-col gap-4 items-center">
                    <p id="carro4-titulo" className="text-neutral-800 w-auto font-bold text-lg">McLaren 720s</p>
                    <Image src={Mclaren} alt="Imagem de uma McLaren 720s" className="w-40 h-auto" />
                    <p className="text-black w-auto text-start text-sm">R$ 3.650.000</p>
                </div>
            </article>
            
        </section>

    );

}