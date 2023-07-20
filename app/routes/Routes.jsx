import Search from "../search/page";
import Favourite from "../favourite/page";
import User from "../user/page";
import ProductView from "../pages/components/productView";
import Main from "../main/page";
import { HiHeart, HiHome, HiSearch, HiUser } from "react-icons/hi";
//routers export
export const routerScreen = [
  {
    path: "",
    element: <Main />,
  },
  {
    path: "@app/search",
    element: <Search />,
  },
  {
    path: "/favourite",
    element: <Favourite />,
  },
  {
    path: "/user",
    element: <User />,
  },
  {
    path: "/productview",
    element: <ProductView />,
  },
];


export const routerTrigger = [
  {
    icon: <HiHome />,
    Destination: "/",
  },
  {
    icon: <HiSearch />,
    Destination: "/search",
  },

  {
    icon: <HiHeart />,
    Destination: "/favourite",
  },
  {
    icon: <HiUser />,
    Destination: "/user",
  },
];
