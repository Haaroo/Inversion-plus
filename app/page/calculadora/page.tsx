"use client"

import { useState } from 'react';
import ResultTable from './components/page';
import NavbarPage from '@/components/NavbarPage/NavbarPage';
import Footer from '@/components/footer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const HomePage = () => {
  const [cantidad, setCantidad] = useState<number>(0); 
  const bancos = [
    { name: 'CETES (10%)', tasa: 0.10 },   
    { name: 'BONOS de México (9%)', tasa: 0.09 },  
    { name: 'BBVA (7%)', tasa: 0.07 },   
    { name: 'Santander (6%)', tasa: 0.06 },  
    { name: 'Banorte (5%)', tasa: 0.05 }, 
    { name: 'Ejemplo (12%)', tasa: 0.12}, 
    { name: 'Ejemplo 2(12%)', tasa: 0.115}, 
    { name: 'Ejemplo 3(12%)', tasa: 0.127}, 
    
  ];

  const handleCantidadChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value)) {
      setCantidad(value); 
    } else {
      setCantidad(0); 
    }
  };

  return (
    <>
        <NavbarPage />
        <div className="max-w-4xl mx-auto p-6">
        <section className="mb-12">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className='font-bold text-2xl'>¿Qué es y para qué sirve una Calculadora de Rendimiento?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-lg text-gray-700 mb-6">
                    Una <span className="font-bold">calculadora de rendimiento</span> es una herramienta financiera que permite estimar el rendimiento o retorno de una inversión a lo largo del tiempo. 
                    Se basa en parámetros como el monto inicial invertido, la tasa de rendimiento esperada y el tiempo durante el cual se mantendrá la inversión.
                  </p>
                  <p className="text-lg text-gray-700 mb-6">
                    El principal objetivo de una calculadora de rendimiento es proporcionar una estimación clara de cuánto podría crecer una inversión con el paso del tiempo.
                    Esta herramienta es especialmente útil para quienes desean evaluar diferentes opciones de inversión y comparar qué tan rentable podría ser cada una bajo condiciones similares.
                  </p>
                  <p className="text-lg text-gray-700 mb-6">
                    Además, las calculadoras de rendimiento son esenciales para entender conceptos como el interés compuesto, que puede tener un impacto significativo en el crecimiento de una inversión a largo plazo.
                    Al usar esta herramienta, los inversionistas pueden ajustar parámetros como el monto de la inversión inicial, la tasa de interés y el plazo para ver cómo estos factores influyen en el resultado final.
                  </p>
                  <p className="text-lg text-gray-700">
                    En resumen, una <span className="font-bold">calculadora de rendimiento</span> es una herramienta invaluable para cualquier persona que quiera comprender mejor el potencial de crecimiento de su dinero 
                    y tomar decisiones informadas sobre dónde y cómo invertir para alcanzar sus objetivos financieros a largo plazo.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
        </section>
        </div>
        <div className="max-w-6xl mx-auto p-6">
            <div className="w-full max-w-7xl bg-white rounded-lg shadow-xl p-8">
                <h1 className="text-3xl font-bold text-center text-indigo-800 mb-6">Calculadora de Rendimiento</h1>
                <input
                type="number"
                value={cantidad > 0 ? cantidad : ''}
                onChange={handleCantidadChange}
                className="border border-indigo-300 rounded-lg px-4 py-2 mb-6 w-full text-xl text-black"
                placeholder="Ingresa la cantidad a ahorrar"
                />

                <ResultTable cantidad={cantidad} bancos={bancos} />
            </div>
        </div>
        <Footer />
    </>
  );
};

export default HomePage;