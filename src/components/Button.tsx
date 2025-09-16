type ButtonProps = {
  img?: string
  children: string
  className?: string
  onclick?: () => void
}

export default function Button({ img, children, onclick, className }: ButtonProps) {

  return (
    <span
      className={`flex bg-orange py-2 items-center justify-center gap-4 rounded-md hover:bg-pale-orange cursor-pointer ${className} active:scale-90 active:bg-pale-orange select-none`}
      onClick={onclick}
    >
      <img src={img} className="brightness-0" />
      <p className="font-bold text-black">{children}</p>
    </span>
  )
}
