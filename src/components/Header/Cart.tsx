import { useState } from "react";
import CartImg from "../../assets/icon-cart.svg";
import ProductCard from "./ProductCard";
import thumb from "../../assets/image-product-1-thumbnail.jpg";
import Button from "../Button";

export default function Cart() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <img
                src={CartImg}
                onClick={() => { setIsOpen((prev) => !prev) }}
                className={`cursor-pointer hover:scale-110 ${isOpen ? 'scale-115' : ''}`}
            />
            <div
                className={`flex flex-col gap-4 absolute grow bg-white top-[7vh] left-[5vw] min-h-[30vh] max-h-[35vh] w-[90vw] rounded-lg py-4 transition-all duration-500 ease-in-out shadow-md
          ${isOpen ? "opacity-100 z-20" : "opacity-0 -translate-y-10 invisible"}
        `}
            >
                <h3 className="font-bold px-4">Cart</h3>
                <hr className="w-full text-grayish-blue " />
                <section className="overflow-scroll flex flex-col gap-4">
                    <ProductCard
                        thumbnail={thumb}
                        productName="tenisaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
                        productPrice={20}
                        quantity={2}
                    />
                    <ProductCard
                        thumbnail={thumb}
                        productName="tenisaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
                        productPrice={20}
                        quantity={2}
                    />
                    <ProductCard
                        thumbnail={thumb}
                        productName="tenisaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
                        productPrice={20}
                        quantity={2}
                    />
                </section>
                <Button className="mx-4">Checkout</Button>
            </div>
        </div>
    );
}
