import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

const Payment = ({ type,logo }) => {
  return (
    <div className={`min-h-[4rem] ${type=== "" ?"border-dashed border-2 ":"border"}   p-4 flex items-center justify-between`}>
      <div className={`${type===""? "m-auto":"flex items-center"}`}>
        {type === "" ? (
          ""
        ) : (
          <div class="p-[3px] border-2 border-green-400 rounded-full ">
            <div class="bg-green-500 w-4 h-4 rounded-full"></div>
          </div>
        )}
        
        <h1 className={` ml-4 font-poppins font-medium flex items-center gap-4`}>

          {type === "" ? "": <img src={logo} className="w-10 " />}
          {type === "" ? "+ New payment method " : type}
        </h1>
      </div>
      {type===""? "":<div>            
        <BsThreeDotsVertical size={24} />
      </div>}
    </div>
  );
};

export default Payment;
