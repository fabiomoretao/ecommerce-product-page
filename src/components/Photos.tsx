// Componente que renderiza um carrossel simples de imagens do produto.
// - Pré-carrega imagens no useEffect para evitar "flash" quando a imagem for exibida.
// - Controla índice atual com estado local e permite navegar com botões Prev/Next.

import img1 from "../assets/image-product-1.jpg"
import img2 from "../assets/image-product-2.jpg"
import img3 from "../assets/image-product-3.jpg"
import img4 from "../assets/image-product-4.jpg"
import preview from "../assets/icon-previous.svg"
import next from "../assets/icon-next.svg"
import { useEffect, useState } from "react"

const photos: string[] = [img1, img2, img3, img4]

export default function Photos() {
  const [index, setIndex] = useState<number>(0)

  // Pré-carrega todas as imagens ao montar o componente para melhorar a experiência de troca de imagem.
  useEffect(() => {
    photos.forEach(src => {
      const img = new Image()
      img.src = src
    })
  }, [])

  return (
    <div className="w-screen relative flex items-center h-[30vh] justify-between">

      <button
        type="button"
        aria-label="Previous photo"
        className="ml-4 pl-2 flex items-center bg-white h-8 w-8 rounded-2xl active:-translate-y-2 active:scale-105 transition-transform duration-150"
        onClick={() => setIndex(prev => (prev - 1 + photos.length) % photos.length)}
      >
        <img src={preview} />
      </button>

      {/* Renderiza todas as imagens, controlando visibilidade via classes CSS (opacity + z-index). 
          - Mantém todas no DOM para permitir transição suave entre elas.
          - `loading={i === index ? "eager" : "lazy"}`: apenas a imagem visível é carregada prioritariamente.
      */}
      {photos.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Product ${i + 1}`}
          loading={i === index ? "eager" : "lazy"}
          className={
            `object-cover object-top absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out pointer-events-none ${i === index ? "opacity-100 -z-10" : "opacity-0 -z-20"}`
          }
        />
      ))}

      <button
        type="button"
        aria-label="Next photo"
        className="mr-4 flex items-center justify-center bg-white h-8 w-8 rounded-2xl active:-translate-y-2 active:scale-105 transition-transform duration-150"
        onClick={() => setIndex(prev => (prev + 1) % photos.length)}
      >
        <img src={next} />
      </button>
    </div>
  )
}
