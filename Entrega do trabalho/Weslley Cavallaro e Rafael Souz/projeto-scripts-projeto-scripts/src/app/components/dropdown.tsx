import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import ImgMenu from "../../../public/img/menu.png";
import Image from "next/image";
import Link from "next/link";

export default function Dropdown() {
    return (

        <Menu as="div" className="relative text-left" aria-labelledby="menu-button">
            <div>
                <MenuButton
                    className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900"
                    aria-haspopup="true"  // Indica que o botão tem um menu suspenso
                    aria-expanded="false"  // Inicialmente o menu está fechado, esse valor será dinâmico conforme o estado do menu
                    id="menu-button"
                >
                    <Image src={ImgMenu} alt="Logo" className="w-7 h-auto" />
                </MenuButton>
            </div>

            <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                id="menu"  // Define que este bloco é um menu
                aria-labelledby="menu-button"  // Relaciona o menu ao botão
            >
                <div className="flex flex-col text-black font-semibold p-2">
                    <MenuItem>
                        <Link href="../">Inicio</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link href="/contato">Contato</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link href="/quem-somos">Quem somos</Link>
                    </MenuItem>
                </div>
            </MenuItems>
        </Menu>

    )
}