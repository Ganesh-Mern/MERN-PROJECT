// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import SettingsRadio from "../../components/settingsRadiobuttons/SettingsRadio";
import ToggleButton from "../../components/togglebutton/ToggleButton";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("notification");
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  const alert = [
    "Phone block",
    "New install request",
    "Time end",
    "Block Apps",
    "Block webs",
    "Approve Accepted",
    "Live Location",
    "Location Alert",
    "Phone ring",
    "Approve app",
    "Approve Rejected",
  ];
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return (
    <div className=" px-4 pt-10 w-full  bg-gray-100 pb-12">
      <h1 className="text-xl   font-poppins font-semibold mb-2">
        System Settings
      </h1>
      <p className="font-poppins font-normal text-base">
        In this user can be see notification and time zone
      </p>
      <div className="w-full bg-white shadow-2xl h-auto p-4 rounded-lg flex  mt-5">
        <div className=" w-full">
          <div className="px-2 mb-4 flex items-center justify-start gap-5">
            <h1
              className={`${
                activeTab === "notification"
                  ? "active border-b-2 border-black"
                  : ""
              } font-segoe font-semibold text-lg cursor-pointer`}
              onClick={() => handleTabChange("notification")}
            >
              Notification
            </h1>
            <h1
              className={`${
                activeTab === "timezone" ? "active border-b-2 border-black" : ""
              } font-segoe font-semibold text-lg cursor-pointer`}
              onClick={() => handleTabChange("timezone")}
            >
              Time Zone
            </h1>
          </div>

          {/* Conditional rendering based on active tab */}
          <div className="p-2 ">
            {activeTab === "notification" && (
              <div className=" ">
                <div className=" flex flex-col sm:flex-row pb-5  border-b-2">
                  <SettingsRadio
                    h1="Delivery Alerts"
                    p="Get notified when your new child is to be added"
                    name="delivery"
                  />
                  <SettingsRadio
                    h1="Subscription"
                    p="Get notified when your about subscription"
                    name="subcription"
                  />
                </div>
                <div className="mt-10 ">
                  <h1 className="font-segoe font-semibold text-2xl mb-2">
                    Notification Alert
                  </h1>
                  <p className="text-base font-normal mb-2">
                    Get notified when on every activity
                  </p>
                  <div className="flex flex-col sm:flex-row ">
                    <div className="w-full sm:w-1/2">
                      {alert.map(
                        (item, index) =>
                          index < 6 && (
                            <div key={index} className="flex items-center py-1 gap-2 text-base font-segoe font-normal">
                              <ToggleButton key={index} /> {item}
                            </div>
                          )
                      )}
                    </div>
                    <div className="w-full sm:w-1/2">
                      {alert.map(
                        (item, index) =>
                          index >= 6 && (
                            <div key={index} className="flex items-center py-1 gap-2 text-base font-segoe font-normal">
                              <ToggleButton key={index} />
                              {item}
                            </div>
                          )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
            {activeTab === "timezone" && (
              <div className="flex flex-col">
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="font-semibold font-segoe text-2xl mb-1">Time</h1>
                    <p className="text-base font-segoe font-normal mb-2">Quick enable and disable hours </p>
                  </div>
                  <ToggleButton size="w-10 h-7" inr="w-4 h-4" transform="translate-x-4" />
                </div>
                <div className="flex items-center justify-between pb-5 border-b-2">
                  <div>
                    <h1 className="font-semibold font-segoe text-2xl mb-1">Time Zone</h1>
                    <p className="text-base font-segoe font-normal mb-2">set your time zone </p>
                  </div>
                  <h1 className="bg-blue-300 min-w-[6rem] py-2 sm:min-w-[15rem]">
                    dropdown
                  </h1>
                </div>
                <div className="mt-1">
                  {days.map((item, index) => (
                    <div key={index} className="py-1 sm:py-2 flex items-center justify-between border-b-2">
                      <div className="flex gap-2 items-center "><ToggleButton key={index} />{item}</div>
                      <div className="flex flex-col sm:flex-row gap-2  ">
                        <div className="p-2  flex items-center  border rounded-lg gap-2 ">
                          <input type="text" placeholder="Form" className="outline-none w-[2rem] " /><h1>09:00Am</h1>
                        </div>
                        <div className="p-2  flex items-center  border rounded-lg  ">
                          <input type="text" placeholder="To" className="outline-none  w-[2rem] " /><h1>09:00Am</h1>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
