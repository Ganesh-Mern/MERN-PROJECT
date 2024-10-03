import React from "react";
import { GoArrowDown, GoArrowUp } from "react-icons/go";

const StatisticCard = ({
  title,
  value,
  description,
  percentage,
  direction,
  icon: Icon
}) => {
  const parts = description.split(" ");
  const firstChar = parts[0] || "";
  console.log(firstChar);

  const restOfDescription = parts.slice(1).join(" ");
  console.log(restOfDescription);
  return (
    <div className=" border bg-white px-4 py-3 gap-2 min-h-40 min-w-44 rounded-xl  shadow-[0px 2px 18.7px 0px rgba(0, 0, 0, 0.08)] justify-center flex flex-col">
      <div className="flex gap-2 text-customGray">
        {" "}
        <Icon className="w-7 h-7" />
         <h2 className="text-xl ">{title}</h2>
      </div>
      {/* text-2xl flex items-center gap-4 font-semibold ${
          direction === "up" ? "text-green-500" : "text-red-500"
        } */}
      <p
        className={`${percentage ? `text-2xl flex items-center gap-4 font-semibold ${
          direction === "up" ? "text-green-500" : "text-red-500"
        }`:"text-black text-2xl flex items-center gap-4 font-semibold "}`}
      >
        {value}{" "}
        {
        percentage ? <span
        className={`text-sm flex items-center py-1 px-2 rounded-full  ${
          direction === "up"
            ? "bg-bg-1 text-blue-500"
            : "bg-red-500 text-white"
        }`}
      >
        {direction === "up" ? <GoArrowUp /> : <GoArrowDown />}
        {percentage}
      </span>:""
        }
      </p>
      <p className="font-medium font-poppins text-base fon">
        {firstChar && (
          <span
            className={`font-semibold ${
              direction === "up" ? " text-blue-400" : "text-red-500"
            }`}
            style={{
              padding: "0 4px",
              borderRadius: "4px",
            }}
          >
            {firstChar}
          </span>
        )}
        {restOfDescription}
      </p>
    </div>
  );
};

export default StatisticCard;
