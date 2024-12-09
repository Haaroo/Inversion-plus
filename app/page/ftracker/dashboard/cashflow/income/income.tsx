'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import IncomeForm from './incomeForm';
import { format, parseISO } from 'date-fns';
import { FaEdit, FaPlus, FaTrash } from 'react-icons/fa';
import { BsThreeDotsVertical } from "react-icons/bs";

interface Income {
    id: number;
    description: string;
    createdAt: string;
    amount: number;
}

interface IncomeProps {
    refreshCashflow: () => void;
}

const Income: React.FC<IncomeProps> = ({ refreshCashflow }) => {
    const [incomes, setIncomes] = useState<Income[]>([]);
    const [isIncomeFormOpen, setIsIncomeFormOpen] = useState(false);
    const [selectedIncome, setSelectedIncome] = useState<Income | null>(null);
    const [dropdownOpen, setDropdownOpen] = useState<number | null>(null);

    useEffect(() => {
        fetchIncomes();
    }, []);

    const fetchIncomes = () => {
        fetch("http://localhost:1337/api/incomes?populate=*")
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Network response was not ok");
                }
                return res.json();
            })
            .then((data) => {
                if (Array.isArray(data.data)) {
                    setIncomes(data.data);
                } else {
                    console.error("Fetched data is not an array");
                }
            })
            .catch((error) => {
                console.error("Error fetching incomes:", error);
            });
    };

    const handleOpenIncomeForm = () => {
        setSelectedIncome(null);
        setIsIncomeFormOpen(true);
    };

    const handleCloseIncomeForm = () => {
        setSelectedIncome(null);
        setIsIncomeFormOpen(false);
    };

    const handleEditIncome = (income: Income) => {
        setSelectedIncome(income);
        setIsIncomeFormOpen(true);
    };

    const handleDeleteIncome = async (id: number) => {
        try {
            await axios.delete(`http://localhost:1337/api/incomes/${id}`);
            setIncomes(incomes.filter((income) => income.id !== id));
            refreshCashflow();
        } catch (error) {
            console.error(error);
        }
    };

    const formatDate = (dateString: string) => {
        const date = parseISO(dateString);
        return format(date, 'yyyy-MM-dd HH:mm:ss');
    };

    const toggleDropdown = (id: number) => {
        setDropdownOpen(dropdownOpen === id ? null : id);
    };

    return (
        <section className="w-full lg:w-1/3 h-full bg-white p-5 lg:p-8 rounded-lg shadow-lg">
        <section className="border-b-2 border-gray-300 lg:px-6 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-gray-800">Ingreso</h1>
            <section className="flex mt-4 lg:mt-0">
            <figure onClick={handleOpenIncomeForm}>
                <FaPlus className="text-gray-600 cursor-pointer hover:text-green-500 transition-all ease-in-out duration-300" />
            </figure>
            </section>
        </section>

        <article className="w-full mt-6">
            {incomes.map((income) => (
            <article
                key={income.id}
                className="h-full border-2 border-green-500 bg-green-50 rounded-lg shadow-md hover:shadow-lg transition-all ease-in-out duration-300"
            >
                <article className="py-4 px-5">
                <section className="flex flex-col">
                    <section className="flex justify-between mb-3">
                    <p className="leading-relaxed font-medium text-lg text-gray-800">{income.description}</p>
                    <div className="relative inline-block text-left">
                        <button
                        className="p-2 bg-gray-200 rounded-full"
                        onClick={() => toggleDropdown(income.id)}
                        >
                        <BsThreeDotsVertical className="text-gray-600 cursor-pointer w-5 h-5" />
                        </button>
                        {dropdownOpen === income.id && (
                        <div className="origin-top-right absolute right-0 mt-2 mr-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                            <div className="py-1" role="menu" aria-orientation="vertical">
                            <div
                                className="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                                onClick={() => handleEditIncome(income)}
                            >
                                <FaEdit className="mr-2 mt-1" />
                                <span>Editar</span>
                            </div>
                            <div
                                className="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                                onClick={() => handleDeleteIncome(income.id)}
                            >
                                <FaTrash className="mr-2 mt-1" />
                                <span>Eliminar</span>
                            </div>
                            </div>
                        </div>
                        )}
                    </div>
                    </section>

                    <section className="flex justify-between mt-2">
                    <span className="text-sm text-gray-500">{formatDate(income.createdAt)}</span>
                    <h1 className="text-lg font-semibold text-green-600">${income.amount.toFixed(2)}</h1>
                    </section>
                </section>
                </article>
            </article>
            ))}
        </article>

        {isIncomeFormOpen && (
            <IncomeForm
            isOpen={isIncomeFormOpen}
            onClose={() => {
                handleCloseIncomeForm();
                fetchIncomes(); 
            }}
            income={selectedIncome}
            refreshCashflow={() => {
                refreshCashflow();
                fetchIncomes(); 
            }}
            />
        )}
        </section>
    );
};

export default Income;