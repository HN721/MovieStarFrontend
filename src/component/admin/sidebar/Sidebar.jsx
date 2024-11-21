import React from "react";
import { Link } from "react-router-dom";
import menuItems from "../../../utils/menuItem";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white h-screen p-4">
      <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
      <ul className="space-y-4">
        {menuItems.map((item) => (
          <li key={item.name}>
            <Link
              to={item.path}
              className="flex items-center space-x-3 px-4 py-2 rounded hover:bg-gray-700"
            >
              <span>{item.icon}</span>
              <span>{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
