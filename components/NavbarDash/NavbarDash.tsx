import {InputDash} from "@/components/ui/inputDash";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Search } from "lucide-react"
import Image from 'next/image';
import { SidebarRoutes } from "../SidebarRoutes"

const NavbarDash =() =>{
  return (
    <nav className="flex items-center px-2 gap-x-4 md:px-6 
        justify-between w-full bg-background border-b h-20">
            <div className="block xl:hidden">
                <Sheet>
                    <SheetTrigger className="flex items-center">
                        <Menu />
                    </SheetTrigger>
                    <SheetContent side="left">
                        <SidebarRoutes />
                    </SheetContent>
                </Sheet>
            </div>
            <div className="relative w-[300px]">
                <InputDash placeholder="Search..." className="rounded-lg" />
                <Search strokeWidth={1} className="absolute top-2 right-2" />
            </div>
            <div className="flex gap-x-2 items-center">
            <Image 
                    src='/logo.svg' 
                    alt='Logo' 
                    width={250} 
                    height={150} 
                    className="hover:scale-105 transition-all"
                />
            </div>
        </nav>
  )
}
export default NavbarDash;
