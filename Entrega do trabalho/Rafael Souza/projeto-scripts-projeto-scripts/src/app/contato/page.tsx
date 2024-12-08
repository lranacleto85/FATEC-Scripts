"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Contato() {

    const [cpf, setCpf] = useState("");
    const [res, setRes] = useState("");
    const router = useRouter();

    console.log(cpf)

    const handleSubmit = (event: React.FormEvent) => {

        event.preventDefault();
        
        let b1 = 0;
        let b2 = 0;
        
        let decremento = 9;
        for(let i = 0; i < 9; i++){
            
            b1 +=  parseInt(cpf[i]) * (i + 1);
            b2 +=  parseInt(cpf[i]) * decremento;
            decremento--;
            
        }
        
        b1 %= 11;
        b2 %= 11;
        
        b1 = (b1 === 10) ? 0 : b1;
        b2 = (b2 === 10) ? 0 : b2;
        
        if(b1 == parseInt(cpf[9]) && b2 == parseInt(cpf[10])){
            
            setRes("");
            router.push('/');
            
        }else{
            
            setRes("CPF Invalido!");
            
        }

    }

  return (
      <main className="flex flex-col w-full h-auto overflow-y-auto bg-neutral-800">
        
        <div className="relative flex justify-center w-full bg-[url('../../public/bg.jpg')] bg-cover bg-center h-full">
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative z-10 justify-center p-20 h-auto">
            <div className="">
                <h1 className="text-3xl sm:text-5xl text-white font-semibold">CONTATO</h1>
                <h2 className="text-lg sm:text-xl text-white">Deixe seu contato para fecharmos negocio</h2>
            </div>
            
            <form  onSubmit={handleSubmit} className="lg:flex  gap-12 border p-4 mt-8">

                <div>
                    <input
                        className="border-b-4 border-white bg-transparent placeholder:text-white w-52 h-1 p-6"
                        placeholder="Modelo desejado"
                        type="name"
                                
                    />
                </div>

                <div>
                    <input
                        className="border-b-4 border-white bg-transparent placeholder:text-white w-52 h-1 p-6"
                        placeholder="Nome"
                        type="name"
                    />
                </div>

                <div>
                    <input
                        className="border-b-4 border-white bg-transparent placeholder:text-white w-52 h-1 p-6"
                        placeholder="CPF"
                        type="cpf"
                        onChange={(evento) => setCpf(evento.target.value)}
                                
                    />
                    <p className="text-red-500 mt-2 text-sm font-medium">{res}</p>
                </div>
                            
                <div>
                    <input
                        className="border-b-4 border-white bg-transparent placeholder:text-white w-52 h-1 p-6"
                        placeholder="Email"
                        type="email"
                    />
                    <button type="submit" className="bg-transparent text-white flex w-52 h-8 mt-4 justify-center text-lg border border-white shadow-md transition ease-out delay-150 hover:scale-105 duration-300">ENVIAR</button>
                </div>

            </form>
          </div>
        </div>

      </main>

  );
}
