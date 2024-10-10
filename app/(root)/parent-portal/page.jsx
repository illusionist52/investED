import React from "react";
import BigCard from "../_components/BigCard";
import BalanceCard from "../_components/BalanceCard";
import CategoryCard from "../_components/CategoryCard";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableFooter,
} from "@/components/ui/table";
import BarChart from "../_components/ExpenseChart";
import ExpenseChart from "../_components/ExpenseChart";
import { Badge } from "@/components/ui/badge";
import { Dialog } from "@/components/ui/dialog";
import { TransactionDialog } from "../_components/TransactionDialog";

const transactions = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

export default function Page() {
  return (
    <div className="my-8 flex flex-col gap-12 overscroll-contain">
      <div className="mx-16 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Welcome Back! Atharva </h1>
        <TransactionDialog />
      </div>
      <div className="grid grid-cols-2 items-start gap-8">
        <div className="flex items-center gap-12">
          <BigCard data={{ type: "Expense", amount: "1000" }} />
          <BigCard data={{ type: "Income", amount: "1000" }} />
        </div>
        <div className="row-span-2">
          <BalanceCard />
        </div>
        <div className="row-span-3 grid grid-cols-2 gap-x-2 gap-y-4">
          <CategoryCard
            data={{ type: "Rent", amount: "400" }}
            color={"bg-orange-300"}
            iconName={"House"}
          />
          <CategoryCard
            data={{ type: "Gas", amount: "300" }}
            color={"bg-pink-300"}
            iconName={"Car"}
          />
          <CategoryCard
            data={{ type: "Health", amount: "100" }}
            color={"bg-green-300"}
            iconName={"Heart"}
          />
          <CategoryCard
            data={{ type: "Groceries", amount: "60" }}
            color={"bg-cyan-300"}
            iconName={"Apple"}
          />
          <CategoryCard
            data={{ type: "Groceries", amount: "60" }}
            color={"bg-yellow-200"}
            iconName={"Apple"}
          />
          <CategoryCard
            data={{ type: "Groceries", amount: "60" }}
            color={"bg-teal-200"}
            iconName={"Apple"}
          />
        </div>
        <div className="col-span-1 row-span-1 h-[40vh] w-[35vw] rounded-2xl bg-white p-4">
          <h2 className="text-2xl font-bold">Latest Transactions</h2>
          <ScrollArea className="h-[30vh]">
            <div className="flex flex-col gap-2">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="">Transaaction</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {transactions.map((invoice) => (
                    <TableRow key={invoice.invoice}>
                      <TableCell className="font-medium">
                        {invoice.invoice}
                      </TableCell>
                      <TableCell>{invoice.paymentStatus}</TableCell>
                      <TableCell className="text-right">
                        {invoice.totalAmount}
                      </TableCell>
                    </TableRow>
                  ))}
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
            <ExpenseChart />
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
