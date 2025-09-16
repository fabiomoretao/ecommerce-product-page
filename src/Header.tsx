import Avatar from "./assets/image-avatar.png"
import Cart from "./components/Header/Cart"
import Logo from "./assets/logo.svg"
import Menu from "./components/Header/Menu";

export type HeaderProps = {
  cart: any[]; // ou use o type Product[]
  totalQuantity: number;
};

export default function Header({ cart, totalQuantity }: HeaderProps) {
  return (
    <header className="flex p-4 max-w-screen justify-around items-center">
      <Menu />
      <img src={Logo} className="h-5 mr-8" />
      <Cart cart={cart} totalQuantity={totalQuantity} />
      <img src={Avatar} className="w-8 border-1 border-transparent rounded-2xl hover:border-orange active:border-orange" />
    </header>
  );
}
