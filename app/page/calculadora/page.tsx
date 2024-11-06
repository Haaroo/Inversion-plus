"use client"

import { useState } from 'react';
import ResultTable from './components/page';
import NavbarPage from '@/components/NavbarPage/NavbarPage';
import Footer from '@/components/footer';

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