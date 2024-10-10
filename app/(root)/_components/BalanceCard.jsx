"use client";
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const BalanceCard = ({ transactions }) => {
  // Prepare data for the AreaChart
  const chartData = transactions.reduce((acc, transaction) => {
    const date = new Date(transaction.date).toLocaleDateString(); // Format the date

    // Check if the date already exists in the accumulator
    const existingData = acc.find((entry) => entry.name === date);
    
    if (existingData) {
      // If the date exists, update income or expense
      if (transaction.type === "income") {
        existingData.income += parseFloat(transaction.amount); // Update income
      } else {
        existingData.expense += parseFloat(transaction.amount); // Update expense
      }
    } else {
      // If the date doesn't exist, create a new entry
      acc.push({
        name: date,
        income: transaction.type === "income" ? parseFloat(transaction.amount) : 0,
        expense: transaction.type === "expense" ? parseFloat(transaction.amount) : 0,
      });
    }

    return acc;
  }, []);

  // Calculate total balance, income, and expense
  const totalIncome = chartData.reduce((acc, entry) => acc + entry.income, 0);
  const totalExpense = chartData.reduce((acc, entry) => acc + entry.expense, 0);
  const totalBalance = totalIncome - totalExpense;

  return (
    <div className="flex h-[40vh] w-[35vw] flex-col items-start gap-4 rounded-xl bg-white p-6">
      <div className="flex flex-col gap-1 items-start">
        <h1 className="text-3xl font-semibold">Total Balance</h1>
        <p className="text-lg font-semibold">
          Balance: <span className="text-xl">${totalBalance.toFixed(2)}</span>
        </p>
      </div>

      <div className="w-[100%] h-full">
        <ResponsiveContainer width="100%" height={180}>
          <AreaChart
            data={chartData}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="income" stroke="#82ca9d" fill="#82ca9d" />
            <Area type="monotone" dataKey="expense" stroke="#8884d8" fill="#8884d8" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BalanceCard;
