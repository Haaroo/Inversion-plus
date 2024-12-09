'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Income from './income/income';
import Expense from './expense/Expense';
import { format, parseISO } from 'date-fns';

interface CashflowItem {
  id: number;
  type: 'income' | 'expense';
  description: string;
  createdAt: string;
  amount: number;
}

const Cashflow: React.FC = () => {
  const [cashflow, setCashflow] = useState<CashflowItem[]>([]);

  const fetchCashflow = async () => {
    try {
      const incomesResponse = await axios.get('http://localhost:1337/api/incomes?populate=*');
      const expensesResponse = await axios.get('http://localhost:1337/api/expenses?populate=*');
  
      const incomes = incomesResponse.data.data.map((income: any) => ({
        id: income.id,
        type: 'income',
        description: income.description,
        createdAt: income.createdAt,
        amount: income.amount,
      }));
  
      const expenses = expensesResponse.data.data.map((expense: any) => ({
        id: expense.id,
        type: 'expense',
        description: expense.description,
        createdAt: expense.createdAt,
        amount: expense.amount,
      }));
  
      // Combine incomes and expenses and sort by createdAt in descending order
      const combined = [...incomes, ...expenses].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      setCashflow(combined);
    } catch (error) {
      console.error('Error fetching cashflow:', error);
    }
  };
  

  useEffect(() => {
    fetchCashflow();
  }, []);

  return (
    <main className="flex-1 overflow-x-hidden overflow-y-auto p-4 lg:p-8">
      <section className="flex gap-8 flex-col lg:flex-row">
        <Income refreshCashflow={fetchCashflow} />
        <section className="w-full lg:w-1/3 bg-white rounded-lg shadow-lg p-6">
          <section className="border-b-2 border-gray-300 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-gray-800">Flujo de fondos</h1>
          </section>
          <article className="w-full mt-6">
            {cashflow.map((item) => (
              <article
                key={item.id}
                className={`h-full border-2 rounded-lg bg-white mt-4 shadow-lg ${item.type === 'income' ? 'border-green-500' : 'border-red-500'}`}
              >
                <article className="py-4 px-5">
                  <section className="flex justify-between mb-3">
                    <p className="text-lg font-medium text-gray-800">{item.description}</p>
                    <h1 className={`text-lg font-semibold ${item.type === 'income' ? 'text-green-600' : 'text-red-600'}`}>
                      ${item.amount.toFixed(2)}
                    </h1>
                  </section>

                  <section className="flex justify-between text-sm text-gray-500">
                    <span>{format(parseISO(item.createdAt), 'yyyy-MM-dd HH:mm:ss')}</span>
                  </section>
                </article>
              </article>
            ))}
          </article>
        </section>
        <Expense refreshCashflow={fetchCashflow} />
      </section>
    </main>
  );
};  

export default Cashflow;