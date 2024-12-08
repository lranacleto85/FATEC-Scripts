"use client"

import { useState } from "react";

export default function Contato() {

    const [modelo, setModelo] = useState("");
    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [email, setEmail] = useState("");
    const [res, setRes] = useState("");

    const handleSubmit = (event: React.FormEvent) => {

        event.preventDefault();
        
        if(modelo === "" || nome === "" || cpf === "" || email === ""){

            alert("Preencha todos os campos!")

        }else{

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
                alert("Mensagem enviada com sucesso!");
                
            }else{
                
                setRes("CPF Invalido!");
                
            }

        }

    }

  return (

    <main className="flex flex-col w-full h-auto overflow-y-auto bg-neutral-800">
        <div className="relative flex justify-center w-full bg-[url('../../public/img/bg.jpg')] bg-cover bg-center h-full">
            <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Tratando filtros do background */}
            <div className="relative z-10 justify-center p-20 h-auto">
                <div>
                    <h1 className="text-3xl sm:text-5xl text-white font-semibold">CONTATO</h1>
                    <h2 className="text-lg sm:text-xl text-white">Deixe seu contato para fecharmos negócio</h2>
                </div>
                
                <form onSubmit={handleSubmit} className="lg:flex gap-12 border p-4 mt-8" aria-labelledby="form-header">
                    
                    <div>
                        <label htmlFor="modelo" className="sr-only">Modelo desejado</label>
                        <input
                            id="modelo"
                            name="modelo"
                            className="border-b-4 border-white bg-transparent placeholder:text-white w-52 h-1 p-6 text-white"
                            placeholder="Modelo desejado"
                            type="text"
                            onChange={(evento) => setModelo(evento.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="nome" className="sr-only">Nome</label>
                        <input
                            id="nome"
                            name="nome"
                            className="border-b-4 border-white bg-transparent placeholder:text-white w-52 h-1 p-6 text-white"
                            placeholder="Nome"
                            type="text"
                            onChange={(evento) => setNome(evento.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="cpf" className="sr-only">CPF</label>
                        <input
                            id="cpf"
                            name="cpf"
                            className="border-b-4 border-white bg-transparent placeholder:text-white w-52 h-1 p-6 text-white"
                            placeholder="CPF"
                            type="text"
                            value={cpf}
                            onChange={(evento) => setCpf(evento.target.value)}
                            aria-describedby="cpf-error"
                        />
                        {res && <p id="cpf-error" className="text-red-500 mt-2 text-sm font-medium" role="alert">{res}</p>}
                    </div>

                    <div>
                        <label htmlFor="email" className="sr-only">Email</label>
                        <input
                            id="email"
                            name="email"
                            className="border-b-4 border-white bg-transparent placeholder:text-white w-52 h-1 p-6 text-white"
                            placeholder="Email"
                            type="email"
                            onChange={(evento) => setEmail(evento.target.value)}
                        />
                        <button
                            type="submit"
                            className="bg-transparent text-white flex w-52 h-8 mt-4 justify-center text-lg border border-white shadow-md transition ease-out delay-150 hover:scale-105 duration-300"
                        >
                            ENVIAR
                        </button>
                    </div>

                </form>
            </div>
        </div>
    </main>

  );
}
