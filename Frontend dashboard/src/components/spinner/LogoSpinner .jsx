// eslint-disable-next-line no-unused-vars
import React from 'react';
import logo from "../../assets/images/Asset 12.png"
import { CgSpinner } from "react-icons/cg";

const LogoSpinner = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center h-full z-50">
  <div className="relative w-44 h-44 flex items-center justify-center">
    {/* Spinning Border */}
    <div>
      <CgSpinner className="absolute inset-0 w-full h-full text-blue-500 animate-spin" />
    </div>

    {/* Logo Image */}
    <img
      src={logo} // Replace with your logo path
      alt="Logo"
      className="w-32 h-32 rounded-full z-10 bg-blue-500" // z-10 ensures the logo is above the spinner
    />
  </div>
</div>

  );
};

export default LogoSpinner;


