import Button from "./components/Button"
import Photos from "./components/Photos"
import CartImg from "./assets/icon-cart.svg"
import { useState } from "react"
import Quantity from "./components/Quantity"

export default function App() {
  const [quantity, setQuantity] = useState(0)


  return (
    <main className="flex flex-col items-center">
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

        <Button img={CartImg}>Add to cart</Button>
      </section>


      <footer className="mt-12">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" className="text-blue-400">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Fábio Moretão</a>.
      </footer>
    </main>
  );
}
