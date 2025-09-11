import Avatar from "../../assets/image-avatar.png"
import Cart from "./Cart"
import Logo from "../../assets/logo.svg"
import Menu from "../../assets/icon-menu.svg"

export default function Header() {
    return (
        <header className="flex p-4 max-w-screen justify-around items-center">
            <img src={Menu} />
            <img src={Logo} className="h-5 mr-8 self-start" />
            <Cart />
            <img src={Avatar} className="w-6" />
        </header>
    )
}