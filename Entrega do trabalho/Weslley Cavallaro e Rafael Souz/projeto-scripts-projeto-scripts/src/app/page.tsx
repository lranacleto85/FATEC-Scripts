import { Content } from "../app/components/content";

export default function Home() {


  return (

    <main className="flex flex-col w-full h-auto overflow-y-auto bg-neutral-800" role="main">

      <div className="relative flex justify-center w-full items-center bg-[url('../../public/img/bg.jpg')] bg-cover bg-center h-auto">
        <div className="absolute inset-0 bg-black bg-opacity-50" role="presentation"></div> {/* Tratando filtros do background */}
        <div className="relative z-10 justify-center p-64 h-auto">
          <h1 className="text-3xl sm:text-5xl text-white font-semibold" id="headline">Um novo conceito de veiculo</h1>
          <hr className="my-2 border-t-2 border-stone-400" />
          <h2 className="text-3xl sm:text-2xl text-white font-semibold">Desfrute de uma esperiencia inovadora</h2>
        </div>
      </div>
    
      <section className="flex w-full justify-center bg-neutral-800 p-4" aria-labelledby="destaques">
        <h2 id="destaques" className="text-2xl font-semibold text-white">DESTAQUES</h2>
      </section>
    
      <Content />
    
    </main>

  );
}
