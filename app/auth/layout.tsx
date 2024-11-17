'use client'

import {FC,ReactNode} from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FiArrowLeftCircle  } from "react-icons/fi";

interface AuthLayoutProps{
    children: ReactNode
}

const AuthLayout: FC<AuthLayoutProps> = ({children}) => {
    const router = useRouter();
    return (
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <main className='min-h-screen grid grid-cols-1 lg:grid-cols-2 p-5 lg:p-8'>
            <section className='hidden lg:flex h-full flex-col items-center justify-center gap-y-5 bg-[#99b4b2] rounded-2xl'>
                <div className="absolute top-8 left-8 p-4 flex items-center space-x-2">
                    <FiArrowLeftCircle  className="text-[#061429] text-2xl cursor-pointer" onClick={() => { router.push('/'); }} />
                    <p onClick={() => { router.push('/'); }} className="text-[#061429] cursor-pointer text-xl">
                        Regresar al inicio...
                    </p>
                </div>
                <div className='relative w-96 h-96'>
                    <Image src='/wallpaper.svg' alt='Wallpaper' fill/>
                </div>
                <div>
                    <h3 className='text[#061429] text-2xl font-bold text-center mb-5'>¡Bienvenido a Inversion+!
                        <br/> Inversión+: Aprende hoy, invierte mañana.
                    </h3>
                        <p className='text-[#061429] text-xl font-semibold text-center'>Inicia sesión y empodera tu futuro con Inversión+.</p>
                        <p className='text-[#061429] text-xl font-semibold text-center'>Ingresa y da el primer paso hacia tu futuro financiero.</p>
                </div>
            </section>
            <div>
                {children}
            </div>       
        </main>
        </div>
    );
};

export default  AuthLayout;

