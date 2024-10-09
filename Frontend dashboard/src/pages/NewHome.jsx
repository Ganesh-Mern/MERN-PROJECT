import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { images } from "../utils/images";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { footerItems, menuItems } from "../utils/menu.item";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosSearch } from "react-icons/io";
import { IoNotificationsOutline } from "react-icons/io5";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";
// import { images } from "../../utils/images";
// import DropDown from "../dropdown/DropDown";
// import { Link } from "react-router-dom";

const NewHome = () => {
//   const sidebarRef = useRef(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="flex h-screen">
    {/* Sidebar */}
    <div
      className={`fixed md:relative w-64 bg-gray-800 h-screen p-4 z-50 text-white transition-transform transform ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0 z-50`}
    >
      {/* Sidebar Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Sidebar</h2>
        {/* Close button for mobile */}
        <button
          className="md:hidden text-white"
          onClick={toggleSidebar}
        >
          X {/* Or any close icon */}
        </button>
      </div>
      {/* Sidebar Menu */}
      <ul className="mt-6">
        <li className="mb-4">Menu Item 1</li>
        <li className="mb-4">Menu Item 2</li>
        <li className="mb-4">Menu Item 3</li>
      </ul>
    </div>

    {/* Right side: header and content */}
    <div className="flex-1 flex flex-col">
      {/* Sticky Header */}
      <div className="sticky top-0 bg-white shadow-md p-4 z-10 flex items-center justify-between">
        {/* Toggle button for sidebar on medium devices */}
        <button className="md:hidden text-gray-600" onClick={toggleSidebar}>
          <GiHamburgerMenu size={24} />
        </button>
        <h1 className="text-xl font-bold">Dashboard</h1>
        <div className="flex items-center gap-4">
          <div className="relative flex bg-gray-100 rounded-full px-4 py-2">
            <input
              type="text"
              placeholder="Search..."
              className="hidden md:block bg-transparent outline-none"
            />
            <IoIosSearch size={24} />
          </div>
          <IoNotificationsOutline size={24} />
          <div className="w-10 h-10 rounded-full bg-black">
            {/* Profile Picture */}
          </div>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="overflow-auto flex-1 p-4">
        <div className="space-y-4">
          <div className="h-96 bg-gray-200 rounded-lg">Content Block 1</div>
          <div className="h-96 bg-gray-200 rounded-lg">Content Block 2</div>
          <div className="h-96 bg-gray-200 rounded-lg">Content Block 3</div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default NewHome;
