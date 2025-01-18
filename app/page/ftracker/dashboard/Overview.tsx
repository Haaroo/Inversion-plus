'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BarChart from './budget/BarChart';
import PieChart from './budget/PieChart';

const Overview: React.FC = () => {
    const [budgets, setBudgets] = useState<{ category: string; amount: number; }[]>([]);
    const [chartType, setChartType] = useState<'bar' | 'pie'>('bar');

    useEffect(() => {
        const fetchBudgets = async () => {
            try {
                const res = await axios.get('http://localhost:1337/api/budgets?populate=*');
                const data = res.data.data.map((budget: any) => ({
                    category: budget.category,
                    amount: budget.amount,
                }));
                setBudgets(data);
            } catch (error) {
                console.error('Error fetching budgets:', error);
            }
        };

        fetchBudgets();
    }, []);

    const categories = budgets.map(budget => budget.category);
    const amounts = budgets.map(budget => budget.amount);

    return (
        <main className="flex-1 overflow-x-hidden overflow-y-auto px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto py-6">
                <section className="w-full flex flex-col md:flex-row justify-between py-4 px-[15px]">
                    <h2 className="text-2xl text-gray-700 font-medium">Descripcion general</h2>
                    <div className="flex mt-2 md:mt-0">
                        <button onClick={() => setChartType('bar')} className={`mx-2 py-2 px-3 ${chartType === 'bar' ? 'bg-[#98b4b2] text-white' : 'bg-gray-200 text-gray-700'} rounded-lg`}>
                            Bar Chart
                        </button>
                        <button onClick={() => setChartType('pie')} className={`mx-2 py-2 px-3 ${chartType === 'pie' ? 'bg-[#98b4b2] text-white' : 'bg-gray-200 text-gray-700'} rounded-lg`}>
                            Pie Chart
                        </button>
                    </div>
                </section>
                <section className="mt-5">
                    {chartType === 'bar' ? (
                        <BarChart categories={categories} amounts={amounts} />
                    ) : (
                        <PieChart categories={categories} amounts={amounts} />
                    )}
                </section>
            </div>
        </main>
    );
};

export default Overview;
