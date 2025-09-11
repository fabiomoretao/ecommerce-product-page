import { useState, type ReactNode } from "react"
import CartImg from "../../assets/icon-cart.svg"

type CartProps = {
    product?: ReactNode
}

export default function Cart({ product }: CartProps) {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div>
            <img src={CartImg} onClick={() => setIsOpen(prev => !prev)} className="cursor-pointer" />
            <div
                className={`
          absolute flex flex-col gap-4 bg-white top-[10vh] left-[5vw]
          h-[30vh] w-[90vw] rounded-lg py-4
          transition-all duration-500 ease-in-out
          ${isOpen ? "opacity-100" : "opacity-0 -translate-y-10 invisible"}
        `}
            >
                <h3 className="font-bold px-4">Cart</h3>
                <hr className="w-full text-grayish-blue " />
                {product ?
                    product
                    :
                    <p className="self-center font-bold text-dark-grayish-blue text-sm mt-[5vh]">
                        Your cart is empty.
                    </p>
                }
            </div>
        </div>
    )
}