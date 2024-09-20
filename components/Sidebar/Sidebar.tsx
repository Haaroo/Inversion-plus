import Image from 'next/image';

import { SidebarRoutes } from "../SidebarRoutes";

export function Sidebar() {
    return (
        <div className="h-screen bg-primary">
            <div className="flex flex-col h-full border-r">
                <p className='text-3xl text-center mt-5 text-white font-semibold'>Bienvenido!</p>
                <SidebarRoutes />
            </div>
        </div>
    )
}