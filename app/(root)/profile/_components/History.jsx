import { CoinsIcon } from "lucide-react";
function History() {
  return (
    <div className="w-[800px] border flex flex-col gap-4 px-4 py-2 border-slate-300 rounded-2xl">
      <h2 className="text-3xl font-bold">Virtual Currency History</h2>
      <div className="flex flex-col gap-2  items-start">
        <div className="flex items-center px-2 w-full justify-between">
          <div className="flex items-center gap-3">
            <CoinsIcon className="h-[32px] w-[32px]" />
            <p className="text-xl font-medium">Completed a daily chore</p>
          </div>
          <div className=" flex gap-2 items-center">
            <span className="px-4 py-2 bg-opacity-50 border-green-700 border-2 bg-green-300 rounded-xl text-[17px] font-medium">
              +50
            </span>
            <p className="text-lg font-normal">24 June</p>
          </div>
        </div>
        <div className="flex items-center px-2 w-full justify-between ">
          <div className="flex items-center gap-3">
            <CoinsIcon className="h-[32px] w-[32px]" />
            <p className="text-xl font-medium">InvestMania entry fee</p>
          </div>
          <div className=" flex gap-2 items-center">
            <span className="px-4 py-2 bg-opacity-50 border-red-700 border-2 bg-red-300 rounded-xl text-[17px] font-medium">
              -500
            </span>
            <p className="text-lg font-normal">24 June</p>
          </div>
        </div>
        <div className="flex items-center px-2 w-full justify-between ">
          <div className="flex items-center gap-3">
            <CoinsIcon className="h-[32px] w-[32px]" />
            <p className="text-xl font-medium">Quiz Score</p>
          </div>
          <div className=" flex gap-2 items-center">
            <span className="px-4 py-2 bg-opacity-50 border-green-700 border-2 bg-green-300 rounded-xl text-[17px] font-medium">
              +100
            </span>
            <p className="text-lg font-normal">25 June</p>
          </div>
        </div>
        <div className="flex items-center px-2 w-full justify-between ">
          <div className="flex items-center gap-3">
            <CoinsIcon className="h-[32px] w-[32px]" />
            <p className="text-xl font-medium">Daily Check-Ins</p>
          </div>
          <div className=" flex gap-2 items-center">
            <span className="px-4 py-2 bg-opacity-50 border-green-700 border-2 bg-green-300 rounded-xl text-[17px] font-medium">
              +10
            </span>
            <p className="text-lg font-normal">27 June</p>
          </div>
        </div>
        <div className="flex items-center px-2 w-full justify-between ">
          <div className="flex items-center gap-3">
            <CoinsIcon className="h-[32px] w-[32px]" />
            <p className="text-xl font-medium">Completed a Module</p>
          </div>
          <div className=" flex gap-2 items-center">
            <span className="px-4 py-2 bg-opacity-50 border-green-700 border-2 bg-green-300 rounded-xl text-[17px] font-medium">
              +100
            </span>
            <p className="text-lg font-normal">27 June</p>
          </div>
        </div>
        <div className="flex items-center px-2 w-full justify-between ">
          <div className="flex items-center gap-3">
            <CoinsIcon className="h-[32px] w-[32px]" />
            <p className="text-xl font-medium">Completed a Module</p>
          </div>
          <div className=" flex gap-2 items-center">
            <span className="px-4 py-2 bg-opacity-50 border-green-700 border-2 bg-green-300 rounded-xl text-[17px] font-medium">
              +100
            </span>
            <p className="text-lg font-normal">29 June</p>
          </div>
        </div>
        <div className="flex items-center px-2 w-full justify-between ">
          <div className="flex items-center gap-3">
            <CoinsIcon className="h-[32px] w-[32px]" />
            <p className="text-xl font-medium">Task completed</p>
          </div>
          <div className=" flex gap-2 items-center">
            <span className="px-4 py-2 bg-opacity-50 border-green-700 border-2 bg-green-300 rounded-xl text-[17px] font-medium">
              +100
            </span>
            <p className="text-lg font-normal">30 June</p>
          </div>
        </div>
        <div className="flex items-center px-2 w-full justify-between ">
          <div className="flex items-center gap-3">
            <CoinsIcon className="h-[32px] w-[32px]" />
            <p className="text-xl font-medium">Completed a Module</p>
          </div>
          <div className=" flex gap-2 items-center">
            <span className="px-4 py-2 bg-opacity-50 border-green-700 border-2 bg-green-300 rounded-xl text-[17px] font-medium">
              +100
            </span>
            <p className="text-lg font-normal">30 June</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default History;
