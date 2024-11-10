import Footer from '@/components/footer'
import NavbarPage from '@/components/NavbarPage/NavbarPage'
import React from 'react'

export default function page() {
    return (
        <>
            <NavbarPage />
            <div className="max-w-4xl mx-auto p-6 mb-10 mt-10">
                <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl">
                Nuestros Valores y Compromiso
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                En Inversión+, no solo nos importa enseñar cómo invertir. Creemos que la educación financiera debe estar basada en principios sólidos que promuevan el crecimiento personal y colectivo. Por eso, nuestros valores guían cada uno de nuestros programas, recursos y actividades, asegurando que nuestros participantes reciban una formación integral, ética y responsable.
                </p>

                <div className="mt-10 space-y-8">
                <div className="flex items-center justify-start space-x-4">
                    <span className="text-blue-600 text-3xl">✔</span>
                    <div>
                    <h3 className="text-xl font-semibold text-gray-900">Educación Accesible</h3>
                    <p className="text-gray-600">
                        Creemos que la educación financiera debe estar al alcance de todos. Nos comprometemos a ofrecer recursos educativos claros, prácticos y gratuitos o a precios accesibles para estudiantes universitarios de todo el mundo.
                    </p>
                    </div>
                </div>

                <div className="flex items-center justify-start space-x-4">
                    <span className="text-blue-600 text-3xl">✔</span>
                    <div>
                    <h3 className="text-xl font-semibold text-gray-900">Transparencia</h3>
                    <p className="text-gray-600">
                        La confianza es clave en cualquier relación. Nos aseguramos de que toda la información y los consejos financieros que ofrecemos sean claros, verificables y fáciles de entender, sin ventas ocultas ni intereses ocultos.
                    </p>
                    </div>
                </div>

                <div className="flex items-center justify-start space-x-4">
                    <span className="text-blue-600 text-3xl">✔</span>
                    <div>
                    <h3 className="text-xl font-semibold text-gray-900">Responsabilidad Social</h3>
                    <p className="text-gray-600">
                        Sabemos que las decisiones financieras afectan no solo a la persona, sino también a la comunidad. Por ello, promovemos inversiones responsables que no solo busquen el beneficio económico, sino que también respeten principios éticos y sociales.
                    </p>
                    </div>
                </div>

                <div className="flex items-center justify-start space-x-4">
                    <span className="text-blue-600 text-3xl">✔</span>
                    <div>
                    <h3 className="text-xl font-semibold text-gray-900">Colaboración y Comunidad</h3>
                    <p className="text-gray-600">
                        Creemos que el aprendizaje es más valioso cuando se hace en comunidad. Fomentamos un ambiente colaborativo donde los participantes puedan compartir conocimientos, dudas y experiencias, ayudándose mutuamente a crecer.
                    </p>
                    </div>
                </div>

                <div className="flex items-center justify-start space-x-4">
                    <span className="text-blue-600 text-3xl">✔</span>
                    <div>
                    <h3 className="text-xl font-semibold text-gray-900">Compromiso con el Futuro</h3>
                    <p className="text-gray-600">
                        Invertir no es solo una acción financiera, es una inversión en el futuro. Nos comprometemos a enseñar a nuestros participantes cómo tomar decisiones informadas que les ayuden a construir un futuro más seguro, próspero y sostenible.
                    </p>
                    </div>
                </div>
                </div>

                <div className="mt-10">
                <a
                    href="#"
                    className="inline-block text-white bg-blue-600 hover:bg-blue-700 font-semibold py-2 px-6 rounded-lg transition duration-300"
                >
                    Descubre más sobre nuestros valores
                </a>
                </div>
            </div>
            <Footer />
        </>
  )
}
