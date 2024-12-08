import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/logo.png";
import Dropdown from "./dropdown";

export function Header() {
  return (
    <header className="border-b border px-2 py-1 bg-white">
      <nav className="flex items-center gap-8 justify-between">
        <div id="menu" className="sm:hidden w-32">
          <Dropdown />
        </div>
        <div id="logo">
          <h1 className="text-xl font-bold text-black hidden">Imperial Motors</h1>
          <Image src={Logo} alt="Logo" className="w-32 h-auto" />
        </div>
        <div className="gap-4 flex text-black hidden sm:flex font-semibold">
          <Link href="../">Inicio</Link>
          <Link href="/quem-somos">Quem somos</Link>
          <Link href="/contato">Contato</Link>
        </div>
        <div className="text-black font-semibold w-32 sm:w-auto text-end">
          <Link className="" href="/login">Login</Link>
        </div>
      </nav>
    </header>


  );
}
