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
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <NavbarPage />
        <div className="max-w-4xl mx-auto p-6">
          <h1 className="text-3xl font-bold mb-4 text-gray-500">Primeros pasos...</h1>
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
                <AccordionContent className='text-lg'>
                La inversión es el acto de destinar recursos, generalmente dinero, con el objetivo de generar ganancias o beneficios en el futuro. 
                En lugar de gastar esos recursos de manera inmediata, una inversión los coloca en activos, como acciones, bonos, bienes raíces o negocios, 
                esperando que con el tiempo estos aumenten su valor o generen ingresos. Es una forma de hacer crecer el capital a través de rendimientos, 
                que pueden ser pagos de intereses, dividendos, o una apreciación en el valor del activo.
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
                  <AccordionContent className='text-lg'>
                      Una inversión es la acción de destinar recursos, generalmente dinero, a un
                    activo con la expectativa de obtener un retorno o beneficio en el futuro.
                    Esto puede incluir la compra de acciones, bonos, bienes raíces, o incluso
                    iniciar un negocio.
                    <ul className="list-disc list-inside mt-5">
                      <li>Creación de riqueza: La inversión permite que el dinero trabaje para ti, incrementando tu patrimonio con el tiempo. Con el interés compuesto, 
                        las inversiones pueden crecer de manera exponencial si se reinvierten las ganancias.</li><br />
                      <li>Protección contra la inflación: La inflación reduce el valor del dinero con el tiempo. Si el dinero simplemente se guarda sin invertir, 
                        pierde poder adquisitivo. Las inversiones, al generar rendimientos, pueden ayudar a superar la inflación y preservar el valor del capital.</li><br />
                      <li>Logro de objetivos financieros: Ya sea para la compra de una casa, la educación de los hijos o la jubilación, invertir permite alcanzar metas financieras importantes. 
                        Una estrategia de inversión adecuada puede ayudar a acumular el capital necesario para estos fines.</li><br />
                      <li>Ingresos pasivos: Algunas inversiones, como los bienes raíces o los dividendos de acciones, pueden generar ingresos regulares sin requerir una gran cantidad de trabajo 
                        o supervisión constante. Esto es útil para diversificar las fuentes de ingresos.</li><br />
                      <li>Preparación para la jubilación: Invertir a lo largo de la vida laboral permite acumular fondos para la jubilación. Las cuentas de jubilación, por ejemplo, 
                        están diseñadas para facilitar la inversión a largo plazo y permitir que los ahorros crezcan hasta el retiro.</li><br />
                      <li>Diversificación de fuentes de ingreso: Tener dinero invertido en diferentes activos ayuda a reducir la dependencia de un solo tipo de ingreso. 
                        En caso de perder un empleo o enfrentar dificultades, una cartera diversificada de inversiones puede ofrecer un respaldo financiero.</li>
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
                  <AccordionContent className='text-lg'>
                      Una inversión es la acción de destinar recursos, generalmente dinero, a un
                    activo con la expectativa de obtener un retorno o beneficio en el futuro.
                    Esto puede incluir la compra de acciones, bonos, bienes raíces, o incluso
                    iniciar un negocio.
                    <p><br />
              Existen varios tipos de inversiones, cada una con su propio nivel de riesgo y potencial de retorno:
                    </p><br />
                    <ul className="list-disc list-inside">
                      <li>
                        <strong>Activos:</strong> Son bienes o recursos con valor económico. Pueden ser físicos, como inmuebles o equipos, o financieros, como acciones o bonos.
                      </li><br />
                      <li>
                        <strong>Acciones:</strong> Representan una parte de propiedad en una empresa. Al comprar acciones, te conviertes en accionista y tienes derecho a una parte de las ganancias y, en algunos casos, a votar en asuntos de la compañía.
                      </li><br />
                      <li>
                        <strong>Bonos:</strong> Son instrumentos de deuda que emiten entidades como gobiernos o empresas. Al comprar un bono, le prestas dinero a la entidad emisora y a cambio recibes pagos de intereses hasta que te devuelvan el principal.
                      </li><br />
                      <li>
                        <strong>Rendimiento:</strong> Es la ganancia que obtienes de una inversión, expresada generalmente como un porcentaje del monto invertido. Puede ser en forma de intereses, dividendos o apreciación del valor del activo.
                      </li><br />
                      <li>
                        <strong>Diversificación:</strong> Estrategia que implica distribuir las inversiones en diferentes tipos de activos para reducir el riesgo. La idea es no poner "todos los huevos en una sola canasta".
                      </li><br />
                      <li>
                        <strong>Liquidez:</strong> Capacidad para convertir una inversión en efectivo rápidamente y sin pérdida significativa de valor. Los activos líquidos, como el efectivo, son fáciles de convertir, mientras que los activos ilíquidos, como bienes raíces, requieren más tiempo.
                      </li><br />
                      <li>
                        <strong>Riesgo y retorno:</strong> El riesgo es la posibilidad de perder una parte o la totalidad de la inversión, mientras que el retorno es la ganancia que se espera. Generalmente, a mayor riesgo, mayor es el retorno potencial, y viceversa.
                      </li><br />
                      <li>
                        <strong>Interés compuesto:</strong> Proceso en el cual los intereses ganados se reinvierten para generar más intereses. A largo plazo, el interés compuesto puede hacer que las inversiones crezcan exponencialmente.
                      </li><br />
                      <li>
                        <strong>Inflación:</strong> Incremento sostenido de los precios de bienes y servicios con el tiempo. La inflación puede reducir el poder adquisitivo de las inversiones si el rendimiento no supera la tasa de inflación.
                      </li><br />
                      <li>
                        <strong>Portafolio:</strong> Conjunto de todas las inversiones de un individuo. Un portafolio diversificado puede incluir una mezcla de acciones, bonos, efectivo y otros activos.
                      </li><br />
                      <li>
                        <strong>Análisis técnico y fundamental:</strong> Métodos para evaluar inversiones. El análisis fundamental estudia los fundamentos de una empresa (como ingresos y ganancias), mientras que el análisis técnico observa patrones y tendencias en el precio de las acciones para hacer pronósticos.
                      </li><br />
                      <li>
                        <strong>Mercado de valores:</strong> Plataforma donde se compran y venden acciones y otros valores financieros. Los mercados pueden ser físicos, como la Bolsa de Nueva York, o digitales, como muchos intercambios modernos.
                      </li><br />
                      <li>
                        <strong>Fondos de inversión:</strong> Vehículos que agrupan el dinero de múltiples inversores para invertir en una cartera diversificada de activos. Hay varios tipos, como fondos de renta fija, renta variable, o mixtos.
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
        </div>
    </>
  )
}
