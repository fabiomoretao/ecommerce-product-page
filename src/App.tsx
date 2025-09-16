// Arquivo principal que gerencia o estado do carrinho e passa a função addToCart para ProductPage.

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
  // Estado que guarda a lista de produtos no carrinho.
  const [cart, setCart] = useState<Product[]>([]);

  // Função que adiciona um produto ao carrinho.
  // - Proteção: se quantity <= 0, não faz nada.
  // - Se o produto já existir no carrinho, incrementa apenas a quantidade.
  // - Caso contrário, adiciona um novo item ao array.
  // useCallback para manter referência estável (útil quando passada a componentes filhos).
  const addToCart = useCallback((productToAdd: Product) => {
    if (productToAdd.quantity <= 0) return;

    console.log(productToAdd)

    setCart(prev => {
      const existing = prev.find(p => p.id === productToAdd.id);
      if (existing) {
        // Retorna novo array com a quantidade atualizada para o produto existente.
        return prev.map(p =>
          p.id === productToAdd.id ? { ...p, quantity: p.quantity + productToAdd.quantity } : p
        );
      }
      // Adiciona novo produto ao carrinho.
      return [...prev, productToAdd];
    });
  }, []);

  // Total de itens no carrinho — soma das quantidades.
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
