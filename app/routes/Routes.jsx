import { HiHeart, HiHome, HiSearch, HiUser } from "react-icons/hi";
//routers export


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
