import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import { useState } from "react";

const Layout = () => {
  const [sidebarOpen,setSidebaropen]=useState(false)
  const openSidebar=()=>{
    setSidebaropen(true)    
  }
  const closeSidebar=()=>{
    setSidebaropen(false)    
  }

  return (
    <div className=' h-screen  flex '>
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar}/>
      <div className="flex-1 flex flex-col  ">
        <Header sidebarOpen={sidebarOpen} openSidebar={openSidebar}/>
        <div className="overflow-auto flex-1 p-4">
        <Outlet  className=""/>

        </div>
      </div>
      
    </div>
  );
};

export default Layout;