'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import Image from 'next/image';

const NavbarHome = () => {
    const [isOpen, setIsOpen] = useState(false); 
    const router = useRouter();

    return (
        <div className="w-full h-full relative">
            <header className="top-0 left-0 w-full z-50 flex justify-between items-center text-black py-6 px-8 md:px-32 bg-white drop-shadow-md">         
                <Image 
                    src='/logo.png' 
                    alt='Logo' 
                    width={250} 
                    height={150} 
                    className="hover:scale-105 transition-all"
                />
                <button 
                    className="xl:hidden flex items-center" 
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg 
                        className="w-6 h-6"
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>

                <div className={`fixed inset-0 z-50 bg-white bg-opacity-10 backdrop-blur transform transition-transform duration-300 ease-in-out xl:relative xl:flex xl:items-center xl:gap-12 xl:bg-transparent xl:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                    <button 
                        className="absolute top-4 right-6 text-gray-800 xl:hidden" 
                        onClick={() => setIsOpen(false)}
                    >
                        <svg 
                            className="w-6 h-6"
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24" 
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>

                    <ul className="flex flex-col xl:flex-row xl:space-x-12 xl:items-center xl:gap-12 p-6 xl:p-0 text-xl">
                        <li className="relative group text-gray-800 hover:text-secondary cursor-pointer p-4 xl:p-0" onClick={() => {setIsOpen(false); router.push('/');}}>
                            <a>Inicio</a>
                            <span className="absolute left-0 bottom-0 w-full h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                        </li>
                        <li className="relative group text-gray-800 hover:text-secondary cursor-pointer p-4 xl:p-0" onClick={() => {setIsOpen(false); router.push('/home/contact');}}>
                            <a>Contacto</a>
                            <span className="absolute left-0 bottom-0 w-full h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                        </li>
                        <li className="relative group text-gray-800 hover:text-secondary cursor-pointer p-4 xl:p-0" onClick={() => {setIsOpen(false); router.push('/home/about');}}>
                            <a>Sobre nosotros</a>
                            <span className="absolute left-0 bottom-0 w-full h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                        </li>
                        <li className="relative group text-gray-800 hover:text-secondary cursor-pointer p-4 xl:p-0" onClick={() => {setIsOpen(false); router.push('/auth/login');}}>
                            <a>Iniciar sesión</a>
                            <span className="absolute left-0 bottom-0 w-full h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                        </li>
                    </ul>
                </div>
            </header>
        </div>
    );
};

export default NavbarHome;
