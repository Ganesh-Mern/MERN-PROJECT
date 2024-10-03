import React from "react";

const Button = ({text,bg}) => {
  return (
    <button
      type="button"
      className={`flex items-center justify-center font-poppins px-3 bg ${bg} rounded `}
    >{text}</button>
  );
};

export default Button;
