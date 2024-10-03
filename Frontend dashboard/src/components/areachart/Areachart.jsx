import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Areachart = () => {
   const data = [
    {
      name: "Sun",
      joined: 100, // 1M
      left: 10, // 10k
      free: 50, // 50k
    },
    {
      name: "Mon",
      joined: 90, // 80k
      left: 10, // 10k
      free: 50, // 50k
    },
    {
      name: "Tue",
      joined: 50, // 130k
      left: 10, // 10k
      free: 50, // 50k
    },
    {
      name: "Wed",
      joined: 50, // 90k
      left: 10, // 10k
      free: 50, // 50k
    },
    {
      name: "Thu",
      joined: 30, // 90k
      left: 10, // 10k
      free: 50, // 50k
    },
    {
      name: "Fri",
      joined: 30, // 60k
      left: 10, // 10k
      free: 50, // 50k
    },
    {
      name: "Sat",
      joined: 0, // 60k
      left: 10, // 10k
      free: 50, // 50k
    },
  ];
  return (
    <div className="min-h-[15rem] flex flex-col bg-white p-4 sm:col-span-6 sm:min-h-44 lg:col-span-4 bg-custom-bg-white rounded-xl shadow-[0px 2px 18.7px 0px rgba(0, 0, 0, 0.08)]">
      <div className="w-full justify-between mb-4 sm:mb-7  flex flex-col sm:flex-row sm:items-center">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-semibold">Sale Ratio</h2>
        </div>
        <div className="flex items-center   gap-1 sm:gap-4">
        <select className="p-1 bg-gray-100  border-gray-300 rounded-md">
            <option>This Week</option>
            <option>Monthly</option>
            <option>Weekly</option>
          </select>
        </div>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          className="w-full h-full"
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="1" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="joined" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Areachart;
