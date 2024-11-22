import React from "react";
import { Link, useNavigate } from "react-router-dom";
import menuItems from "../../../utils/menuItem";
import { useDispatch } from "react-redux";
import { logoutAction } from "../../../redux/slice/auth";
const Sidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutAction()); // Hapus dari Redux
    localStorage.removeItem("userInfo"); // Hapus dari LocalStorage
    navigate("/");
  };

  return (
    <>
      <aside className="w-64 rounded-l-lg shadow shadow-slate-bg-blue-500 bg-blue-900 text-white h-screen p-4">
        <h2 className="text-2xl font-bold mb-6">
          Movie <span className="text-amber-400 text-2xl font-sans">Star </span>
        </h2>
        <ul className="space-y-4">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className="flex items-center space-x-3 px-4 py-2 rounded hover:bg-blue-600"
              >
                <span>{item.icon}</span>
                <span className="text-lg font-bold font-mono">{item.name}</span>
              </Link>
            </li>
          ))}
          <button onClick={handleLogout} className="px-4 py-2">
            Logout
          </button>
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
