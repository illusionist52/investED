import { Button } from "@/components/ui/button";
import { Badge, MedalIcon } from "lucide-react";
import React from "react";

function Badges() {
  return (
    <div className="flex flex-col w-[30vw] gap-4 px-6 py-4 border rounded-2xl border-slate-300 ">
      <div className="flex items-center justify-between ">
        <h2 className="text-3xl font-bold ">Badges</h2>
        <Button className="bg-purple-400">View all</Button>
      </div>

      <div className="grid grid-cols-3 grid-rows-2 gap-3 ">
        <div className="flex flex-col gap-2 max-w-xl p-2 items-center border rounded-2xl">
          <MedalIcon color="#715729" className="h-24 w-24" />
          <p className="text-lg font-semibold text-center">Quiz Master</p>
        </div>
        <div className="flex flex-col gap-2 max-w-xl p-2 items-center border rounded-2xl">
          <MedalIcon color="#715729" className="h-24 w-24" />
          <p className="text-lg font-semibold text-center">Victory Debut</p>
        </div>
        <div className="flex flex-col gap-2 max-w-xl p-2 items-center border rounded-2xl">
          <MedalIcon color="#4C5A67" className="h-24 w-24" />
          <p className="text-lg font-semibold text-center">Quiz Master 2</p>
        </div>
        <div className="flex flex-col gap-2 max-w-xl p-2 items-center border rounded-2xl">
          <MedalIcon color="#F8B53C" className="h-24 w-24" />
          <p className="text-lg font-semibold text-center">Quiz Master 3</p>
        </div>
        <div className="flex flex-col gap-2 max-w-xl p-2 items-center border rounded-2xl">
          <MedalIcon color="#715729" className="h-24 w-24" />
          <p className="text-lg font-semibold text-center">Steady Saver</p>
        </div>
        <div className="flex flex-col gap-2 max-w-xl p-2 items-center border rounded-2xl">
          <MedalIcon color="#715729" className="h-24 w-24" />
          <p className="text-lg font-semibold text-center">
            Knowledge Conqueror
          </p>
        </div>
      </div>
    </div>
  );
}

export default Badges;
