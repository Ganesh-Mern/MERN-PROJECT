import { FaUsers } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { GrPlan } from "react-icons/gr";
import { IoIosSettings } from "react-icons/io";
import { RxDashboard } from "react-icons/rx";
import { TbMailFilled } from "react-icons/tb";

// Array of sidebar menu items
export const menuItems = [
  {
    label: "Overview",
    path: "/dashboard",
    icon: RxDashboard,
  },
  {
    label: "Plans",
    path: "plans",
    icon: GrPlan,
  },
  {
    label: "Users",
    path: "users",
    icon: FaUsers,
  },
  {
    label: "Emails",
    path: "emails",
    icon: TbMailFilled,
  },
  {
    label: "Admin",
    path: "admin",
    icon: TbMailFilled,
  },
  {
    label: "Billing",
    path: "billing",
    icon: TbMailFilled,
  },
  {
    label: "Block sites",
    path: "blocksites",
    icon: TbMailFilled,
  },
  {
    label: "Ticket Id",
    path: "ticketid",
    icon: TbMailFilled,
  },
];

export const footerItems = [
  {
    label: "Settings",
    path: "settings",
    icon: IoIosSettings,
  },
  {
    label: "Logout",
    path: "logout",
    icon: FiLogOut,
  },
];