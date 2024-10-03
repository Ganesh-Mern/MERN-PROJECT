import React from "react";
import InputField from "../input/InputField";

const SettingsRadio = ({h1,p,name}) => {
  return (
    <div className="w-1/2">
      <h1 className="font-segoe font-semibold text-2xl mb-2">{h1}</h1>
      <p className="text-base font-normal mb-2 bg-blue-100">{p}</p>
      <div className="">
        <div className="flex items-center gap-2 ">
          <InputField
            type="radio"
            name={name}
            value="email"
            className="accent-green-600 w-4 h-4 items-center "
          />
          <label htmlFor="">Email</label>
        </div>
        <div className="flex items-center gap-2 ">
          <InputField
            type="radio"
            name={name}
            value="in-app"
            className="accent-green-600 w-4 h-4"
          />
          <label htmlFor="">In-app</label>
        </div>
      </div>
    </div>
  );
};

export default SettingsRadio;
