import Link from "next/link"

export default function Signup() {
    return (
        <div className="flex just justify-center items-center w-full h-full bg-white">

                <div className="flex w-[70%] h-[80%] rounded-md bg-white justify-center">

                    <div className="w-full flex flex-col items-center  bg-black justify-center text-2xl shadow-md shadow-slate-400 p-4 rounded-l-md hidden sm:flex">
                            
                        <h1 className="text-white text-5xl font-bold">Boas vindas ao site</h1>
                        <h2 className="text-xl text-white">Ja tem uma conta?</h2>
                                
                        <Link href="../login" className="bg-transparent text-white flex w-20 border justify-center text-lg rounded-md border-white mt-3">Log In</Link>
                    </div>

                    <div className="flex flex-col items-center gap-4 justify-center shadow-md shadow-slate-400 p-4 rounded-md md:w-1/2">
                        <div className="w-28 h-28">
                            <img src="https://cdn-icons-png.flaticon.com/512/3364/3364044.png" alt="" />
                        </div>
                        
                        <h1 className="text-3xl font-bold text-black">Cadastrar</h1>

                        <div>
                            <h3 className="flex justify-start text-black">Email</h3>
                            <input
                                className="border border-slate-300 w-52 h-1 p-4 rounded-md"
                                placeholder="email@example.com"
                                type="email"
                            
                            />
                        </div>
                        
                        <div>
                            <h3 className="flex justify-start text-black">Password</h3>
                            <input
                                className="border border-slate-300 w-52 h-1 p-4 rounded-md"
                                placeholder="password"
                                type="password"
                                
                            />
                            <button className="bg-black text-white flex w-52 h-8 mt-4 justify-center text-lg rounded-md hover:bg-black shadow-md transition ease-out delay-150 hover:scale-105 duration-300">Sign In</button>
                        </div>

                    </div>

                </div>

            </div>
    )
}