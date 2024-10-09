"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React, { useCallback, useState } from "react";
import { useForm } from "react-hook-form";

export function TransactionDialog() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { isSubmitting },
    reset,
  } = useForm();

  const [transactionType, setTransactionType] = useState("expense");

  const onSubmit = useCallback(
    (data) => {
      console.log(`Transaction created: ${transactionType}`, data);
      reset(); // Reset form after submission
    },
    [reset, transactionType]
  );

  const handleTabChange = useCallback((value) => {
    setTransactionType(value);
  }, []);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-purple-400 text-white" variant="outline">
          Add a Transaction
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add a Transaction</DialogTitle>
        </DialogHeader>
        <Tabs
          defaultValue="expense"
          onValueChange={handleTabChange}
          className="w-full"
        >
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger
              value="expense"
              className={"bg-red-500 text-white"}
            >
              Expense
            </TabsTrigger>
            <TabsTrigger
              value="income"
              className={"bg-green-500 text-white"}
            >
              Income
            </TabsTrigger>
          </TabsList>

          {/* Expense Tab */}
          <TabsContent value="expense">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Expense</CardTitle>
                  <CardDescription>
                    Record your expenses here. Click save when you're done.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label htmlFor="description">Description</Label>
                    <Input
                      id="description"
                      {...register("description", { required: true })}
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="amount">Amount</Label>
                    <Input
                      id="amount"
                      type="number"
                      {...register("amount", { required: true })}
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="category">Category</Label>
                    <Input
                      id="category"
                      {...register("category", { required: true })}
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="type">Type of Transaction</Label>
                    <Input
                      id="type"
                      value={transactionType === "expense" ? "Expense" : "Income"}
                      disabled
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Saving..." : "Save changes"}
                  </Button>
                </CardFooter>
              </Card>
            </form>
          </TabsContent>

          {/* Income Tab */}
          <TabsContent value="income">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Income</CardTitle>
                  <CardDescription>
                    Record your income here. Click save when you're done.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label htmlFor="description">Description</Label>
                    <Input
                      id="description"
                      {...register("description", { required: true })}
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="amount">Amount</Label>
                    <Input
                      id="amount"
                      type="number"
                      {...register("amount", { required: true })}
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="category">Category</Label>
                    <Input
                      id="category"
                      {...register("category", { required: true })}
                    />
                  </div>
                  {/* <div className="space-y-1">
                    <Label htmlFor="type">Type of Transaction</Label>
                    <Input
                      id="type"
                      value={transactionType === "expense" ? "Expense" : "Income"}
                      disabled
                    />
                  </div> */}
                </CardContent>
                <CardFooter>
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Saving..." : "Save changes"}
                  </Button>
                </CardFooter>
              </Card>
            </form>
          </TabsContent>
        </Tabs>
        <DialogFooter>
          <Button type="submit" form="transactionForm" disabled={isSubmitting}>
            {isSubmitting ? "Saving..." : "Save changes"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
