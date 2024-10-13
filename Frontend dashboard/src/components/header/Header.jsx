import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosSearch } from "react-icons/io";
import { IoNotificationsOutline } from "react-icons/io5";
import { images } from "../../utils/images";
import DropDown from "../dropdown/DropDown";
import { Link } from "react-router-dom";

const Header = ({ toggleSidebar }) => {
  const languages = [
    {
      code: "en",
      name: "English",
    },
    {
      code: "ar",
      name: "عربي",
    },
  ];

  return (
    <section className="h-[5rem] bg-white border-b-[1px] border-b-border-color px-4 py-2 flex items-center">
      <div className="flex h-full w-2/5 sm:w-1/4 items-center gap-x-3">
        <GiHamburgerMenu
          size={24}
          className="inline md:hidden"
          onClick={toggleSidebar}
        />
        <h1 className="md:text-lg text-text-color text-base font-semibold text-center">
          Dashboard
        </h1>
      </div>
      <div className="flex gap-2 sm:gap-3 w-full justify-end">
        <div className="rounded-full px-2 xl:w-80 md:ml-0 xl:ml-40 flex justify-between md:rounded bg-gray-color2 hover:bg-gray-200">
          <input
            type="text"
            className="hidden bg-inherit md:inline outline-none w-full"
            placeholder="Search here..."
          />
          <Link className="p-1 flex justify-center items-center">
            <IoIosSearch size={22} />
          </Link>
        </div>
        <div>
          <Link className="p-3 flex justify-items-center rounded-full md:rounded-md bg-gray-color2 hover:bg-gray-200">
            <IoNotificationsOutline size={22} />
          </Link>
        </div>
        <div className="py-[0.7rem]">
          <DropDown data={languages} ByDefault={"English"} />
        </div>
        <div className=" flex items-center gap-2 md:ml-0 xl:ml-10">
          <div className="w-10 h-10 rounded-full bg-black">
            <img
              src={images.profile}
              alt="profile"
              className="object-cover rounded-full w-full h-full"
            />
          </div>
          <div className="hidden md:hidden lg:flex flex-col justify-items-center">
            <span className="font-semibold text-base">Mohammad Hassan</span>
            <span className="text-sm text-gary-color">
              mohammadhassan054@gmail.com
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;