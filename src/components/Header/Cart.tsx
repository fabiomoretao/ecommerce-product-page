import { useState } from "react"
import CartImg from "../../assets/icon-cart.svg"
import ProductCard from "./ProductCard"
import Button from "../Button"
import type { HeaderProps } from "../../Header";

export default function Cart({ cart, totalQuantity }: HeaderProps) {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div>
            {/* carrinho no cabecalho */}
            <div className="relative">
                {/* quanidade de itens no carrinho */}
                <div
                    className=" flex items-center justify-center bg-orange text-white text-xs rounded-2xl w-5 h-3 absolute -top-1.5 -right-2">
                    {totalQuantity}
                </div>
                <img
                    src={CartImg}
                    onClick={() => { setIsOpen((prev) => !prev) }}
                    className={`cursor-pointer hover:scale-110 active:scale-110 transition-all`}
                />
            </div>
            {/* itens do carrinho */}
            <div
                className={`flex flex-col gap-4 absolute grow bg-white top-[12vh] left-[5vw] min-h-[30vh] max-h-[35vh] w-[90vw] rounded-lg py-4 transition-all duration-500 ease-in-out shadow-md
                    ${isOpen ? "opacity-100 z-20" : "opacity-0 -translate-y-10 invisible"}
        `}
            >
                <h3 className="font-bold px-4">Cart</h3>
                <hr className="w-full text-grayish-blue " />
                {totalQuantity === 0 ?
                    <p className="self-center text-sm text-dark-grayish-blue font-bold mt-[5vh]">Your cart is empty.</p> :
                    <>
                        <section className="overflow-scroll flex flex-col gap-4">
                            {cart.map(product => (
                                <ProductCard
                                    thumbnail={product.thumb}
                                    productName={product.name}
                                    productPrice={product.price}
                                    quantity={product.quantity}
                                />
                            ))}
                        </section>
                        <Button className="mx-4">Checkout</Button>
                    </>
                }
            </div>
        </div>
    );
}
