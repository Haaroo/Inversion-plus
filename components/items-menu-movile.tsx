import { Menu } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import Link from "next/link";

const ItemsMenuMobile = () => {
    return (
        <Popover>
            <PopoverTrigger>
                <Menu />
            </PopoverTrigger>
            <PopoverContent>
                <Link href="/page/info" className="block">Primeros pasos</Link>
                <Link href="/page/calculadora" className="block">Calculadora</Link>
                <Link href="/page/crypto" className="block">Criptomonedas</Link>
                <Link href="/categories/cafe-capsula" className="block">Articulos</Link>
            </PopoverContent>
        </Popover>
    );
}

export default ItemsMenuMobile;