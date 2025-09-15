type ButtonProps = {
  img?: string
  children: string
  className?: string
  onclick?: () => void
}

export default function Button({ img, children, onclick, className }: ButtonProps) {

  const handleClick = (e: React.MouseEvent<HTMLSpanElement>) => {
    const button = e.currentTarget
    button.classList.add("scale-85")
    button.classList.add("bg-pale-orange")
    setTimeout(() => {
      button.classList.remove("scale-85")
      button.classList.remove("bg-pale-orange")
    }, 150)
    if (onclick) onclick()
  }

  return (
    <span
      className={`flex bg-orange py-2 items-center justify-center gap-4 rounded-md hover:bg-pale-orange cursor-pointer ${className}`}
      onClick={handleClick}
    >
      <img src={img} className="brightness-0" />
      <p className="font-bold text-black">{children}</p>
    </span>
  )
}
