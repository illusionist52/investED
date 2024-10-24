"use client";

import React, { useEffect, useState } from "react";
import BigCard from "../_components/BigCard";
import BalanceCard from "../_components/BalanceCard";
import CategoryCard from "../_components/CategoryCard";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import ExpenseChart from "../_components/ExpenseChart";
import { Badge } from "@/components/ui/badge";
import { TransactionDialog } from "../_components/TransactionDialog";
import { getTransactionsByUserId } from "@/api/getTransactions";

export default function Page() {
  const [transactionss, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTransactions = async () => {
    try {
      const data = await getTransactionsByUserId()
      console.log("Fetched transactions:", data);
      setTransactions(data);
    } catch (err) {
      console.error("Error fetching transactions:", err);
      setError("Failed to fetch transactions");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []); // Fetch transactions on mount

  // Fetch transactions whenever a new transaction is added
  const handleTransactionAdded = () => {
    fetchTransactions();
  };

  console.log(transactionss);

  // Calculate income and expense based on fetched data
  const income = transactionss?.filter((t) => t.type === "income")
    .reduce((acc, t) => acc + parseFloat(t.amount), 0);

  const expense = transactionss
    .filter((t) => t.type === "expense")
    .reduce((acc, t) => acc + parseFloat(t.amount), 0);

  const categories = transactionss.reduce((acc, t) => {
    const category = acc.find((c) => c.type === t.category);
    if (category) {
      category.amount += parseFloat(t.amount);
    } else {
      acc.push({
        type: t.category,
        amount: parseFloat(t.amount),
      });
    }
    return acc;
  }, []);

  return (
    <div className="my-8 flex flex-col gap-12 overscroll-contain">
      <div className="mx-16 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Welcome Back! Usmaan </h1>
        <TransactionDialog onTransactionAdded={handleTransactionAdded} />
      </div>
      <div className="grid grid-cols-2 items-start gap-8">
        <div className="flex items-center gap-12">
          <BigCard data={{ type: "Expense", amount: `${expense}` }} />
          <BigCard data={{ type: "Income", amount: `${income}` }} />
        </div>
        <div className="row-span-2">
          <BalanceCard transactions={transactionss} />
        </div>
        <div className="row-span-3 grid grid-cols-2 gap-x-2 gap-y-4">
          {categories.length > 0 ? (
            categories.map((category, index) => (
              <CategoryCard
                key={index}
                data={{ type: category.type, amount: `${category.amount}` }}
                color={"bg-teal-200"}
                iconName={"Apple"}
              />
            ))
          ) : (
            <div>No categories available</div>
          )}
        </div>
        <div className="col-span-1 row-span-1 h-[40vh] w-[35vw] rounded-2xl bg-white p-4">
          <h2 className="text-2xl font-bold">Latest Transactions</h2>
          <ScrollArea className="h-[30vh]">
            <div className="flex flex-col gap-2">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Transaction</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {transactionss.length > 0 ? (
                    transactionss.map((transaction) => (
                      <TableRow key={transaction.id}>
                        <TableCell className="font-medium">
                          {transaction.description}
                        </TableCell>
                        <TableCell>{transaction.type}</TableCell>
                        <TableCell className="text-right">
                          {transaction.amount}
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={3} className="text-center">
                        No transactions available
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </ScrollArea>
        </div>
        <div className="col-span-2 row-span-2 h-[50vh] w-[90%] rounded-3xl bg-white p-4">
          <div className="flex flex-col items-start gap-2">
            <div className="flex items-center justify-between gap-40">
              <h3 className="text-xl font-semibold">Overview</h3>
              <div className="flex h-10 gap-2">
                <Badge
                  variant={"outline"}
                  className="flex items-center gap-2 text-sm"
                >
                  <div className="h-4 w-4 rounded-full bg-green-300"></div>
                  Income
                </Badge>
                <Badge
                  variant={"outline"}
                  className="flex items-center gap-2 text-sm"
                >
                  <div className="h-4 w-4 rounded-full bg-blue-300"></div>
                  Expense
                </Badge>
              </div>
            </div>
            <ExpenseChart transactions={transactionss} />
          </div>
        </div>
      </div>
    </div>
  );
}
