import Plus from "../assets/icon-plus.svg"
import Minus from "../assets/icon-minus.svg"

type QuantityProps = {
    quantity: number
    setQuantity: React.Dispatch<React.SetStateAction<number>>
}

export default function Quantity({ quantity, setQuantity }: QuantityProps) {
    const handleClick = (e: React.MouseEvent<HTMLSpanElement>) => {
        const button = e.currentTarget
        button.classList.add("scale-130")
        setTimeout(() => {
            button.classList.remove("scale-130")
        }, 150)
    }
    return (
        <div className="flex justify-between p-4 items-center bg-pale-orange rounded-md">
            <span
                className="cursor-pointer"
                onClick={(e) => {
                    setQuantity(prev => prev > 0 ? prev - 1 : 0)
                    handleClick(e)
                }}
            >
                <img src={Minus} />
            </span>
            <p>{quantity}</p>
            <span
                className="cursor-pointer"
                onClick={(e) => {
                    setQuantity(prev => prev + 1)
                    handleClick(e)
                }}
            >
                <img src={Plus} />
            </span>
        </div>
    )
}