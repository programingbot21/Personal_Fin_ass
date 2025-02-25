import Link from "next/link";
 import { HomeIcon, TableCellsIcon, CogIcon, ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";
import Logout from "../Logout/Logout";


export const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-900 p-6">
      <h2 className="text-lg font-bold mb-6">Finance</h2>
      <nav>
        <ul className="space-y-4">
          <li>
            <Link href="/dashboard" className="flex items-center space-x-2 text-gray-300 hover:text-white">
              <HomeIcon className="w-5 h-5" /> <span>Dashboard</span>
            </Link>
          </li>

          <li>
            <Link href="/" className="flex items-center space-x-2 text-gray-300 hover:text-white">
              <HomeIcon className="w-5 h-5" /> <span>Home</span>
            </Link>
          </li>
          <li>
            <Link href="/tables" className="flex items-center space-x-2 text-gray-300 hover:text-white">
              <TableCellsIcon className="w-5 h-5" /> <span>Tables</span>
            </Link>
          </li>
          <li>
            <Link href="/settings" className="flex items-center space-x-2 text-gray-300 hover:text-white">
              <CogIcon className="w-5 h-5" /> <span>Settings</span>
            </Link>
          </li>
          <li>
            <Link href="/logout" className="flex items-center space-x-2 text-gray-300 hover:text-red-400">
            <ArrowRightOnRectangleIcon className="w-5 h-5" />
              <span>Logout</span>
            </Link>
            </li>
            <li>
            <Link href="/transaction" className="flex items-center space-x-2 text-gray-300 hover:text-white">
              <CogIcon className="w-5 h-5" /> <span>Transaction</span>
            </Link>
          </li>
          <li>
            <Link href="/create" className="flex items-center space-x-2 text-gray-300 hover:text-white">
              <CogIcon className="w-5 h-5" /> <span>Create</span>
            </Link>
          </li>
        
        </ul>
      </nav>
    </aside>
  );
};
