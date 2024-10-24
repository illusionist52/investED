"use client";
import { getParent } from '@/api/getParent';
import { getTransactionsByUserId } from '@/api/getTransactions';
import React, { useEffect, useState } from 'react';
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

function Dashboard() {
    const [userData, setUserData] = useState(null);
    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userData = await getParent();
                console.log('Fetched User Data:', userData);
                setUserData({
                    full_name: userData[0]?.full_name || 'N/A',
                    rank: userData[0]?.rank || 'N/A',
                    virtual_currency: userData[0]?.virtual_currency || 0,
                    streaks: userData[0]?.streaks || 0,
                    modules_completed: userData[0]?.modules_completed || 0,
                    badges_list: userData[0]?.badges_list || 'N/A',
                    goal: userData[0]?.goal || 'N/A',
                });

                const transactionData = await getTransactionsByUserId();
                console.log('Fetched Transactions:', transactionData);
                setTransactions(transactionData);
            } catch (err) {
                console.error('Error fetching data:', err);
                setError('Failed to fetch data');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleTransactionAdded = () => {
        fetchData();
    };

    const income = transactions
        .filter((t) => t.type === 'income')
        .reduce((acc, t) => acc + parseFloat(t.amount), 0);

    const expense = transactions
        .filter((t) => t.type === 'expense')
        .reduce((acc, t) => acc + parseFloat(t.amount), 0);

    const savings = income - expense;

    const categories = transactions.reduce((acc, t) => {
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

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="my-8 flex flex-col gap-12 overscroll-contain">
            {/* Header */}
            <div className="mx-16 flex items-center justify-between">
                <h1 className="text-3xl font-bold">Welcome Back, {userData?.full_name}!</h1>
            </div>

            {/* User Profile Section */}
            <div className="grid grid-cols-2 gap-8">
                <div className="col-span-1 bg-gray-100 p-4 rounded-lg">
                    <div className="flex items-center">
                        <img src="/images/usericon.png" alt="User" className="w-16 h-16 rounded-full" />
                        <div className="ml-4">
                            <p>Name: {userData.full_name}</p>
                            <p>Rank: {userData.rank}</p>
                            <p>VC: {userData.virtual_currency}</p>
                            <p>Streaks: {userData.streaks}</p>
                            <p>Modules Completed: {userData.modules_completed}</p>
                            <p>Badge: {userData.badges_list}</p>
                            <p>Goal: {userData.goal}</p>
                        </div>
                    </div>
                    {/* <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg">+ Add Chores</button> */}
                </div>

                {/* Savings, Expense, Income Cards */}
                <div className="grid grid-cols-3 gap-4">
                    <div className="bg-pink-200 p-4 rounded-lg text-center">
                        <p className="text-lg font-semibold">SAVINGS</p>
                        <p className="text-2xl font-bold">₹{savings}</p>
                    </div>
                    <div className="bg-red-200 p-4 rounded-lg text-center">
                        <p className="text-lg font-semibold">EXPENSE</p>
                        <p className="text-2xl font-bold">₹{expense}</p>
                    </div>
                    <div className="bg-green-200 p-4 rounded-lg text-center">
                        <p className="text-lg font-semibold">INCOME</p>
                        <p className="text-2xl font-bold">₹{income}</p>
                    </div>
                </div>
            </div>

            {/* Transaction Overview Section */}
            <div className="grid grid-cols-2 items-start gap-8">
                {/* <div className="flex items-center gap-12">
                    <BigCard data={{ type: "Expense", amount: `${expense}` }} />
                    <BigCard data={{ type: "Income", amount: `${income}` }} />
                </div> */}

                <div className="row-span-2">
                    <BalanceCard transactions={transactions} />
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
                                    {transactions.length > 0 ? (
                                        transactions.map((transaction) => (
                                            <TableRow key={transaction.id}>
                                                <TableCell className="font-medium">{transaction.description}</TableCell>
                                                <TableCell>{transaction.type}</TableCell>
                                                <TableCell className="text-right">{transaction.amount}</TableCell>
                                            </TableRow>
                                        ))
                                    ) : (
                                        <TableRow>
                                            <TableCell colSpan={3} className="text-center">No transactions available</TableCell>
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
                                <Badge variant={"outline"} className="flex items-center gap-2 text-sm">
                                    <div className="h-4 w-4 rounded-full bg-green-300"></div>
                                    Income
                                </Badge>
                                <Badge variant={"outline"} className="flex items-center gap-2 text-sm">
                                    <div className="h-4 w-4 rounded-full bg-blue-300"></div>
                                    Expense
                                </Badge>
                            </div>
                        </div>
                        <ExpenseChart transactions={transactions} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
