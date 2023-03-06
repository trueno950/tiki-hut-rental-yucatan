import {
  HomeIcon,
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";

export const routes = [
  {
    icon: HomeIcon,
    name: "home",
    path: "/#home",
  },
  {
    icon: UserCircleIcon,
    name: "Gallery",
    path: "/#gallery",
  },
  {
    icon: ArrowRightOnRectangleIcon,
    name: "Services",
    path: "/#services",
  },
  {
    icon: UserPlusIcon,
    name: "Contact",
    path: "/#contact",
  },
  {
    icon: DocumentTextIcon,
    name: "Know Us",
    path: "/#know-us",
  },
];

export default routes;
