import React from "react";
import { IoIosSearch } from "react-icons/io";
import profile from "../../assets/images/oguz-yagiz-kara-ej59TdVxqCk-unsplash.jpg";
import TableComponent from "../../components/table/TableComponent";


const Users = () => {
  const column=["ID","E-mail","Joined","Last Join","Country","Phone number","Package","Role"]
  const data = [
    {
      "ID": "Naveed Aabass",
      "E-mail": "ahmedali9054@gamil.com",
      "Joined": "06/03/2020",
      "Last Join": "1 month ago",
      "Country": "Indoneshia",
      "Phone number": "+92-32030030303",
      "Package": "6month",
      "Role": "Gaurdian",
      "profile": profile,
    },
    {
      "ID": "Naveed Aabass",
      "E-mail": "ahmedali9054@gamil.com",
      "Joined": "06/03/2020",
      "Last Join": "1 month ago",
      "Country": "Indoneshia",
      "Phone number": "+92-32030030303",
      "Package": "6month",
      "Role": "Gaurdian",
      "profile": profile,
    },
    {
      "ID": "Naveed Aabass",
      "E-mail": "ahmedali9054@gamil.com",
      "Joined": "06/03/2020",
      "Last Join": "1 month ago",
      "Country": "Indoneshia",
      "Phone number": "+92-32030030303",
      "Package": "6month",
      "Role": "Gaurdian",
      "profile": profile,
    },
    {
      "ID": "Naveed Aabass",
      "E-mail": "ahmedali9054@gamil.com",
      "Joined": "06/03/2020",
      "Last Join": "1 month ago",
      "Country": "Indoneshia",
      "Phone number": "+92-32030030303",
      "Package": "6month",
      "Role": "Gaurdian",
      "profile": profile,
    },
    {
      "ID": "Naveed Aabass",
      "E-mail": "ahmedali9054@gamil.com",
      "Joined": "06/03/2020",
      "Last Join": "1 month ago",
      "Country": "Indoneshia",
      "Phone number": "+92-32030030303",
      "Package": "6month",
      "Role": "Gaurdian",
      "profile": profile,
    },
    {
      "ID": "Naveed Aabass",
      "E-mail": "ahmedali9054@gamil.com",
      "Joined": "06/03/2020",
      "Last Join": "1 month ago",
      "Country": "Indoneshia",
      "Phone number": "+92-32030030303",
      "Package": "6month",
      "Role": "Gaurdian",
      "profile": profile,
    },
    {
      "ID": "Naveed Aabass",
      "E-mail": "ahmedali9054@gamil.com",
      "Joined": "06/03/2020",
      "Last Join": "1 month ago",
      "Country": "Indoneshia",
      "Phone number": "+92-32030030303",
      "Package": "6month",
      "Role": "Gaurdian",
      "profile": profile,
    },
   
  ];
  return (
    <div className=" w-full   h-screen  ">
      <div className="mt-10 mx-4  p-4 shadow-xl rounded-lg flex flex-col ">
        <div className="flex justify-between items-center pb-4 border-b-2">
          <h1 className="text-2xl font-bold font-poppins ">Users</h1>
          <div className="flex items-center gap-2 sm:gap-3 ">
            <div className=" py-[0.45rem]  sm:py-[0.1rem] rounded    min-w-12 sm:w-40    md:ml-0  flex sm:rounded bg-[rgba(245,246,250,1)]">
              <button className=" px-2 text-customGray ">
                <IoIosSearch size={24} />
              </button>
              <input
                type="text"
                className=" py-2 bg-transparent hidden sm:inline outline-none  "
                placeholder="Search here..."
              />
            </div>
            <select className=" px-2 py-2 outline-none sm:px-2 sm:py-[0.6rem] bg-gray-100  border-gray-300 rounded-md">
              <option>Yearly</option>
              <option>Monthly</option>
              <option>Weekly</option>
            </select>
          </div>
        </div>
        <div>
          <TableComponent column={column} data={data} />
        </div>
      </div>
    </div>
  );
};

export default Users;
