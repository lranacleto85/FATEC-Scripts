export default function QuemSomos() {
    return (

        <main className="flex flex-col w-full h-auto overflow-y-auto bg-white">

            <div className="relative flex justify-center w-full items-center bg-cover bg-center h-auto" aria-labelledby="sobre-nos-header">
                <div className="relative z-10 justify-center h-auto pt-32">
                    <h1 id="sobre-nos-header" className="text-3xl sm:text-5xl text-neutral-800 font-semibold text-center sm:text-start sm:pl-10">SOBRE NOS</h1>
                    <h2 className="text-2xl sm:text-3xl text-neutral-800 font-semibold p-10">
                        A Imperial Motors é referência no mercado de automóveis multimarcas premium
                    </h2>
                </div>
            </div>

            <section className="flex flex-col items-center justify-center sm:flex-row gap-32" aria-labelledby="missao-objetivo-header">
                <div className="w-64">
                    <h2 id="missao-header" className="font-semibold text-2xl text-neutral-800">MISSAO</h2>
                    <h3 className=" text-neutral-800">
                        Ser o melhor ambiente para escolha de veículos premium e fazer parte dos momentos especiais na vida das pessoas
                    </h3>
                </div>
                <div className="w-64">
                    <h2 id="objetivo-header" className="font-semibold text-2xl text-neutral-800">OBJETIVO</h2>
                    <h3 className=" text-neutral-800">
                        Ser referência nacional como a empresa mais surpreendente na conexão entre pessoas, veículos, bens e serviços afins
                    </h3>
                </div>
            </section>

        </main>

    )
}