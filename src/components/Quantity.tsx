// Componente responsável por incrementar / decrementar a quantidade selecionada.

import Plus from "../assets/icon-plus.svg"
import Minus from "../assets/icon-minus.svg"

type QuantityProps = {
    quantity: number
    setQuantity: React.Dispatch<React.SetStateAction<number>>
}

export default function Quantity({ quantity, setQuantity }: QuantityProps) {
    return (
        <div className="flex justify-between p-4 items-center bg-pale-orange rounded-md">
            {/* Botão de diminuir quantidade.
                - Evita número negativo: setQuantity(prev => prev > 0 ? prev - 1 : 0)
                - Chama handleClick para animação.
                - Observação de acessibilidade: a imagem não tem alt; idealmente inserir alt="" ou alt adequado.
            */}
            <span
                className="cursor-pointer active:scale-110 hover:scale-105"
                onClick={() => setQuantity(prev => prev > 0 ? prev - 1 : 0)}
            >
                <img src={Minus} />
            </span>

            <p>{quantity}</p>

            <span
                className="cursor-pointer active:scale-110 hover:scale-105"
                onClick={() => setQuantity(prev => prev + 1)}
            >
                <img src={Plus} />
            </span>
        </div>
    )
}
