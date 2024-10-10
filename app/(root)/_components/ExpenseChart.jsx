"use client";

import React from "react";
import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Line,
} from "recharts";

const ExpenseChart = ({ transactions }) => {
  // Prepare data for the chart based on the transactions
  const chartData = transactions.reduce((acc, transaction) => {
    const date = new Date(transaction.date).toLocaleDateString(); // Format the date

    // Check if the date already exists in the accumulator
    const existingData = acc.find((entry) => entry.name === date);

    if (existingData) {
      // If the date exists, update the income or expense
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

  return (
    <ResponsiveContainer width="100%" height={300}>
      <ComposedChart
        width={500}
        height={300}
        data={chartData}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
        <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
        <Tooltip />
        <Legend />
        <Bar
          yAxisId="left"
          dataKey="expense"
          fill="#afaced"
          radius={[20, 20, 0, 0]}
          barSize={20} // Set barSize to adjust the width
        />
        <Bar
          yAxisId="right"
          dataKey="income"
          fill="#b9eecd"
          radius={[20, 20, 0, 0]}
          barSize={20} // Set barSize to adjust the width
        />
        <Line
          yAxisId="left"
          type="monotone"
          dataKey="expense"
          stroke="#8884d8"
          strokeWidth={2}
        />
        <Line
          yAxisId="right"
          type="monotone"
          dataKey="income"
          stroke="#82ca9d"
          strokeWidth={2}
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default ExpenseChart;
