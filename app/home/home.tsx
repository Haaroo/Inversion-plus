'use client'

import React from 'react'
import Image from 'next/image';

const  HomePage = () => {
    return (
        <main className='min-h-max grid grid-cols-1 lg:grid-cols-1 p-10 lg:p-8 '>
                
            <section className='lg:flex h-full flex-col items-center justify-center gap-y-5 bg-[#99b4b2] rounded-2xl'>
                        <h1 className="text-4xl font-extrabold text-[#061429] mb-4 text-center mt-5">
                            Bienvenido a Inversión+: Tu camino hacia una inversión segura comienza aquí.
                        </h1>
                        <p className="text-lg text-[#061429] mb-6 text-center">
                            Explora una vasta colección de recursos de inversión desde la comodidad de tu hogar.
                        </p>
                        <Image 
                        src='/books.svg' 
                        alt='book' 
                        width={450}
                        height={450}
                        className="object-cover rounded-lg mb-6 flex items-center relative"
                        />
                        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-5">
                            <a
                            href="/auth/login"
                            className="text-center bg-[#547573] text-white px-6 py-3 rounded-lg font-semibold text-lg transition-transform transform hover:scale-105">
                                Inicia sesión
                            </a>
                            <a
                            href="/home/about"
                            className="text-center bg-[#547573] text-white px-6 py-3 rounded-lg font-semibold text-lg transition-transform transform hover:scale-105">
                                Más sobre nosotros
                            </a>
                        </div>
            </section>
        </main>
    )
}

export default HomePage;
