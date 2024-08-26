"use client"

import { ComposedChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Line } from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Page H',
    uv: 4200,
    pv: 3300,
    amt: 2400,
  },
  {
    name: 'Page I',
    uv: 2900,
    pv: 5100,
    amt: 2600,
  },
  {
    name: 'Page J',
    uv: 3700,
    pv: 3900,
    amt: 2800,
  },
];

function ExpenseChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <ComposedChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
        <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
        <Tooltip />
        <Legend />
        <Bar yAxisId="left" dataKey="pv" fill="#afaced" radius={[20, 20, 0, 0]} />
        <Bar yAxisId="right" dataKey="uv" fill="#b9eecd" radius={[20, 20, 0, 0]} />
        <Line yAxisId="left" type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
        <Line yAxisId="right" type="monotone" dataKey="uv" stroke="#82ca9d" strokeWidth={2} />
      </ComposedChart>
    </ResponsiveContainer>
  )
}

export default ExpenseChart;