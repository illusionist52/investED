import { Button } from "@/components/ui/button";
import React from "react";

function Goal() {
  return (
    <div className="flex flex-col gap-4 px-6 py-4 border rounded-2xl border-slate-300 ">
      <h2 className="text-3xl font-bold ">Goal</h2>
      <p> I wish to become a engineer</p>
      <Button className="bg-purple-400">Edit</Button>
    </div>
  );
}

export default Goal;
