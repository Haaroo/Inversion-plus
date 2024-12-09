'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ExpenseForm from './ExpenseForm';
import { format, parseISO } from 'date-fns';
import { FaEdit, FaPlus, FaTrash } from 'react-icons/fa';
import { BsThreeDotsVertical } from "react-icons/bs";

interface Expense {
    id: number;
    description: string;
    createdAt: string;
    amount: number;
}

interface ExpenseProps {
    refreshCashflow: () => void;
}

const Expense: React.FC<ExpenseProps> = ({ refreshCashflow }) => {
    const [expenses, setExpenses] = useState<Expense[]>([]);
    const [isExpenseFormOpen, setIsExpenseFormOpen] = useState(false);
    const [selectedExpense, setSelectedExpense] = useState<Expense | null>(null);
    const [dropdownOpen, setDropdownOpen] = useState<number | null>(null);

    useEffect(() => {
        fetchExpenses();
    }, []);

    const fetchExpenses = () => {
        fetch("http://localhost:1337/api/expenses?populate=*")
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Network response was not ok");
                }
                return res.json();
            })
            .then((data) => {
                if (Array.isArray(data.data)) {
                    setExpenses(data.data);
                } else {
                    console.error("Fetched data is not an array");
                }
            })
            .catch((error) => {
                console.error("Error fetching expenses:", error);
            });
    };

    const handleOpenExpenseForm = () => {
        setSelectedExpense(null);
        setIsExpenseFormOpen(true);
    };

    const handleCloseExpenseForm = () => {
        setSelectedExpense(null);
        setIsExpenseFormOpen(false);
    };

    const handleEditExpense = (expense: Expense) => {
        setSelectedExpense(expense);
        setIsExpenseFormOpen(true);
    };

    const handleDeleteExpense = async (id: number) => {
        try {
            await axios.delete(`http://localhost:1337/api/expenses/${id}`);
            setExpenses(expenses.filter((expense) => expense.id !== id));
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
                <h1 className="text-2xl font-semibold text-gray-800">Gasto</h1>
                <section className="flex mt-4 lg:mt-0">
                <figure onClick={handleOpenExpenseForm}>
                    <FaPlus className="text-gray-600 cursor-pointer hover:text-red-500 transition-all ease-in-out duration-300" />
                </figure>
                </section>
            </section>

            <article className="w-full mt-6">
                {expenses.map((product) => (
                <article
                    key={product.id}
                    className="h-full border-2 border-red-500 bg-red-50 rounded-lg shadow-md hover:shadow-lg transition-all ease-in-out duration-300"
                >
                    <article className="py-4 px-5">
                    <section className="flex flex-col">
                        <section className="flex justify-between mb-3">
                        <p className="leading-relaxed font-medium text-lg text-gray-800">{product.description}</p>
                        <div className="relative inline-block text-left">
                            <button
                            className="p-2 bg-gray-200 rounded-full"
                            onClick={() => toggleDropdown(product.id)}
                            >
                            <BsThreeDotsVertical className="text-gray-600 cursor-pointer w-5 h-5" />
                            </button>
                            {dropdownOpen === product.id && (
                            <div className="origin-top-right absolute right-0 mt-2 mr-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                <div className="py-1" role="menu" aria-orientation="vertical">
                                <div
                                    className="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                                    onClick={() => handleEditExpense(product)}
                                >
                                    <FaEdit className="mr-2 mt-1" />
                                    <span>Editar</span>
                                </div>
                                <div
                                    className="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                                    onClick={() => handleDeleteExpense(product.id)}
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
                        <span className="text-sm text-gray-500">{formatDate(product.createdAt)}</span>
                        <h1 className="text-lg font-semibold text-red-600">${product.amount.toFixed(2)}</h1>
                        </section>
                    </section>
                    </article>
                </article>
                ))}
            </article>

            {isExpenseFormOpen && (
                <ExpenseForm
                isOpen={isExpenseFormOpen}
                onClose={() => {
                    handleCloseExpenseForm();
                    fetchExpenses();
                }}
                expense={selectedExpense}
                refreshCashflow={() => {
                    refreshCashflow();
                    fetchExpenses();
                }}
                />
            )}
            </section>
    );
};

export default Expense;