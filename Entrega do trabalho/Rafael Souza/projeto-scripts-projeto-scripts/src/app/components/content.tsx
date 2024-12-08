import Image from "next/image";
import Porschegt3 from "../../../public/porschegt3.jpg"
import Porscheturbo from "../../../public/porsche911.jpg"
import Bmw from "../../../public/bmwm4.jpg"
import Mclaren from "../../../public/mclaren.jpg"

export function Content( ){

    return(

        <section id="painel" className="flex flex-col sm:flex-row bg-neutral-800 justify-center gap-4 m-4">
          
          <div className="flex flex-col items-center bg-white rounded-sm">   
              <div className='p-4 flex flex-col gap-4 items-center'>
                  <p className='text-neutral-800  w-auto font-bold text-lg'>Porsche 911 GT3 RS</p>
                  <Image src={Porschegt3} alt="Imagem de uma Porsche 911 GT3 RS " className="w-40 h-auto"/>
                  <p className='text-black w-auto text-start text-sm' >R$ 1.920.000</p>
              </div> 
          </div>

          <div className="flex flex-col items-center bg-white rounded-sm">   
              <div className='p-4 flex flex-col gap-4 items-center'>
                  <p className='text-neutral-800  w-auto font-bold text-lg'>Porsche 911 Turbo S</p>
                  <Image src={Porscheturbo} alt="Imagem de uma Porsche 911 Turbo S" className="w-40 h-auto"/>
                  <p className='text-black w-auto text-start text-sm' >R$ 1.795.000</p>
              </div> 
          </div>

          <div className="flex flex-col items-center bg-white rounded-sm">   
              <div className='p-4 flex flex-col gap-4 items-center'>
                  <p className='text-neutral-800  w-auto font-bold text-lg'>BMW M4</p>
                  <Image src={Bmw} alt="Imagem de uma BMW M4" className="w-40 h-auto"/>
                  <p className='text-black w-auto text-start text-sm' >R$ 1.399.000</p>
              </div> 
          </div>

          <div className="flex flex-col items-center bg-white rounded-sm">   
              <div className='p-4 flex flex-col gap-4 items-center'>
                  <p className='text-neutral-800  w-auto font-bold text-lg'>McLaren 720s</p>
                  <Image src={Mclaren} alt="Imagem de uma McLaren 720s" className="w-40 h-auto"/>
                  <p className='text-black w-auto text-start text-sm' >R$ 3.650.000</p>
              </div> 
          </div>

        </section>

    );

}