import Image from 'next/image';

import { SidebarRoutes } from "../SidebarRoutes";

export function Sidebar() {
    return (
        <div className="h-screen bg-primary">
            <div className="flex flex-col h-full border-r">
                <p className='text-3xl text-center mt-2 text-white font-semibold border-b h-20'>Bienvenido!</p>
                <SidebarRoutes />
            </div>
        </div>
    )
}