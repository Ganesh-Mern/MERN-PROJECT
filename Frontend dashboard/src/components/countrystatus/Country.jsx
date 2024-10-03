import React from "react";
import { MdStarRate } from "react-icons/md";
import { PiStarThin } from "react-icons/pi";

const Country = () => {
  const countries = [
    {
      name: "Pakistan",
      totalpurches: "1 M",
      totalreturn: "1 k",
      rating: "4.9",
    },
    { name: "India", totalpurches: "10 M", totalreturn: "3 k", rating: "4.2" },
    {
      name: "Palest...",
      totalpurches: "10 m",
      totalreturn: "29 K",
      rating: "4.9",
    },
  ];
  let name = countries.map((res) => res);
  console.log(name);

  return (
    <div className="min-h-[13rem] p-2 sm:p-4 bg-white  sm:col-span-6 sm:min-h-44  lg:col-span-8 bg-custom-bg-white rounded-xl shadow-[0px 2px 18.7px 0px rgba(0, 0, 0, 0.08)] ">
      <h1 className=" text-base mb-3 font-medium text-black  font-poppins">
        Country status
      </h1>
      <div className=" gap-2 h-auto   grid grid-cols-1 sm:grid-cols-12 w-full  ">
        <div className=" sm:col-span-9  w-full font-poppins  ">
          <table className="border-separate border-spacing-3 w-full ">
            <thead className="text-customGray">
              <tr>
                <td className="...">Country Name</td>
                <td className="...">Total Purchases</td>
                <td className="  ...">Total Return</td>
                <td className="  ...">Rating</td>
              </tr>
            </thead>

            {countries.map((county, index) => (
              <tbody key={index} className="text-sm font-medium">
                <tr>
                  <td className="  ">{county.name}</td>
                  <td className=" ">{county.totalpurches}</td>
                  <td className=" ">{county.totalreturn}</td>
                  <td className="  flex items-center gap-1">
                    {county.rating} <MdStarRate className="text-yellow-200" />
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
        <div className="  sm:col-span-3  ">
          <h1 className=" text-sm pt-4  text-center mb-2 font-medium text-customGray  font-poppins">
            Avg Rating
          </h1>
          <div className="flex   justify-center sm:justify-normal">
            <h1 className="text-2xl font-poppins font-semibold ">4.9</h1>
            <div className="flex flex-col ">
              <div className="flex ">
                <MdStarRate className="text-yellow-200" />
                <MdStarRate className="text-yellow-200" />
                <MdStarRate className="text-yellow-200" />
                <MdStarRate className="text-yellow-200" />
              </div>
              <h6 className="text-[0.7rem] text-customGray">Avg rating in last 12 month</h6>
            </div>
          </div>
          <div className="mt-3">
            <h1 className="text-center">Total Reviews</h1>
            <h1 className="text-2xl text-black font-semibold text-center">10M</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;
