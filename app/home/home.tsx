'use client'

import React from 'react'
import Image from 'next/image';

const  HomePage = () => {
    return (
    <div className="pt-20">
    <main className='min-h-screen grid grid-cols-1 lg:grid-cols-1 p-10 lg:p-8'>
        <section className='lg:flex h-full flex-col items-center justify-center gap-y-5 bg-primary rounded-2xl'>
                    <h1 className="text-4xl font-extrabold text-white mb-4 text-center">
                        Bienvenido a nuestra Biblioteca Digital
                    </h1>
                    <p className="text-lg text-white/85 mb-6 text-center">
                        Explora una vasta colección de libros y recursos desde la comodidad de tu hogar.
                    </p>
                    <Image 
                    src='/books.svg' 
                    alt='book' 
                    width={800}
                    height={800}
                    className="object-cover rounded-lg mb-6 flex items-center relative"
                    />
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a
                        href="/auth/login"
                        className="text-center bg-black/80 text-white px-6 py-3 rounded-lg font-semibold text-lg transition-transform transform hover:scale-105">
                            Inicia sesión
                        </a>
                        <a
                        href="/home/about"
                        className="text-center bg-secondary text-white px-6 py-3 rounded-lg font-semibold text-lg transition-transform transform hover:scale-105">
                            Más sobre nosotros
                        </a>
                    </div>
        </section>
    </main>
    </div>
    )
}

export default HomePage;
