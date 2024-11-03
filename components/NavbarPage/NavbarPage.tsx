"use client"
import { BaggageClaim, Heart, ShoppingCart, User,LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import MenuList from "@/components/menu-list";
import ItemsMenuMobile from "@/components/items-menu-movile";
import { useCart } from "@/components/hooks/use-cart";
import { useLovedProducts } from "@/components/hooks/use-love-products";
import Image from 'next/image';

const NavbarPage = () => {
    const router = useRouter()
    const cart = useCart()
    const { lovedItems } = useLovedProducts()

    return (
        <div className="flex items-center justify-between p-4 mx-auto cursor-pointer sm:max-w-4xl md:max-w-6xl">
            <Image 
                            src='/logo.png' 
                            alt='Logo' 
                            width={250} 
                            height={150} 
                            className="transition-all"
                        />
            <div className="items-center justify-between hidden sm:flex">
                <MenuList />
            </div>
            <div className="flex sm:hidden">
                <ItemsMenuMobile />
            </div>
            <div className="flex items-center justify-between gap-2 sm:gap-7">
                <Heart
                    strokeWidth="1"
                    className={`cursor-pointer 
                    ${lovedItems.length > 0 && 'fill-black dark:fill-white'}`}
                    onClick={() => router.push("/loved-products")} />
                <LogOut strokeWidth={1} className="cursor-pointer" onClick={() => router.push("/")}/>
            </div>
        </div>
    );
}

export default NavbarPage;