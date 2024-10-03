import React from "react";

const StatsCard = () => {
  const data = {
    totalValue: "$928.41",
    countries: [
      { name: "Pakistan", freeUsers: "2M", paidUsers: "1M" },
      { name: "INDIA", freeUsers: "4M", paidUsers: "3M" },
      { name: "PALEST...", freeUsers: "80K", paidUsers: "29K" },
    ],
  };

  return (
    <div className="min-h-[15rem] bg-white flex flex-col  p-4 sm:col-span-6 sm:min-h-80 lg:col-span-4 bg-custom-bg-white rounded-xl shadow-[0px 2px 18.7px 0px rgba(0, 0, 0, 0.08)]">
      <div className="text-lg font-semibold text-customGray mb-4 font-poppins">Total value</div>
      <div className="text-4xl font-bold mb-6 font-poppins">{data.totalValue}</div>
      <div className="text-lg font-semibold mb-2 font-poppins">Most Usage Countries</div>
      {data.countries.map((country, index) => (
        <div
          key={index}
          className="flex gap-2 my-2 justify-between text-customGray"
        >
          <div className="font-medium font-poppins ">{country.name}</div>

          <div className=" text-center font-poppins">
            Free users <span className="text-black block">{country.freeUsers}</span> 
          </div>
          <div className="text-center font-poppins ">Paid users <span className="text-black block">{country.paidUsers}</span> </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCard;
