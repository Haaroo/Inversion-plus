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
                <Link href="/categories/cafe-molido" className="block">Libro</Link>
                <Link href="/categories/cafe-grano" className="block">Audio Libro</Link>
                <Link href="/categories/cafe-capsula" className="block">Revistas</Link>
            </PopoverContent>
        </Popover>
    );
}

export default ItemsMenuMobile;