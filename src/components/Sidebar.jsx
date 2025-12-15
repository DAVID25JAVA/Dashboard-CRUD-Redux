"use client";
import {
  DatabaseIcon,
  LayoutDashboard,
  Plus,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Sidebar = () => {
  const [menuItems, setMenuItems] = useState("");

  const sidebarLinks = [
    { name: "Dashboard", path: "/", icon: <LayoutDashboard /> },
    { name: "Add Task", path: "/create-task", icon: <Plus /> },
    { name: "All Task", path: "/task", icon: <DatabaseIcon /> },
  ];

  return (
    <div className="md:w-64 w-16 border-r h-137.5 border-gray-300 pt-4 flex flex-col">
      {sidebarLinks.map((item, index) => (
        <Link
          key={index}
          href={item.path}
          onClick={() => setMenuItems(index)}
          className={`flex items-center py-3 px-4 gap-3
              ${
                menuItems == index
                  ? "border-r-4 md:border-r-[6px] bg-indigo-500/10 border-indigo-500 text-indigo-500"
                  : "hover:bg-gray-100 text-gray-700"
              }`}
        >
          {item.icon}
          <span className="md:block hidden">{item.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
