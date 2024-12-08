import Link from "next/link"

export default function Signup() {
    return (

        <main className="flex justify-center items-center w-full h-full bg-white">
            <div className="flex w-[70%] h-[80%] rounded-md bg-white justify-center">

                {/* Seção de boas-vindas - visível para telas maiores */}
                <div className="w-full flex flex-col items-center bg-black justify-center text-2xl shadow-md shadow-slate-400 p-4 rounded-l-md hidden sm:flex">
                    <h1 className="text-white text-5xl font-bold" aria-labelledby="boas-vindas">Boas vindas ao site</h1>
                    <h2 className="text-xl text-white" aria-describedby="tem-conta">Já tem uma conta?</h2>
                    <Link href="../login" aria-label="Ir para página de login" className="bg-transparent text-white flex w-20 border justify-center text-lg rounded-md border-white mt-3">Log In</Link>
                </div>

                {/* Seção de Cadastro */}
                <div className="flex flex-col items-center gap-4 justify-center shadow-md shadow-slate-400 p-4 rounded-md md:w-1/2">
                    <div className="w-28 h-28">
                        <img src="https://cdn-icons-png.flaticon.com/512/3364/3364044.png" alt="Ícone de cadastro" />
                    </div>

                    <h1 className="text-3xl font-bold text-black" id="cadastro-header">Cadastrar</h1>

                    <form action="#" method="POST">
                        <div className="text-black">
                            <label htmlFor="email" className="flex justify-start text-black">Email</label>
                            <input
                                id="email"
                                className="border border-slate-300 w-52 h-1 p-4 rounded-md"
                                placeholder="email@example.com"
                                type="email"
                                aria-label="Digite seu email"
                            />
                        </div>

                        <div className="text-black"> 
                            <label htmlFor="password" className="flex justify-start text-black">Password</label>
                            <input
                                id="password"
                                className="border border-slate-300 w-52 h-1 p-4 rounded-md"
                                placeholder="password"
                                type="password"
                                aria-label="Digite sua senha"
                            />
                            <button
                                type="submit"
                                className="bg-black text-white flex w-52 h-8 mt-4 justify-center text-lg rounded-md hover:bg-black shadow-md transition ease-out delay-150 hover:scale-105 duration-300"
                                aria-label="Cadastrar"
                            >
                                Sign In
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </main>

    )
}