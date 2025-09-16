// App.tsx
import { useCallback, useState } from "react";
import Header from "./Header";
import ProductPage from "./ProductPage";

type Product = {
  id: string;
  name: string;
  price: number;
  thumb?: string;
  quantity: number;
};

export default function App() {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = useCallback((productToAdd: Product) => {
    if (productToAdd.quantity <= 0) return;

    console.log(productToAdd)

    setCart(prev => {
      const existing = prev.find(p => p.id === productToAdd.id);
      if (existing) {
        return prev.map(p =>
          p.id === productToAdd.id ? { ...p, quantity: p.quantity + productToAdd.quantity } : p
        );
      }
      return [...prev, productToAdd];
    });
  }, []);

  const totalQuantity = cart.reduce((s, p) => s + p.quantity, 0);

  return (
    <>
      <Header cart={cart} totalQuantity={totalQuantity} />
      <ProductPage addToCart={addToCart} />
      <footer className="mt-12">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" className="text-blue-400">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Fábio Moretão</a>.
      </footer>
    </>
  );
}

