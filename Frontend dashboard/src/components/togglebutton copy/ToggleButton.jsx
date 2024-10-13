import React, { useState } from 'react'

const ToggleButton = ({size,inr,transform}) => {
    const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };
  return (
    <div
            className={`${size?size:"w-7 h-4"} flex items-center  rounded-full p-1 cursor-pointer ${
              isToggled ? "bg-blue-500" : "bg-gray-300"
            }`}
            onClick={handleToggle}
          >
            <div
              className={`bg-white ${inr?inr:"w-3 h-3"} rounded-full shadow-md transform duration-300 ease-in-out ${
                isToggled ? `${transform?transform:"translate-x-2"} ` : "translate-x-0"
              }`}
            >
             
            </div>
          </div>
  )
}

export default ToggleButton