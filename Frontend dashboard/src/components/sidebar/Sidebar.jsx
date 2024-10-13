import { RxCross2 } from "react-icons/rx";
import { images } from "../../utils/images";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { footerItems, menuItems } from "../../utils/menu.item";

// eslint-disable-next-line react/prop-types
const Sidebar = ({ sidebarOpen, toggleSidebar }) => {
  const sidebarRef = useRef(null);

  return (
    <section
      ref={sidebarRef}
      className={`fixed md:relative w-64 bg-white h-screen px-2 z-50 flex flex-col text-black transition-transform transform ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0 z-50`}
    >
      {/* Sidebar Header */}
      <div className="flex items-center mt-4 gap-1 ">
        <div className="w-12 bg-logo-bg-color rounded-full flex justify-items-center">
          <img
            src={images.logo}
            alt="Logo"
            className="flex justify-items-center text-sm"
          />
        </div>
        <span className="text-base text-nowrap text-text-color font-semibold">
          MQ Parental Control
        </span>
        {/* Close button for mobile */}
        <Link className="md:hidden" onClick={toggleSidebar}>
          <RxCross2 size={24} />
        </Link>
      </div>

      {/* Sidebar Menu */}
      <div className="py-2 text-base mt-6 uppercase font-poppins font-medium ">
        Menu
      </div>
      <nav className="flex-1 ">
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                onClick={toggleSidebar}
                className="block text-customGray font-normal leading-7 items-center flex  gap-3 text-left px-2 py-3 font-poppins text-[1.13rem] rounded-md hover:bg-[#006FEC] hover:text-white transition-colors duration-300"
              >
                <item.icon size={22} />
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Sidebar Footer */}
      <div className="w-full mb-2">
        <ul>
          {footerItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                onClick={toggleSidebar}
                className="block text-black font-normal leading-7 items-center flex  gap-3 text-left p-4 font-poppins text-[1.13rem] rounded-md hover:bg-[#006FEC] hover:text-white transition-colors duration-300"
              >
                <item.icon size={22} /> {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Sidebar;