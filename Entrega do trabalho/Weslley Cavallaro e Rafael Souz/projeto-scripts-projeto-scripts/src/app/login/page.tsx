"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [erro, setErro] = useState("");
    const router = useRouter();

    const handleSubmit = (event: React.FormEvent) => {

        event.preventDefault();

        if (email !== "teste@teste" || senha !== "teste") {

            setErro("Email ou Senha Invalidos!");

        } else {

            setErro("");
            router.push('/');

        }

    }

    return (

        <main className="flex justify-center items-center w-full h-full bg-white">
            <div className="flex w-[70%] h-[80%] rounded-md bg-white justify-center">
                <div className="flex flex-col items-center gap-4 justify-center shadow-md shadow-slate-400 p-4 rounded-md md:w-1/2">
                    <div className="w-28 h-28">
                        <img src="https://cdn-icons-png.flaticon.com/512/3364/3364044.png" alt="Ícone de login" />
                    </div>

                    <h1 className="text-3xl font-bold text-black">Entrar</h1>

                    <form onSubmit={handleSubmit} aria-labelledby="login-form">

                        <div className="text-black">
                            <label htmlFor="email" className="flex justify-start text-black">Email</label>
                            <input
                                id="email"
                                className="border border-slate-300 w-52 h-1 p-4 rounded-md"
                                placeholder="email@example.com"
                                type="email"
                                onChange={(evento) => setEmail(evento.target.value)}
                                aria-required="true"
                            />
                        </div>

                        <div className="text-black">
                            <label htmlFor="senha" className="flex justify-start text-black">Password</label>
                            <input
                                id="senha"
                                className="border border-slate-300 w-52 h-1 p-4 rounded-md"
                                placeholder="password"
                                type="password"
                                onChange={(evento) => setSenha(evento.target.value)}
                                aria-required="true"
                            />
                            {erro && <p id="senha-error" className="text-red-500 mt-2 text-sm font-medium" role="alert">{erro}</p>}
                            <button
                                type="submit"
                                className="bg-black text-white flex w-52 h-8 mt-4 justify-center text-lg rounded-md hover:bg-black shadow-md transition ease-out delay-150 hover:scale-105 duration-300"
                                aria-label="Enviar login"
                            >
                                Log in
                            </button>
                        </div>
                    </form>
                </div>

                <div className="w-full flex flex-col items-center bg-black justify-center text-2xl shadow-md shadow-slate-400 p-4 rounded-l-md hidden sm:flex">
                    <h1 className="text-white text-5xl font-bold">Boas vindas ao site</h1>
                    <h2 className="text-xl text-white">Não tem uma conta?</h2>
                    <Link
                        href="../signup"
                        className="bg-transparent text-white flex w-20 border justify-center text-lg rounded-md border-white mt-3"
                        aria-label="Ir para página de cadastro"
                    >
                        Sign Up
                    </Link>
                </div>
            </div>
        </main>

    )
}