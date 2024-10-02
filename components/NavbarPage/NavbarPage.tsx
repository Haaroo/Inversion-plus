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
                            src='/logo.svg' 
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
                {cart.items.length === 0 ?
                    <ShoppingCart strokeWidth="1"
                        className="cursor-pointer"
                        onClick={() => router.push("/cart")}
                    />
                    : (
                        <div className="flex gap-1 cursor-pointer" onClick={() => router.push("/cart")}>
                            <BaggageClaim strokeWidth={1} className="cursor-pointer" />
                            <span>{cart.items.length}</span>
                        </div>
                    )}


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