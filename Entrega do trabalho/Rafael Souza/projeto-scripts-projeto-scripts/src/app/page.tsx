import { Content } from "../app/components/content";

export default function Home() {


  return (
      <main className="flex flex-col w-full h-auto overflow-y-auto bg-neutral-800">

        <div className="relative flex justify-center w-full items-center bg-[url('../../public/bg.jpg')] bg-cover bg-center h-auto">
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative z-10 justify-center p-64 h-auto">
            <h1 className="text-3xl sm:text-5xl text-white font-semibold">Um novo conceito de veiculo</h1>
            <hr className="my-2 border-t-2 border-stone-400"></hr>
            <h2 className="text-3xl sm:text-2xl text-white font-semibold">Desfrute de uma esperiencia inovadora</h2>
          </div>
        </div>

        <div className="flex w-full justify-center bg-neutral-800 p-4">
          <h2 className="text-2xl font-semibold">DESTAQUES</h2>
        </div>

        <Content/>
        
      </main>

  );
}
