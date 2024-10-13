// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Button from "../button/Button";
import ToggleButton from "../togglebutton/ToggleButton"
const AddPaln = () => {
  const data = [
    {
      left: [
        "Multiple device",
        "Set limit",
        "Usage Time",
        "Live location",
        "Manage apps",
        "Add Location",
        "Hear Surrounding",
        "Ai Chat Bot",
        "Control Volume",
        "Alarm and remainder",
        "Task managment",
      ],
      right: [
        "Call managment",
        "Call management",
        "Web block",
        "App block",
        "Most Usage Apps",
        "Chat",
        "Usage management",
      ],
    },
  ];

  return (
    <div className=" pt-10 w-full   h-full p-4 ">
      <div className="flex w-full justify-between">
        <h1 className="text-xl font-bold text-center ">Add Plans</h1>
        <div className="flex gap-2 ">
          <Button text={"6 months"} bg={"bg-[#006FEC] text-white "} />
          <Button text={"Yearly"} bg={"bg-gray-300"} />
        </div>
      </div>
      <div className="bg-white min-h-[30rem] w-full sm:w-full md:w-full lg:w-3/5 shadow-xl mt-4 rounded-xl p-4 pt-10 ">
        <div className=" items-center justify-center grid sm:grid-cols-2 gap-4 mb-3 px-10">
          <input
            type="text"
            placeholder="Enter Plan Name"
            className=" p-2 bg-bg-search outline-none "
          />
          <input
            type="text"
            placeholder="Enter Price"
            className="p-2 bg-bg-search sm:w-auto outline-none"
          />
        </div>
        <h1 className="font-poppins text-lg font-medium">All Features</h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 w-full  justify-between sm:flex-row  sm:gap-4">
          {data.map((item, index) => (
            <ul key={index} className="  ">
              {item.left.map((leftItem, index) => (
                <li key={index} className="flex  mb-2 gap-1 sm:gap-4 items-center font-poppins font-medium text-sm sm:text-lg ">
                  <ToggleButton /> <h6 className="ml-2">{leftItem}</h6> 
                </li>
              ))}
            </ul>
          ))}
          {data.map((item, index) => (
            <ul key={index} className="">
              {item.right.map((right, index) => (
                <li key={index} className="flex  mb-2 gap-1 sm:gap-4 items-center font-poppins font-medium text-sm sm:text-lg ">
                  <ToggleButton  /> <h6 className="ml-2">{right}</h6>
                </li>
              ))}
            </ul>
          ))}
        </div>
        <div className="flex justify-end items-center  gap-2">
            <Button text={"Edit"} bg={"bg-bg-search px-10 py-1  font-poppins font-medium text-lg"}/>
            <Button text={"Done"}bg={"bg-[#006FEC] text-white px-10 py-1 font-poppins font-medium text-lg"}/>
        </div>
      </div>
      
    </div>
  );
};

export default AddPaln;
