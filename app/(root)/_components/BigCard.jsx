import React from "react";

function BigCard({ data }) {
  return (
    <div className="flex items-center justify-between h-[20vh] w-[20vw] rounded-3xl bg-white">
      <div className="flex flex-col items-start pl-4 gap-4">
        <h2 className="text-md font-bold">Total {data.type} Amount</h2>
        <h1 className="text-3xl font-bold">₹{data.amount}</h1>
      </div>
      <div
        className={`w-[10vw] h-[16vh] rounded-l-full ${
          data.type === "Income"
            ? "bg-green-400"
            : data.type === "Expense"
            ? "bg-red-400"
            : "bg-blue-400"
        }`}
      ></div>
    </div>
  );
}

export default BigCard;
