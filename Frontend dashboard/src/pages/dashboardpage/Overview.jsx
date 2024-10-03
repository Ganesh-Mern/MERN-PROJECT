import React from "react";
import StatisticCard from "../../components/statistic/StatisticCard";
import { CiDollar } from "react-icons/ci";
import { FaUserGroup } from "react-icons/fa6";
import { VscIssueReopened } from "react-icons/vsc";
import Barchart from "../../components/barchart/Barchart";
import StatsCard from "../../components/StatsCard/StatsCard";
import Country from "../../components/countrystatus/Country";
import Areachart from "../../components/areachart/Areachart";

const Overview = () => {
  const staticsticCard=[{
    title:"Total Earning",
    value:"$926.41",
    direction:"up",
    percentage:"12.8%",
    description:"+112.8 than last month",
    icon:CiDollar 
  },{
    title:"Total Return",
          value:"$428.41",
          description:"+5.8 than last month",
          valueColor:"text-red-500",
          direction:"down",
          percentage:"08.0%",
          icon:VscIssueReopened 
  },
  {
    title:"Total Add",
    value:"$443",
    description:"11.8% than last month",
    direction:"up",
    percentage:"11.8%",
    icon:FaUserGroup
  },
  {
    title:"Total Left",
    value:"$12",
    description:"4.8% than last month",
    valueColor:"text-red-500",
    direction:"down",
    percentage:"4.8%",
    icon:FaUserGroup
  }
]
  return (
    <div className=" px-4 pt-10 w-full  bg-gray-100 pb-12">
      <h1 className="text-xl  font-poppins font-semibold">Overview</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4">
        {
          staticsticCard.map((item,index)=>(
            <StatisticCard 
            key={index}
            title={item.title}
            value={item.value}
            description={item.description}
            direction={item.direction}
            icon={item.icon} 
            percentage={item.percentage} />

          ))
        }
      </div>
      <div className=" gap-4  mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12  ">
        <Barchart />
        <StatsCard />
      </div>
      <div className=" gap-4  mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12  ">
        <Country />
       
          <Areachart/>
       
      </div>
    </div>
  );
};

export default Overview;
