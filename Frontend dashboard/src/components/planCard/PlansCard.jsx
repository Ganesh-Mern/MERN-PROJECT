import React, { useState } from "react";
import Button from "../button/Button";

const PlansCard = ({ plans, days, data, select, index, selectIndex }) => {
  // console.log(select);

  // select(1)

  return (
    <div
      onClick={() => select(index)}
      className="justify-between flex flex-col min-h-[30rem] min-w-[20rem] sm:min-w-[20rem] sm:min-h-[25rem] md:min-w-[15rem] bg-custom-bg-white px-4 py-3 gap-2  rounded-xl  shadow-xl"
    >
      {/* <h1 className={`text-center text-3xl ${selectIndex===index? "text-[#006FEC]":"text-black" } w-full font-poppins `}>{item.plansName}</h1> */}
      <div>
        <div className="flex items-center ">
          <h1
            className={`text-center text-3xl font-semibold  w-full font-poppins ${
              selectIndex === index ? "text-[#006FEC]" : "text-black"
            }  `}
          >
            {plans}
          </h1>
          <span
            className={`border border-[#006FEC] p-3 rounded-full text-nowrap relative float-right text-sm font-medium  ${
              selectIndex === index ? "text-[#006FEC]" : "text-black"
            } `}
          >
            {days}
          </span>
        </div>
        <div className="p-4 ">
          <ul className="list-disc">
            {data.map((item, index) => (
              <li
                key={index}
                className="font-poppins font-medium text-base mb-3 "
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Button
        text={"Edit"}
        bg={"bg-[#006FEC] text-white py-2 mb-4 font-poppins  text-xl  "}
      />
    </div>
  );
};

export default PlansCard;
