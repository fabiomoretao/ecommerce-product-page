import { useState } from "react";
import Button from "./components/Button";
import Photos from "./components/Photos";
import Quantity from "./components/Quantity";
import CartImg from "./assets/icon-cart.svg"

type ProductPageProps = {
    addToCart: (product: { id: string; name: string; price: number; quantity: number; thumb?: string }) => void;
}

export default function ProductPage({ addToCart }: ProductPageProps) {
    const [quantity, setQuantity] = useState(0)

    const handleAdd = () => {
        addToCart({
            id: "sneaker-1",
            name: "Fall Limited Edition Sneakers",
            price: 125,
            quantity,
            thumb: "src/assets/image-product-1-thumbnail.jpg"
        })
        setQuantity(0)
    }
    return (
        <main className="flex flex-col items-center" >
            <Photos />
            <section className="m-[5vw] flex flex-col gap-4">
                <h5 className="font-bold text-sm text-dark-grayish-blue">SNEAKER COMPANY</h5>
                <h2 className="font-bold text-2xl">Fall Limited Edition Sneakers</h2>
                <p className="text-dark-grayish-blue">
                    These low-profile sneakers are your perfect casual wear companion.
                    Featuring a durable rubber outer sole, they’ll withstand everything
                    the weather can offer.
                </p>
                <div className="flex justify-between items-center my-2">
                    <div className="flex items-center gap-[5vw]">
                        <h2 className="font-bold text-2xl">$125.00</h2>
                        <h3 className="bg-dark-blue text-white px-2 rounded-md">50%</h3>
                    </div>
                    <h3 className="text-dark-grayish-blue line-through font-bold">$250.00</h3>
                </div>

                <Quantity quantity={quantity} setQuantity={setQuantity} />

                <Button img={CartImg} onclick={handleAdd}>Add to cart</Button>
            </section>


        </main >
    )
}