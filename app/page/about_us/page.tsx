import Footer from '@/components/footer'
import NavbarPage from '@/components/NavbarPage/NavbarPage'
import React from 'react'

export default function page() {
    return (
    <>
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <NavbarPage />
        <div className="max-w-4xl mx-auto p-6">
            <h2 className="text-2xl font-bold text-[#86BFCC] mb-5">
            Nuestra Historia
            </h2>
            <p className="mt-4 text-lg text-gray-600">
            En <span className='font-bold'>Inversión+</span>, entendemos lo desafiante que puede ser dar el primer paso hacia el mundo de las inversiones. 
            Creado por un grupo de estudiantes universitarios apasionados por las finanzas, nuestro objetivo es hacer que 
            el proceso de inversión sea accesible, comprensible y, lo más importante, relevante para los jóvenes como tú.
            </p><br />
            <p className="mt-4 text-lg text-gray-600">
            Nuestra historia comienza en las aulas universitarias, donde muchos de nosotros nos enfrentamos a la misma pregunta: 
            ¿Cómo puedo empezar a invertir? Sabíamos que la educación financiera era escasa y que la mayoría de los recursos disponibles
            no estaban diseñados para nosotros, los jóvenes. Fue entonces cuando decidimos crear Inversión+, una plataforma dedicada a 
            enseñar a estudiantes universitarios cómo funciona el mundo de las inversiones de una manera simple, clara y práctica.
            </p><br />
            <p className="mt-4 text-lg text-gray-600">
            Hoy, somos una comunidad en crecimiento de estudiantes y jóvenes profesionales que no solo aprenden sobre el mundo de las finanzas, 
            sino que también aplican esos conocimientos para tomar decisiones inteligentes y seguras sobre su futuro económico. Nuestro objetivo 
            es empoderar a las nuevas generaciones para que tengan el control de sus finanzas y puedan construir un futuro más seguro y próspero.
            </p><br />
            <div className="mt-10">
            <a
                href="/page/info"
                className="inline-block text-white bg-black hover:bg-[#86BFCC] font-semibold py-2 px-6 rounded-lg transition duration-300"
            >
                Únete a nosotros
            </a>
            </div>
        </div>
        <Footer />
        </div>
    </>
    )
}
