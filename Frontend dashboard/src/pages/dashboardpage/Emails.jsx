// eslint-disable-next-line no-unused-vars
import React from "react";

import { CiDollar } from "react-icons/ci";
import { FaUserGroup } from "react-icons/fa6";
import { VscIssueReopened } from "react-icons/vsc";
import { IoIosSearch } from "react-icons/io";
import { images } from "../../utils/images";
import { MdPushPin } from "react-icons/md";
import StatisticCard from "../../components/statistic/StatisticCard";

const Emails = () => {
  const staticsticCard = [
    {
      title: "Positive Masseges",
      value: "928M",
      direction: "up",
      description: "+112.8 than last month",
      icon: CiDollar,
    },
    {
      title: "Nagative Messeges",
      value: "928M",
      description: "+5.8 than last month",
      direction: "down",
      icon: VscIssueReopened,
    },
    {
      title: "Solved",
      value: "8K",
      description: "11.8% than last month",
      direction: "up",
      icon: FaUserGroup,
    },
    {
      title: "Unsolved",
      value: "1K",
      description: "4.8% than last month",
      direction: "down",
      icon: FaUserGroup,
    },
  ];

  const emailData = [
    {
      Profile: images.profile,
      name: "Naveed Aabas",
      text: "kevin please check our talk project team someone need you to do something",
      ping: true,
      time: "08:55",
      mark: "1",
    },
    {
      Profile: images.profile,
      name: "Naveed Aabas",
      text: "kevin please check our talk project team someone need you to do something",
      ping: false,
      time: "08:55",
    },
    {
      Profile: images.profile,
      name: "Naveed Aabas",
      text: "kevin please check our talk project team someone need you to do something",
      ping: true,
      time: "08:55",
      mark: "1",
      
    },
    {
      Profile: images.profile,
      name: "Naveed Aabas",
      text: "kevin please check our talk project team someone need you to do something",
      ping: true,
      time: "08:55",
      mark: "1",
      
    },
    {
      Profile: images.profile,
      name: "Naveed Aabas",
      text: "kevin please check our talk project team someone need you to do something",
      ping: false,
      time: "08:55",
    },
  ];
  return (
    <div className=" p-4 pt-10 w-full  bg-gray-100 pb-12">
      <div className="w-full">
        <h1 className="text-xl  font-poppins font-semibold">Status</h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4">
          {staticsticCard.map((item, index) => (
            <StatisticCard
              key={index}
              title={item.title}
              value={item.value}
              description={item.description}
              direction={item.direction}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
      <div className="w-full   mt-10    rounded-md">
        <div className="flex justify-between items-center   ">
          <h1 className="text-2xl font-bold font-poppins ">Users</h1>
          <div className="flex items-center gap-2 sm:gap-3 ">
            <div className=" py-[0.45rem]  sm:py-[0.1rem] rounded    min-w-12 sm:w-40    md:ml-0  flex sm:rounded bg-white">
              <button className=" px-2 text-customGray ">
                <IoIosSearch size={24} />
              </button>
              <input
                type="text"
                className=" py-2 bg-transparent hidden sm:inline outline-none  "
                placeholder="Search here..."
              />
            </div>
            <select className=" px-2 py-2 outline-none sm:px-2 sm:py-[0.6rem] bg-white  border-gray-300 rounded-md">
              <option>Yearly</option>
              <option>Monthly</option>
              <option>Weekly</option>
            </select>
          </div>
        </div>
        <div className="mt-4 bg-white flex flex-col items-center justify-between ">
          {emailData.map((item, index) => (
            <div key={index} className={`flex flex-col md:flex-row ${item.mark?"bg-gray-100":""} my-1 w-full items-center gap-4 justify-between p-2 `}>
              <div className="flex flex-col md:flex-row items-center gap-2 ">
                {item.ping?<MdPushPin size={24} className="text-red-600 rotate-45" />:""}
                <span className="w-6 h-6 rounded-full flex items-center">
                  <img
                    src={item.Profile} // Access profile from row
                    alt=""
                    className="w-6 h-6 rounded-full"
                  />
                </span>{" "}
                <h1 className="text-nowrap">{item.name}</h1>
                <div className="ml-4">
                  {item.text}
                </div>
              </div>
              <div className="flex items-center p-2 gap-2">
                {item.time}
                <span className={` ${item.mark? "":"opacity-0"} text-white w-5 h-5 flex items-center justify-center bg-blue-500 rounded-full`}>
                  {item.mark}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Emails;
