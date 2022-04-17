import { FaHome } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { MdContactPhone } from "react-icons/md";
import { GiCycle } from "react-icons/gi";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import InventoryIcon from "@mui/icons-material/Inventory";
import { RiAdvertisementFill } from "react-icons/ri";
// import { BsFillBriefcaseFill } from "react-icons/bs";
// import { IoGitNetworkSharp } from "react-icons/io5";
// import { AiFillEdit } from "react-icons/ai";

export const menuItems = [
  { name: "Dashboard", to: "/admin/", icon: <FaHome /> },
  {
    name: "Advertisement",
    to: "/admin/advertisement",
    icon: <RiAdvertisementFill />,
  },
  { name: "News", to: "/admin/news", icon: <NewspaperIcon fontSize="10px" /> },
  {
    name: "Products",
    to: "/admin/products",
    icon: <InventoryIcon fontSize="10px" />,
  },
  { name: "Secondhand", to: "/admin/secondhand", icon: <GiCycle /> },
  { name: "Order Detail", to: "/admin/OrderDetail", icon: <IoIosPeople /> },
  { name: "Contacts", to: "/admin/contacts", icon: <MdContactPhone /> },
];
