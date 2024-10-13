import React, { useEffect, useRef, useState } from "react";
import InputField from "../input/InputField";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/16/solid";
import Button from "../button/Button";

const Modal = ({ isOpen, closeModal }) => {
  if (!isOpen) return null;
  const [showPassword, setShowPassword] = useState(false);
  const [confirmShowPassword, setConfirmShowPassword] = useState(false);
  const modalRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal(); // Close sidebar if clicked outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeModal]);
  return (
    <div className="absolut w-screen h-screen  fixed inset-0 z-50 bg-[rgb(0,0,0,0.7)] bg-opacity-50 flex justify-center items-center">
      <div ref={modalRef} className="bg-white px-4 sm:px-10 p-4  rounded-lg shadow-lg w-full  relative mx-4 max-w-[32rem] min-h-[20rem]">
        {/* Close Button */}

        <h1 className="text-center mt-2  text-xl  font-poppins font-semibold ">Add Sub-Admin</h1>
        <div className="p-4">
          <form className="space-y-3">
            <div>
              <label className="block font-segoe text-xl-custom font-semi-bold">
                Email
              </label>
              <input
                type="email"
                className="w-full px-2 py-3 border bborder-Grays-G4 rounded-lg outline-none "
                placeholder="enter email "
              />
            </div>
            <div className="relative">
              <label className="block font-segoe text-xl-custom font-semi-bold">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                className="w-full px-2 py-3 border bborder-Grays-G4 rounded-lg outline-none"
                placeholder="enter password"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center px-3"
                style={{ paddingTop: "37px" }}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeSlashIcon className="h-5 w-5 text-gray-500" />
                ) : (
                  <EyeIcon className="h-5 w-5 text-gray-500" />
                )}
              </button>
            </div>
            <div className="relative">
              <label className="block font-segoe text-xl-custom font-semi-bold">
                Confirm Password
              </label>
              <input
                type={confirmShowPassword ? "text" : "password"}
                className="w-full px-2 py-3 border bborder-Grays-G4 rounded-lg outline-none"
                placeholder="confirm password"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center px-3"
                style={{ paddingTop: "37px" }}
                onClick={() => setConfirmShowPassword(!confirmShowPassword)}
              >
                {confirmShowPassword ? (
                  <EyeSlashIcon className="h-5 w-5 text-gray-500" />
                ) : (
                  <EyeIcon className="h-5 w-5 text-gray-500" />
                )}
              </button>
            </div>
            <div className="flex items-center justify-end">
            <Button text={"Done"} bg={"bg-blue-500 text-white  px-4 py-2"} />
            </div>
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
