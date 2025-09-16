import { useState } from "react"
import MenuImg from "../../assets/icon-menu.svg"
import Close from "../../assets/icon-close.svg"

export default function Menu() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="z-30">
            {/* menu no cabecalho */}
            <img
                src={MenuImg}
                onClick={() => { setIsOpen((prev) => !prev) }}
                className={`cursor-pointer hover:scale-110 active:scale-110`}
            />

            {/* Fundo escuro */}
            <div
                className={`fixed inset-0 transition-opacity duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
            >
                <div className={`absolute inset-0 bg-black/70`}></div>
            </div>

            {/* barra lateral */}
            <div
                className={`flex flex-col items-start gap-4 absolute grow bg-white top-0 left-0 h-screen w-[60vw] rounded-lg p-4 duration-500 ease-in-out shadow-md
          ${isOpen ? "opacity-100" : "opacity-0 -translate-x-10 invisible"}
        `}
            >
                <img
                    src={Close}
                    className={`cursor-pointer hover:scale-110 active:scale-110 transition-all`}
                    onClick={() => { setIsOpen((prev) => !prev) }}
                />
                {/* opcoes do menu */}
                <ul className="list-none font-bold flex flex-col gap-4 pt-4">

                    <li className="active:scale-80 active:text-dark-grayish-blue cursor-pointer hover:scale-110 hover:text-dark-grayish-blue duration-300">Collections</li>

                    <li className="active:scale-80 active:text-dark-grayish-blue cursor-pointer hover:scale-110 hover:text-dark-grayish-blue duration-300">Men</li>

                    <li className="active:scale-80 active:text-dark-grayish-blue cursor-pointer hover:scale-110 hover:text-dark-grayish-blue duration-300">Women</li>

                    <li className="active:scale-80 active:text-dark-grayish-blue cursor-pointer hover:scale-110 hover:text-dark-grayish-blue duration-300">About</li>

                    <li className="active:scale-80 active:text-dark-grayish-blue cursor-pointer hover:scale-110 hover:text-dark-grayish-blue duration-300">Contact</li>
                </ul>
            </div>
        </div>
    )
}