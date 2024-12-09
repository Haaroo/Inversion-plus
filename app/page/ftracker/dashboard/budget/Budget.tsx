'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BudgetForm from './BudgetForm';
import { FaEdit, FaTrash } from 'react-icons/fa';

interface Budget {
    id: number;
    category: string;
    amount: number;
}

const Budget: React.FC = () => {
    const [budgets, setBudgets] = useState<Budget[]>([]);
    const [isBudgetFormOpen, setIsBudgetFormOpen] = useState(false);
    const [selectedBudget, setSelectedBudget] = useState<Budget | null>(null);

    useEffect(() => {
        const fetchBudgets = () => {
            fetch("http://localhost:1337/api/budgets?populate=*")
                .then((res) => {
                    if (!res.ok) {
                        throw new Error("Network response was not ok");
                    }
                    return res.json();
                })
                .then((data) => {
                    console.log("Fetched budgets:", data);
                    if (Array.isArray(data.data)) {
                        setBudgets(data.data);
                    } else {
                        console.error("Fetched data is not an array");
                    }
                })
                .catch((error) => {
                    console.error("Error fetching budgets:", error);
                });
        };

        fetchBudgets();
    }, []);

    const handleOpenBudgetForm = () => {
        setSelectedBudget(null);
        setIsBudgetFormOpen(true);
    };

    const handleCloseBudgetForm = () => {
        setSelectedBudget(null);
        setIsBudgetFormOpen(false);
    };

    const handleEditBudget = (budget: Budget) => {
        console.log("Editing:", budget);
        setSelectedBudget(budget);
        setIsBudgetFormOpen(true);
    };

    const handleDeleteBudget = async (id: number) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this budget?");
        if (!confirmDelete) return;  // Si el usuario cancela, no procede
    
        try {
            const response = await axios.delete(`http://localhost:1337/api/budgets?id=${id}`);
            // Verifica si la eliminación fue exitosa
            if (response.status === 200) {
                setBudgets((prevBudgets) => prevBudgets.filter((budget) => budget.id !== id)); // Actualiza el estado después de la eliminación
            } else {
                console.error("Error: Budget could not be deleted");
            }
        } catch (error) {
            console.error("Error deleting budget:", error);
        }
    };    

    const totalBudgetedAmount = budgets.reduce((total, budget) => total + budget.amount, 0);

    return (
        <main className="flex-1 overflow-x-hidden overflow-y-auto pl-6">
            <div className="container mx-auto py-6">
                {/* Header Section */}
                <section className="w-full flex flex-row justify-between py-4 px-6">
                <h2 className="text-3xl text-gray-800 font-semibold">Presupuesto</h2>
                <button
                    onClick={handleOpenBudgetForm}
                    className="bg-[#98b4b2] hover:bg-teal-600 mx-2 py-2 px-6 text-white font-semibold rounded-lg transition-all ease-in-out duration-300"
                >
                    Agregar presupuesto
                </button>
                </section>

                {/* No Budgets Available */}
                <section>
                {budgets.length === 0 ? (
                    <div className="container mx-auto py-6 flex justify-center">
                    <p className="text-xl text-gray-600">Todavía no has agregado ningún presupuesto...</p>
                    </div>
                ) : (
                    // Budgets List
                    <article className="lg:mt-5 pl-6 pt-4 lg:w-full w-full lg:grid lg:gap-8 lg:grid-cols-3 lg:grid-rows-3 grid md:grid-cols-2 gap-6">
                    {budgets.map((budget) => (
                        <article
                        key={budget.id}
                        className="h-full border-2 bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all ease-in-out duration-300"
                        >
                        <article className="py-5 px-6 border-l-8 border-[#98b4b2]">
                            {/* Budget Category and Amount */}
                            <section className="mt-4 flex flex-row justify-between items-center">
                            <section>
                                <p className="text-lg font-medium text-gray-800 capitalize">{budget.category}</p>
                                <span className="text-sm text-gray-500">Presupuesto planificado:</span>
                            </section>
                            <section>
                                <h1 className="text-xl font-semibold text-teal-500">${budget.amount.toFixed(2)}</h1>
                            </section>
                            </section>

                            <hr className="mt-5 border-gray-300" />

                            {/* Edit/Delete Actions */}
                            <section className="flex items-center flex-wrap mt-5 justify-between">
                            <span
                                className="inline-flex items-center leading-none text-sm bg-teal-100 rounded-full p-2 cursor-pointer hover:bg-teal-200 transition-all ease-in-out duration-300"
                                title="Edit"
                                onClick={() => handleEditBudget(budget)}
                            >
                                <FaEdit className="w-5 h-5 text-teal-500" />
                            </span>
                            <span
                                className="inline-flex items-center leading-none text-sm bg-red-100 rounded-full p-2 cursor-pointer hover:bg-red-200 transition-all ease-in-out duration-300"
                                title="Delete"
                                aria-label="Delete budget"
                                onClick={() => handleDeleteBudget(budget.id)}
                            >
                                <FaTrash className="w-5 h-5 text-red-500" />
                            </span>
                            </section>
                        </article>
                        </article>
                    ))}
                    </article>
                )}
                </section>

                {/* Budget Form */}
                {isBudgetFormOpen && (
                <BudgetForm
                    onClose={handleCloseBudgetForm}
                    setBudgets={setBudgets}
                    selectedBudget={selectedBudget}
                    totalBudgetedAmount={totalBudgetedAmount}
                />
                )}
            </div>
            </main>
    )
}

export default Budget;
