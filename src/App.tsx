import Button from "./components/Button";
import Photos from "./components/Photos";

export default function App() {
  return (
    <main className="flex flex-col items-center">
      <Photos />
      <section className="m-4 flex flex-col gap-2">
        <h5 className="font-bold text-sm text-dark-grayish-blue">SNEAKER COMPANY</h5>
        <h2 className="font-bold text-2xl">Fall Limited Edition Sneakers</h2>
        <p className="text-dark-grayish-blue">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <div className="flex justify-between items-center my-4">
          <div className="flex items-center gap-[5vw]">
            <h2 className="font-bold text-2xl">$125.00</h2>
            <h3 className="bg-dark-blue text-white px-2 rounded-md">50%</h3>
          </div>
          <h3 className="text-dark-grayish-blue line-through font-bold">$250.00</h3>
        </div>

        <Button>Add to cart</Button>
      </section>
      <div className="text-(#fff)">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Fábio Moretão</a>.
      </div>
    </main>
  );
}
