
import React from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Barchart = () => {
  const data = [
    {
      name: "PAK",
      joined: 100, // 1M
      left: 10, // 10k
      free: 50, // 50k
    },
    {
      name: "IND",
      joined: 80, // 80k
      left: 10, // 10k
      free: 50, // 50k
    },
    {
      name: "PEL",
      joined: 60, // 130k
      left: 10, // 10k
      free: 50, // 50k
    },
    {
      name: "UK",
      joined: 90, // 90k
      left: 10, // 10k
      free: 50, // 50k
    },
    {
      name: "USA",
      joined: 70, // 90k
      left: 10, // 10k
      free: 50, // 50k
    },
    {
      name: "BNG",
      joined: 70, // 60k
      left: 10, // 10k
      free: 50, // 50k
    },
  ];

  return (
    <div className="min-h-[15rem] p-4 bg-white flex flex-col  sm:col-span-6 sm:min-h-80 lg:col-span-8 bg-custom-bg-white rounded-xl shadow-[0px 2px 18.7px 0px rgba(0, 0, 0, 0.08)] flex items-center justify-center">
      <div className="w-full justify-between mb-4 sm:mb-7  flex flex-col sm:flex-row sm:items-center">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-semibold">Statistics</h2>
          
        </div>
        <div className="flex items-center   gap-1 sm:gap-4">
          <div className="flex items-center mr-4">
            <div className="w-3 h-3 rounded-full bg-[#1E40AF] mr-0 sm:mr-1"></div>
            <span className="text-sm text-gray-600 font-medium font-poppins">Joined</span>
          </div>
          <div className="flex items-center mr-4">
            <div className="w-3 h-3 rounded-full bg-[#93C5FD] mr-0 sm:mr-1"></div>
            <span className="text-sm text-gray-600 font-medium font-poppins">Left</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-[#BFDBFE] mr-0 sm:mr-1"></div>
            <span className="text-sm text-gray-600 font-medium font-poppins">Free</span>
          </div>
          <select className="p-1 bg-gray-100  border-gray-300 rounded-md">
            <option>Yearly</option>
            <option>Monthly</option>
            <option>Weekly</option>
          </select>
        </div>
      </div>
      <ResponsiveContainer width="100%" height="100%" >
        <BarChart
        
          data={data}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="1 1" />
          <XAxis dataKey="name" />
          <YAxis />
          {/* <Tooltip />  */}
          {/* <Legend /> */}
          <Bar
            dataKey="joined"
            fill="rgba(55, 124, 246, 1)"
            radius={[9,9,9,9]}
            barSize={24}
            activeBar={<Rectangle fill="pink" stroke="rgba(55, 124, 246, 1)"  />}
          />
          <Bar
            dataKey="left"
            fill=" rgba(149, 224, 251, 1)"
            radius={[9,9,9,9]}
            barSize={24}
            activeBar={<Rectangle fill="gold" stroke="rgba(149, 224, 251, 1)"  />}
          />
          <Bar
            dataKey="free"
            fill=" rgba(204, 226, 252, 1)"
            radius={[9,9,9,9]}
            barSize={24}
            activeBar={<Rectangle fill="gold" stroke="rgba(204, 226, 252, 1)"  />}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Barchart;
