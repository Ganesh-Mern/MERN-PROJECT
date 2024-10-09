import React, { useEffect, useRef } from "react";
import { RxCross2, RxDashboard } from "react-icons/rx";
import logo from "../../assets/images/Asset 12.png";
import { Link } from "react-router-dom";
import { FaUsers } from "react-icons/fa";
import { TbMailFilled } from "react-icons/tb";
import { FiLogOut } from "react-icons/fi";
import { IoIosSettings } from "react-icons/io";
import { GrPlan } from "react-icons/gr";
const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  console.log("sidebar", sidebarOpen);
  const sidebarRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        closeSidebar(); // Close sidebar if clicked outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeSidebar]);

  return (
    <div className="flex h-screen">
      <div
        ref={sidebarRef}
        className={`fixed md:relative w-64 bg-white h-screen p-4 z-50 text-black transition-transform transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 z-50`}
      >
        <div
          className="flex items-center  mt-7 w-full  gap-4"
          // style={{ fontSize: "18px" }}
        >
          <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center ">
            <img src={logo} alt="Logo" className="w-12 h-12" />
          </div>
          <span className=" text-base text-black font-bold text-nowrap">
            MQ Parental Control
          </span>
          {sidebarOpen ? (
            <RxCross2 className="" onClick={() => closeSidebar()} />
          ) : (
            ""
          )}
        </div>
        <div className=" py-2 text-lg  mt-11 uppercase font-poppins text-[18px] font-medium leading-[12px] ">
          Menu
        </div>
        <nav className="flex-1">
          <ul>
            <li>
              <Link
                to="/overview"
                onClick={() => closeSidebar()}
                className="block text-customGray font-normal leading-7 items-center flex  gap-3 text-left p-4 font-poppins text-[1.13rem] rounded-md hover:bg-[#006FEC] hover:text-white transition-colors duration-300"
              >
                <RxDashboard size={24} className="text-black" />
                Overview
              </Link>
            </li>
            <li>
              <Link
                to="/plans"
                onClick={() => closeSidebar()}
                className="block text-customGray font-normal leading-7 items-center flex  gap-3 text-left p-4 font-poppins text-[1.13rem] rounded-md hover:bg-[#006FEC] hover:text-white transition-colors duration-300"
              >
                <GrPlan size={24} className="text-black" />
                Plans
              </Link>
            </li>
            <li>
              <Link
                to="/users"
                onClick={() => closeSidebar()}
                className="block text-customGray font-normal leading-7 items-center flex  gap-3 text-left p-4 font-poppins text-[1.13rem] rounded-md hover:bg-[#006FEC] hover:text-white transition-colors duration-300"
              >
                <FaUsers className="text-black" size={24} />
                Users
              </Link>
            </li>
            <li>
              <Link
                to="/emails"
                onClick={() => closeSidebar()}
                className="block text-customGray font-normal leading-7 items-center flex  gap-3 text-left p-4 font-poppins text-[1.13rem] rounded-md hover:bg-[#006FEC] hover:text-white transition-colors duration-300"
              >
                <TbMailFilled
                  className="text-black hover:text-white"
                  size={24}
                />
                Emails
              </Link>
            </li>
          </ul>
        </nav>
        <div className="w-full mb-2">
          <ul>
            <li>
              <Link
                to="/settings"
                onClick={() => closeSidebar()}
                className="block  px-2 font-medium leading-7 items-center flex  gap-3 text-left py-2  font-poppins text-[1.13rem] rounded-md hover:bg-[#006FEC] hover:text-white transition-colors duration-300"
              >
                <IoIosSettings size={22} />
                Settings
              </Link>
            </li>
            <li>
              <Link
                to="/logout"
                onClick={() => closeSidebar()}
                className="block px-2 font-medium leading-7 items-center flex  gap-3 text-left py-2 font-poppins text-[1.13rem] rounded-md hover:bg-[#006FEC] hover:text-white transition-colors duration-300"
              >
                <FiLogOut size={22} />
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
