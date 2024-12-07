"use client";

import React, { useEffect, useState } from "react";
import { fetchCryptoData } from "../api";
import CryptoChart from "./CryptoChart";

const CryptoTracker = () => {
  const [cryptos, setCryptos] = useState([]);
  const [selectedCryptos, setSelectedCryptos] = useState([]);

  useEffect(() => {
    const getCryptoData = async () => {
      const data = await fetchCryptoData();
      setCryptos(data);
      setSelectedCryptos(data);
    };

    getCryptoData();
  }, []);

  const toggleCryptoSelection = (crypto) => {
    setSelectedCryptos((prevSelected) => {
      if (prevSelected.includes(crypto)) {
        return prevSelected.filter((selected) => selected !== crypto);
      } else {
        return [...prevSelected, crypto];
      }
    });
  };

  const convertToMXN = (crypto) => {
    return {
      ...crypto,
      current_price: crypto.current_price * 20.33,
      price_history: crypto.price_history?.map((price) => price * 20.33) || [],
    };
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Crypto Tracker (MXN)</h1>
      
      {/* Tabla con scroll horizontal en pantallas pequeñas */}
      <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
        <table className="min-w-full table-auto text-sm">
          <thead>
            <tr className="border-b bg-gray-100">
              <th className="px-4 py-2 text-left font-semibold text-gray-700">Nombre</th>
              <th className="px-4 py-2 text-left font-semibold text-gray-700">Precio (MXN)</th>
              <th className="px-4 py-2 text-left font-semibold text-gray-700">Cambio (24h)</th>
            </tr>
          </thead>
          <tbody>
            {cryptos.map((crypto) => (
              <tr key={crypto.id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2">{crypto.name}</td>
                <td className="px-4 py-2">${crypto.current_price.toFixed(2)} MXN</td>
                <td
                  className={`px-4 py-2 ${
                    crypto.price_change_percentage_24h >= 0 ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {crypto.price_change_percentage_24h.toFixed(2)}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Sección de gráficos */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">Gráfica de Precios Histórica</h2>
        
        {/* Botones de selección de criptomonedas */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {cryptos.map((crypto) => (
            <button
              key={crypto.id}
              onClick={() => toggleCryptoSelection(crypto)}
              className={`px-4 py-2 rounded-full border-2 font-semibold ${
                selectedCryptos.includes(crypto)
                  ? "bg-gray-600 text-white border-gray-600"
                  : "bg-gray-200 text-gray-700 border-gray-300"
              } hover:bg-gray-300 transition-all`}
            >
              {crypto.name}
            </button>
          ))}
        </div>

        {/* Mostrar gráfico si hay criptomonedas seleccionadas */}
        {selectedCryptos.length > 0 ? (
          <CryptoChart cryptos={selectedCryptos.map(convertToMXN)} />
        ) : (
          <p className="text-center text-gray-600">Por favor, selecciona al menos una criptomoneda para ver la gráfica.</p>
        )}
      </div>
    </div>
  );
};

export default CryptoTracker;
