import Image from 'next/image';

import { SidebarRoutes } from "../SidebarRoutes";

export function Sidebar() {
    return (
        <div className="h-screen">
            <div className="flex flex-col h-full border-r">
                <Image 
                    src='/logo2.png' 
                    alt='Logo' 
                    width={50} 
                    height={50} 
                    className="hover:scale-105 transition-all top-0 m-4"
                />
                <SidebarRoutes />
            </div>
        </div>
    )
}