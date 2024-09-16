'use client'

import { useRouter } from "next/navigation";
import React from 'react'
import Image from 'next/image';

const  HomePage = () => {
    const router = useRouter();
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-6">
      {/* Contenedor principal */}
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-3xl w-full text-center">
        {/* Título */}
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
          Bienvenido a nuestra Biblioteca Digital
        </h1>
        {/* Subtítulo */}
        <p className="text-lg text-gray-600 mb-6">
          Explora una vasta colección de libros y recursos desde la comodidad de tu hogar.
        </p>
        {/* Imagen de bienvenida */}
        <Image 
                    src='/books.svg' 
                    alt='book' 
                    width={800}
                    height={800}
                    className="object-cover rounded-lg mb-6 flex items-center relative"
                />
        {/* Botones */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/auth/login"
            className="bg-primary text-white px-6 py-3 rounded-lg font-semibold text-lg transition-transform transform hover:scale-105"
          >
            Inicia sesion
          </a>
          <a
            href="/home/contact"
            className="bg-secondary text-white px-6 py-3 rounded-lg font-semibold text-lg transition-transform transform hover:scale-105"
          >
            Más sobre Nosotros
          </a>
        </div>
      </div>
    </div>
    )
}

export default HomePage;
