import React, { useState } from "react";
import paypal from "../../assets/images/paypal-3384015_1920 (1).png";
import mastercard from "../../assets/images/mastercard (1).svg";
import visa from "../../assets/images/dc139ffdf87e0bfe4b53f1afc7126e34.png";
import { Link, Outlet } from "react-router-dom";
import PlansCard from "../../components/planCard/PlansCard";
import Button from "../../components/button/Button";
import Payment from "../../components/pyament/Payment";

const Plans = () => {
  const plans = [
    {
      plansName: "Free",
      days: "14 days",
      data: [
        "One device",
        "Set limit",
        "Manage apps",
        "Live location",
        "Alarm and reminder",
        "Task managment",
        "Screen Capture live view, recod a video ",
        "Call managment",
        "Web block",
        "Chat",
        "Usage management",
      ],
    },

    {
      plansName: "Plan 1",
      days: "$80",
      data: [
        "One device",
        "Set limit",
        "Manage apps",
        "Live location",
        "Alarm and reminder",
        "Task managment",
      ],
    },
    {
      plansName: "Plan 1",
      days: "$80",
      data: [
        "One device",
        "Set limit",
        "Manage apps",
        "Live location",
        "Alarm and reminder",
        "Task managment",
        "Screen Capture live view, recod a video ",
        "Call managment",
        "Web block",
        "Chat",
        "Usage management",
      ],
    },
  ];
  const paymentMethod = [
    {
      type: "Paypal",
      logo: paypal,
    },
    {
      type: "Visa",
      logo: visa,
    },
    {
      type: "Master Card",
      logo: mastercard,
    },
    {
      type: "",
      icon: "",
    },
  ];
  const [selectIndex, setSelectIndex] = useState(0);
  const select = (index) => {
    console.log(index);
    setSelectIndex(index);
  };

  return (
    <div className="px-4 pt-10 w-full   h-screen pb-16 ">
      <div className="flex w-full justify-between">
        <h1 className="text-xl font-bold text-center ">Plans</h1>
        <div className="flex gap-2 ">
          <Button text={"6 months"} bg={"bg-[#006FEC] text-white "} />
          <Button text={"Yearly"} bg={"bg-gray-300"} />
        </div>
      </div>
      <div className="w-full grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3   gap-3 mt-10">
        {plans.map((item, index) => (
          <PlansCard
            key={index}
            index={index}
            plans={item.plansName}
            days={item.days}
            data={item.data}
            select={select}
            selectIndex={selectIndex}
          />
        ))}

        <Link to={"/addplan"} className="flex items-center justify-center border-dashed border-4 font-poppins text-3xl min-h-[10rem] mt-5 sm:mt-0">
          <div >
            Add Plans
          </div>
        </Link>
      </div>
      <div className=" grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 w-full shadow-xl min-h-[12rem] bg-white px-4 py-3 gap-2  rounded-xl  mt-11">
        {paymentMethod.map((item, index) => (
          <Payment type={item.type} logo={item.logo} />
        ))}
      </div>
      <div className="p-4">
        <Outlet  />
      </div>
      {/* <AddPaln /> */}
    </div>
  );
};

export default Plans;
