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
    <div className='w-screen h-screen bg-custom-bg flex '>
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar}/>
      <div className="w-screen h-screen  absolute  md:relative bg-custom-bg  ml-[width-of-sidebar] overflow-y-auto">
        <Header sidebarOpen={sidebarOpen} openSidebar={openSidebar}/>
        
        <Outlet  className=""/>
      </div>
      
    </div>
  );
};

export default Layout;