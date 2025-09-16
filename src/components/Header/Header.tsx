import Avatar from "../../assets/image-avatar.png"
import Cart from "./Cart"
import Logo from "../../assets/logo.svg"
import Menu from "./Menu";


export default function Header() {
  return (
    <header className="flex p-4 max-w-screen justify-around items-center">
      <Menu />
      <img src={Logo} className="h-5 mr-8" />
      <Cart />
      <img src={Avatar} className="w-8 border-1 border-transparent rounded-2xl hover:border-orange active:border-orange" />
    </header>
  );
}
