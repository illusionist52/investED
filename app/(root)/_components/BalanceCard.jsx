"use client"
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "10 Aug", uv: 4000, pv: 2400, amt: 2400 },
  { name: "11 Aug", uv: 3000, pv: 1398, amt: 2210 },
  { name: "12 Aug", uv: 2000, pv: 9800, amt: 2290 },
  { name: "13 Aug", uv: 2780, pv: 3908, amt: 2000 },
  { name: "14 Aug", uv: 1890, pv: 4800, amt: 2181 },
  { name: "15 Aug", uv: 2390, pv: 3800, amt: 2500 },
  { name: "16 Aug", uv: 3490, pv: 4300, amt: 2100 },
];

function BalanceCard() {
  return (
    <div className="flex h-[40vh] w-[35vw] flex-col items-start gap-4 rounded-xl bg-white p-6">
      <div className="flex flex-col gap-1 items-start">

      <h1 className="text-3xl font-semibold">Total Balance</h1>
      <p className="font-light text-sm pl-2">Last week</p>
      </div>

      <div className="w-[100%] h-full">
        <ResponsiveContainer width="100%" height={180}>
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default BalanceCard;
