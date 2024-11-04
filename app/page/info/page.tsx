"use client"

import Footer from '@/components/footer'
import NavbarPage from '@/components/NavbarPage/NavbarPage'
import React from 'react'
import Image from 'next/image';

export default function page() {
  return (
    <>
        <NavbarPage />
        <div className="max-w-4xl mx-auto p-6">
          <h1 className="text-3xl font-bold mb-4">Información sobre Inversiones</h1>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-2">¿Qué es una inversión?</h2>
            <p>
              Una inversión es la acción de destinar recursos, generalmente dinero, a un
              activo con la expectativa de obtener un retorno o beneficio en el futuro.
              Esto puede incluir la compra de acciones, bonos, bienes raíces, o incluso
              iniciar un negocio.
            </p>
            <Image 
                                        src='/pageInversion/inv1.png' 
                                        alt='par1' 
                                        width={300}
                                        height={300}
                                        className="object-cover rounded-lg mb-6 items-center relative my-8 mx-auto block"
                                    />
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-2">¿Por qué debemos invertir?</h2>
            <ul className="list-disc list-inside">
              <li>Generar riqueza: Las inversiones pueden ayudar a aumentar tu capital con el tiempo.</li>
              <li>Proteger el dinero contra la inflación: Invertir puede ayudarte a que tu dinero crezca más rápido que la inflación.</li>
              <li>Crear ingresos pasivos: Algunas inversiones pueden proporcionar un flujo constante de ingresos.</li>
              <li>Lograr objetivos financieros: Invertir te puede ayudar a alcanzar metas a largo plazo, como comprar una casa o planificar tu jubilación.</li>
            </ul>
            <Image 
                                        src='/pageInversion/inv2.png' 
                                        alt='par1' 
                                        width={300}
                                        height={300}
                                        className="object-cover rounded-lg mb-6 items-center relative my-8 mx-auto block"
                                    />
          </section>

          <section className='mb-12'>
            <h2 className="text-2xl font-semibold mb-2">Tipos de inversiones</h2>
            <p>
              Existen varios tipos de inversiones, cada una con su propio nivel de riesgo y potencial de retorno:
            </p>
            <ul className="list-disc list-inside">
              <li>
                <strong>Acciones:</strong> Participaciones en una empresa. El valor puede fluctuar, pero ofrecen el potencial de altos retornos.
              </li>
              <li>
                <strong>Bonos:</strong> Préstamos a gobiernos o empresas. Generalmente menos arriesgados que las acciones, pero con retornos más bajos.
              </li>
              <li>
                <strong>Bienes raíces:</strong> Inversiones en propiedades. Pueden generar ingresos de alquiler y apreciación del valor.
              </li>
              <li>
                <strong>Fondos de inversión:</strong> Agrupan dinero de varios inversores para comprar una variedad de activos, ofreciendo diversificación.
              </li>
              <li>
                <strong>Criptomonedas:</strong> Activos digitales. Muy volátiles, pero pueden ofrecer altos retornos si se manejan correctamente.
              </li>
            </ul>
            <Image 
                                        src='/pageInversion/inv3.png' 
                                        alt='par1' 
                                        width={300}
                                        height={300}
                                        className="object-cover rounded-lg mb-6 items-center relative my-8 mx-auto block"
                                    />
          </section>
        </div>
        <Footer />
    </>
  )
}
