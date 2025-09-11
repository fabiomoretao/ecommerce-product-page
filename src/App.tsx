import Button from "./components/Button";
import Photos from "./components/Photos";

export default function App() {
  return (
    <main className="flex flex-col items-center">
      <Photos />
      <section>
        <h5>SNEAKER COMPANY</h5>
        <h2>Fall Limited Edition Sneakers</h2>
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything the
          weather can offer.
        </p>
        <div>
          <h2>$125.00</h2>
          <h3>50%</h3>
          <h3>$250.00</h3>
        </div>

        <Button text='Add to cart' />
      </section>
      <div className="text-(#fff)">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
        >Frontend Mentor</a>. Coded by <a href="#">Fábio Moretão</a>.
      </div>
    </main>
  )
}