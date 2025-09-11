import { useState } from "react"
import CartImg from "../../assets/icon-cart.svg"
import ProductCard from "./ProductCard"
import thumb from "../../assets/image-product-1-thumbnail.jpg";
import Button from "../Button";

export default function Cart() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div>
            <img src={CartImg} onClick={() => setIsOpen(prev => !prev)} className="cursor-pointer" />
            <div
                className={`
          absolute flex flex-col gap-4 grow bg-white top-[10vh] left-[5vw]
          min-h-[30vh] max-h-[35vh] w-[90vw] rounded-lg py-4
          transition-all duration-500 ease-in-out
          ${isOpen ? "opacity-100" : "opacity-0 -translate-y-10 invisible"}
        `}
            >
                <h3 className="font-bold px-4">Cart</h3>
                <hr className="w-full text-grayish-blue " />
                <section className="overflow-scroll flex flex-col gap-4">
                    <ProductCard thumbnail={thumb} productName="tenisaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" productPrice={20} quantity={2} />
                    <ProductCard thumbnail={thumb} productName="tenisaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" productPrice={20} quantity={2} />
                    <ProductCard thumbnail={thumb} productName="tenisaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" productPrice={20} quantity={2} />
                </section>
                <Button>Checkout</Button>
                {/* {product ?
                    product
                    :
                    <p className="self-center font-bold text-dark-grayish-blue text-sm mt-[5vh]">
                        Your cart is empty.
                    </p>
                } */}
            </div>
        </div>
    )
}