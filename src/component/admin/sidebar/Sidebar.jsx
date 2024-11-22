import React from "react";
import { Link } from "react-router-dom";
import menuItems from "../../../utils/menuItem";
import { useDispatch } from "react-redux";
import { logoutAction } from "../../../redux/slice/auth";
const Sidebar = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutAction()); // Hapus dari Redux
    localStorage.removeItem("userInfo"); // Hapus dari LocalStorage
  };

  return (
    <aside className="w-64 rounded-l-lg shadow shadow-slate-400 bg-gray-800 text-white h-screen p-4">
      <h2 className="text-2xl font-bold mb-6">MovieStar</h2>
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
        <span onClick={handleLogout}>Logout</span>
      </ul>
    </aside>
  );
};

export default Sidebar;
