import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosSearch } from "react-icons/io";
import { IoNotificationsOutline } from "react-icons/io5";
import profile from "../../assets/images/oguz-yagiz-kara-ej59TdVxqCk-unsplash.jpg"
import DropDown from "../dropdown/Dropdown";


const Header = ({ sidebarOpen, openSidebar }) => {
  const languageItems = [
    {
      label: 'English',
      key: 'en',
    },
    {
      label: 'Spanish',
      key: 'es',
    },
    {
      label: 'French',
      key: 'fr',
    },
    {
      label: 'German',
      key: 'de',
    },
  ];
  

  return (
    <div className="sticky top-0 bg-white shadow-md p-4 z-10 flex items-center justify-between">
      <div className="flex  h-full  w-2/5 sm:w-1/4 items-center gap-4">
        <GiHamburgerMenu size={24} className="inline md:hidden" onClick={() => openSidebar()} />
        <h1 className="text-xl font-bold text-center">Dashboard</h1>
      </div>
      <div className="flex gap-2 sm:gap-3 w-full   justify-end sm:justify-end md:justify-end lg:justify-center ">
        <div className="flex rounded-full sm:rounded   bg-[rgba(245,246,250,1)]">
          <input
            type="text"
            className="pl-1 bg-[rgba(245,246,250,1)] w-24 md:w-32 lg:w-60 py-2  hidden sm:inline outline-none  "
            placeholder="Search here..."
          />
          <button className="px-2 flex justify-start md:justify-end lg:justify-end  items-center w-full ">
            <IoIosSearch size={24} />
          </button>
        </div>
        <div>
          <button className="py-2 px-2 sm:py-3 sm:px-3 rounded-full sm:rounded bg-[rgba(245,246,250,1)] hover:bg-gray-200">
            <IoNotificationsOutline size={24} />
          </button>
        </div>
        <div className="py-[0.7rem] " >
          <DropDown data={languageItems}/>
        </div>
        <div className=" flex items-center gap-2 md:ml-0 xl:ml-2   ">
          <div className="w-10 h-10  rounded-full bg-black ">
          <img src={profile} alt=""  className="object-cover rounded-full w-full h-full"/>
          </div>
          <div className="hidden md:hidden lg:flex flex-col text-left">
            <span className="font-semibold">John Doe</span>
            <span className="text-sm text-gray-600">john.doe@example.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
