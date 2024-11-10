"use client"

import Footer from '@/components/footer'
import NavbarPage from '@/components/NavbarPage/NavbarPage'
import React from 'react'
import Image from 'next/image';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


export default function page() {
  return (
    <>
        <NavbarPage />
        <div className="max-w-4xl mx-auto p-6">
          <h1 className="text-3xl font-bold mb-4">Primeros pasos...</h1>
            <section className="mb-12">
            <h2 className="text-2xl font-semibold text-center text-gray-800 mb-8"><br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r to-cyan-400 from-indigo-600">La importancia de invertir durante la universidad</span>
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <p className="text-lg text-gray-700 mb-6">
              <span className="font-bold">Durante la etapa universitaria</span> es común que estemos concentrados en nuestra área de estudios, sin embargo, es
                importante entender que la universidad también es el momento perfecto para sentar las bases de nuestra vida adulta.
                Este periodo de nuestras vidas ofrece la oportunidad de comenzar con los hábitos de una salud financiera sólida a largo plazo.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Más seguido de lo que quisiéramos pasamos por alto la importancia de invertir, y quizá sea porque no se tienen el
                conocimiento o las herramientas necesarias para hacerlo. Pero la verdadera importancia de no subestimar las inversiones
                personales durante la vida universitaria es justamente lo escrito en el primer párrafo: sentar bases. Es por esto que a
                continuación te contaré sobre las inversiones perfectas para universitarios, teniendo en cuenta que lo importante no es
                obtener los mejores rendimientos sino empezar de inmediato y familiarizarnos con la mayor cantidad de herramientas posibles
                de cara a la independencia financiera.
              </p>
              </div>
            </section>
          <section className="mb-12">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className='text-2xl'>¿Qué es una inversión?</AccordionTrigger>
                <AccordionContent>
                    Una inversión es la acción de destinar recursos, generalmente dinero, a un
                  activo con la expectativa de obtener un retorno o beneficio en el futuro.
                  Esto puede incluir la compra de acciones, bonos, bienes raíces, o incluso
                  iniciar un negocio.
                  <Image 
                                        src='/pageInversion/inv1.png' 
                                        alt='par1' 
                                        width={300}
                                        height={300}
                                        className="object-cover rounded-lg mb-6 items-center relative my-8 mx-auto block"
                                    />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          <section className="mb-12">
            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger className='text-2xl'>¿Por qué debemos invertir?</AccordionTrigger>
                  <AccordionContent>
                      Una inversión es la acción de destinar recursos, generalmente dinero, a un
                    activo con la expectativa de obtener un retorno o beneficio en el futuro.
                    Esto puede incluir la compra de acciones, bonos, bienes raíces, o incluso
                    iniciar un negocio.
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
                  </AccordionContent>
                </AccordionItem>
              </Accordion>            
          </section>
          <section className='mb-12'>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger className='text-2xl'>Tipos de inversiones</AccordionTrigger>
                  <AccordionContent>
                      Una inversión es la acción de destinar recursos, generalmente dinero, a un
                    activo con la expectativa de obtener un retorno o beneficio en el futuro.
                    Esto puede incluir la compra de acciones, bonos, bienes raíces, o incluso
                    iniciar un negocio.
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
                  </AccordionContent>
                </AccordionItem>
                </Accordion>  
            </section>
        </div>
        <Footer />
    </>
  )
}
