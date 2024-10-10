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
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { addTransaction } from "@/api/addTransaction";
import { Calendar } from "@/components/ui/calendar"; // Ensure this import path is correct
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"; // Ensure this import path is correct
import { format } from "date-fns"; // Ensure date-fns is installed
import { CalendarCheck } from "lucide-react";

export function TransactionDialog({ onTransactionAdded }) {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { isSubmitting },
  } = useForm();

  const [transactionType, setTransactionType] = useState("Expense");
  const [resetDate, setResetDate] = useState(null); // Add state for the date
  const [open, setOpen] = useState(false); // State for dialog open/close

  const onSubmit = useCallback(
    async (data) => {
      const transactionData = {
        transaction_id: crypto.randomUUID(),
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        amount: parseFloat(data.amount),
        description: data.description,
        date: data.date || new Date().toISOString(), // Use selected date or current date
        user_id: '3490c27c-0c44-4eaa-9a9f-b4be58b80036', // Hardcoded user_id
        type: transactionType.toLowerCase(),
        category: data.category,
        category_icon: 'shopping_cart', // Hardcoded category_icon
      };

      try {
        const response = await addTransaction(transactionData);
        console.log(response);
        reset(); // Reset form after submission
        onTransactionAdded(); // Call the function to fetch transactions
        setOpen(false); // Close the dialog after submission
      } catch (error) {
        console.error("Error submitting transaction:", error);
      }
    },
    [reset, transactionType, onTransactionAdded]
  );

  const handleTabChange = useCallback((value) => {
    setTransactionType(value);
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
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
            <TabsTrigger value="expense" className="bg-purple-400 text-white">
              Expense
            </TabsTrigger>
            <TabsTrigger value="income" className="bg-purple-400 text-white">
              Income
            </TabsTrigger>
          </TabsList>
          <TabsContent value="expense">
            <Card>
              <CardHeader>
                <CardTitle>Expense Details</CardTitle>
                <CardDescription>Enter your expense details</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div>
                    <Label htmlFor="description">Description</Label>
                    <Input id="description" {...register("description")} />
                  </div>
                  <div>
                    <Label htmlFor="amount">Amount</Label>
                    <Input
                      id="amount"
                      type="number"
                      {...register("amount", { valueAsNumber: true })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="category">Category</Label>
                    <Input id="category" {...register("category")} />
                  </div>
                  <div>
                    <Label htmlFor="date">Transaction Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant={"outline"} className="w-full text-left">
                          {resetDate ? format(resetDate, "PPP") : "Pick a date"}
                          <CalendarCheck className="ml-auto h-4 w-4 opacity-45" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-2 rounded-lg bg-black">
                        <div className="bg-white text-black p-4 rounded-lg">
                          <Calendar
                            mode="single"
                            selected={resetDate}
                            onSelect={(date) => {
                              setValue("date", date);
                              setResetDate(date); // Set the selected date
                            }}
                            initialFocus
                          />
                        </div>
                      </PopoverContent>
                    </Popover>
                    <p className="text-sm text-gray-500">
                      Select a date for this transaction.
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="bg-purple-400" onClick={handleSubmit(onSubmit)} disabled={isSubmitting}>
                  Add Expense
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="income">
            <Card>
              <CardHeader>
                <CardTitle>Income Details</CardTitle>
                <CardDescription>Enter your income details</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div>
                    <Label htmlFor="description">Description</Label>
                    <Input id="description" {...register("description")} />
                  </div>
                  <div>
                    <Label htmlFor="amount">Amount</Label>
                    <Input
                      id="amount"
                      type="number"
                      {...register("amount", { valueAsNumber: true })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="category">Category</Label>
                    <Input id="category" {...register("category")} />
                  </div>
                  <div>
                    <Label htmlFor="date">Transaction Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant={"outline"} className="w-full text-left">
                          {resetDate ? format(resetDate, "PPP") : "Pick a date"}
                          <CalendarCheck className="ml-auto h-4 w-4 opacity-45" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-2 rounded-lg bg-black">
                        <div className="bg-white text-black p-4 rounded-lg">
                          <Calendar
                            mode="single"
                            selected={resetDate}
                            onSelect={(date) => {
                              setValue("date", date);
                              setResetDate(date); // Set the selected date
                            }}
                            initialFocus
                          />
                        </div>
                      </PopoverContent>
                    </Popover>
                    <p className="text-sm text-gray-500">
                      Select a date for this transaction.
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="bg-purple-400" onClick={handleSubmit(onSubmit)} disabled={isSubmitting}>
                  Add Income
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
