import React from 'react';

interface Bank {
    name: string;
    tasa: number; 
}

interface ResultTableProps {
    cantidad: number;
    bancos: Bank[];  
}
  
const ResultTable: React.FC<ResultTableProps> = ({ cantidad, bancos }) => {
    const calcularRendimiento = (cantidad: number, tasa: number, años: number): number => {
        return cantidad * Math.pow(1 + tasa, años);
    };

    const rendimientosAl5toAno = bancos.map((banco) => {
        return {
            name: banco.name,
            rendimiento: calcularRendimiento(cantidad, banco.tasa, 5),
        };
    });

    const mejorRendimientoBanco = rendimientosAl5toAno.reduce((mejor, bancoActual) => {
        return bancoActual.rendimiento > mejor.rendimiento ? bancoActual : mejor;
    }, rendimientosAl5toAno[0]);

    return (
        <div className="overflow-x-auto mt-6 rounded-lg">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-lg">
                <thead className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white rounded-lg">
                    <tr>
                        <th className="py-3 px-6 text-left text-sm font-semibold">Años</th>
                        {bancos.map((banco) => (
                            <th key={banco.name} className="py-3 px-6 text-left text-sm font-semibold">{banco.name}</th>
                        ))}
                    </tr>
                </thead>
                <tbody className="text-gray-700 rounded-lg">
                    {[0, 1, 2, 3, 4, 5].map((anio) => (
                        <tr key={anio} className="border-b hover:bg-gray-50 transition-colors duration-200">
                            <td className="py-3 px-6 text-sm">{anio === 0 ? '0º Año' : `${anio}º Año`}</td>
                            {bancos.map((banco) => {
                                const rendimiento = cantidad > 0 ? calcularRendimiento(cantidad, banco.tasa, anio) : 0;
                                const esMejorRendimiento = banco.name === mejorRendimientoBanco.name && [1, 2, 3, 4, 5].includes(anio);
                                return (
                                    <td
                                        key={banco.name}
                                        className={`py-3 px-6 text-sm ${esMejorRendimiento ? 'bg-green-100 font-semibold text-green-700' : ''} ${rendimiento === 0 && cantidad <= 0 ? 'text-gray-400' : ''}`}
                                    >
                                        {cantidad > 0 ? `$${rendimiento.toFixed(2)}` : '--'}
                                    </td>
                                );
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
            {cantidad <= 0 && (
                <div className="mt-4 text-center text-red-600 font-bold">
                    <p>Por favor ingresa una cantidad válida para calcular los rendimientos.</p>
                </div>
            )}
        </div>
    );
};

export default ResultTable;
