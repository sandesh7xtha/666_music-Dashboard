import { FaHome } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { MdContactPhone } from "react-icons/md";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { IoGitNetworkSharp } from "react-icons/io5";
import { FaNetworkWired } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";

export const menuItems = [
  { name: "Dashboard", to: "/admin/", icon: <FaHome /> },
  { name: "Advertisement", to: "/admin/advertisement", icon: <IoGitNetworkSharp /> },
  { name: "News", to: "/admin/news", icon: <FaNetworkWired /> },
  { name: "Products", to: "/admin/products", icon: <BsFillBriefcaseFill /> },
  { name: "Secondhand", to: "/admin/secondhand", icon: <AiFillEdit /> },
  { name: "About Us", to: "/admin/aboutus", icon: <IoIosPeople /> },
  { name: "Contacts", to: "/admin/contacts", icon: <MdContactPhone /> },
];
