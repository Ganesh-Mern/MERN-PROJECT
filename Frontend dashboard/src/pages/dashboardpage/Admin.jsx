// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import {images} from "../../utils/images"
// import TableComponent from "../../components/table/TableComponent";
import ToggleButton from "../../components/togglebutton/ToggleButton";
import Modal from "../../components/modal/Modal";

const Admin = () => {
  const column = ["ID", "E-mail"];
  const subAdmin = [
    {
      ID: "Naveed Aabass",
      "E-mail": "ahmedali9054@gamil.com",
      profile: images.profile,
    },
    {
      ID: "Naveed Aabass",
      "E-mail": "ahmedali9054@gamil.com",
      profile: images.profile,
    },
    {
      ID: "Naveed Aabass",
      "E-mail": "ahmedali9054@gamil.com",
      profile: images.profile,
    },
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className=" px-4 pt-10 w-full  bg-gray-100 pb-12">
      <h1 className="text-xl  font-poppins font-semibold">Admin</h1>
      <div className="bg-bg-blue-background w-full h-20 sm:w-1/2 text-white flex justify-center pl-10 flex-col rounded-md mt-5">
        <h1 className="text-2xl font-semibold ">Mahammad Hasan</h1>
        <p className="text-sm font-normal">mahammad@gamil.com</p>
      </div>
      <div className="w-full flex items-center justify-between  md:w-3/4">
        <h1 className="text-xl  font-poppins font-semibold mt-5 mb-3">
          Sub Admin
        </h1>{" "}
        <button className="border-dashed border rounded-md font-poppins text-sm font-semibold border-gray-400  py-1 px-5 mr-2" onClick={openModal}>Add</button>
      </div>
      <div className="w-full rounded-lg md:w-3/4 bg-white shadow-xl pb-4">
        {/* <TableComponent
          column={column}
          data={subAdmin}
          ToggleButton={ToggleButton}
        /> */}
      </div>
      {/* <div className="absolute left-[-23rem] z-50 top-0 bg-black w-screen h-screen"> hiii</div> */}
      <Modal isOpen={isModalOpen} closeModal={closeModal} />
    </div>
  );
};

export default Admin;
