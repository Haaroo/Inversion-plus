"use client"

import Footer from '@/components/footer'
import NavbarPage from '@/components/NavbarPage/NavbarPage'
import Image from 'next/image';
import { useRouter } from "next/navigation";
import React, { useState } from 'react'

export default function page() {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false); 
    return (
        <>
            <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
            <NavbarPage />
            <div className="max-w-4xl mx-auto p-6 mb-10 mt-10">
                <h1 className="text-4xl text-gray-600 sm:text-5xl">
                    Sobre Nosotros
                </h1>
                <p className="mt-4 text-xl text-black">
                    Conoce al equipo detrás de nuestra librería digital y nuestra misión para ofrecerte la mejor experiencia de lectura.
                </p>
                <section className="mt-5">
                    <h2 className="text-3xl font-semibold text-gray-700 text-center">
                        Nuestro Equipo
                    </h2>
                    <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
                        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                            <Image 
                                src='/participante4.png' 
                                alt='par4' 
                                width={800}
                                height={800}
                                className="object-cover rounded-lg mb-6 flex items-center relative"
                                />
                            <h3 className="mt-4 text-xl font-bold text-gray-800">Erasmo Gabriel Martinez Soltero</h3>
                            <p className="text-gray-600">Asesor</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                            <Image 
                                src='/participante1.png' 
                                alt='par1' 
                                width={800}
                                height={800}
                                className="object-cover rounded-lg mb-6 flex items-center relative"
                                />
                            <h3 className="mt-4 text-xl font-bold text-gray-800">Jose Emmanuel Vazquez Haro</h3>
                            <p className="text-gray-600">Intgrante 1</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                            <Image 
                                src='/participante3.png' 
                                alt='par3' 
                                width={800}
                                height={800}
                                className="object-cover rounded-lg mb-6 flex items-center relative"
                                />
                            <h3 className="mt-4 text-xl font-bold text-gray-800">Roberto Montoya Vargas</h3>
                            <p className="text-gray-600">Integrante 2</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                            <Image 
                                src='/participante2.png' 
                                alt='par2' 
                                width={800}
                                height={800}
                                className="object-cover rounded-lg mb-6 flex items-center relative"
                                />
                            <h3 className="mt-4 text-xl font-bold text-gray-800">Christopher Bernabe Perez Elvira</h3>
                            <p className="text-gray-600">Integrante 3</p>
                        </div>
                    </div>
                </section>
                <section className="mt-5 text-center m-5">
                    <h2 className="text-3xl font-semibold text-gray-500">
                        Ponte en Contacto
                    </h2>
                    <p className="mt-4 text-lg text-gray-500">
                        ¿Tienes preguntas o deseas colaborar con nosotros? No dudes en contactarnos.
                    </p>
                    <li className="mt-6 inline-block px-6 py-5 text-white bg-secondary rounded-lg hover:bg-gray-500 cursor-pointer" onClick={() => {setIsOpen(false); router.push('/home/contact');}}>
                        <a>Enviar correo</a>
                        <span className="absolute left-0 bottom-0 w-full h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                    </li>  
                </section>
            </div>
            <Footer />
            </div>
        </>
    )
}
