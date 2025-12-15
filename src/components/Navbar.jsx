import { CircleDashed, LayoutDashboard } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-4 md:px-5 border-b border-gray-300 py-3 bg-white">
      <Link href={"/"}>
        <LayoutDashboard />
      </Link>

      <div className="flex items-center gap-5 text-gray-500">
        <button className="border cursor-pointer hover:bg-gray-100 rounded-full text-sm px-4 py-1">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
