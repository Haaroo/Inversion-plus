import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface ExpenseFormProps {
  isOpen: boolean; //added this
  onClose: () => void;
  expense: { id: number, description: string, amount: number  } | null;
  refreshCashflow: () => void; //added this
}

const ExpenseForm: React.FC<ExpenseFormProps> = ({ isOpen, onClose, expense, refreshCashflow }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState<number>(0);

  useEffect(() => {
    if (expense) {
      console.log("Editing expense:", expense); // Add this line
      setDescription(expense.description);
      setAmount(expense.amount);
    } else {
      setDescription('');
      setAmount(0);
    }
  }, [expense]);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const expenseData = { description, amount };

    try {
        if (expense) {
            await axios.put(`http://localhost:1337/api/expenses/${expense.id}`, { data: expenseData });
        } else {
            await axios.post('http://localhost:1337/api/expenses', { data: expenseData });
        }
        refreshCashflow();
        onClose();
    } catch (error) {
        console.error('Error submitting expense:', error);
    }
  };

  if (!isOpen) return null;

  return (
    <main className="fixed top-0 z-50 left-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-50">
        <section className="relative lg:px-10 py-8 lg:mt-8 lg:w-[40%] bg-white shadow-md rounded px-8 pt-2 pb-8 mb-4">

          <form className="pt-4" onSubmit={handleSubmit}>
            <h2 className="text-lg font-medium mb-4">
              {expense ? 'Edit Expense' : 'Add Expense'}
              </h2>
            <button 
            onClick={onClose}
            className="absolute top-2 right-8 font-bold text-black cursor-pointer text-2xl">
              &times;
            </button>

            <div className="mb-4 flex flex-row justify-between">
              <div className="flex flex-col w-[30%]">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                  Description
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="description"
                  name="description"
                  type="text"
                  placeholder="Input description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </div>

              <div className="flex flex-col w-[30%]">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amount">
                  Category Amount
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="amount"
                  name="amount"
                  type="number"
                  placeholder="Input amount"
                  value={amount}
                  onChange={(e) => setAmount(parseFloat(e.target.value))}
                  required
                />
              </div>
            </div>

            <div className="mt-4 flex justify-center">
              <button
                type="submit"
                className="py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                {expense ? 'Edit Expense' : 'Add Expense'}
              </button>
            </div>
          </form>
        </section>
      </main>
  );
};

export default ExpenseForm;