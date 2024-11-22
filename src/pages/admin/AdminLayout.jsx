import React from "react";
import Sidebar from "../../component/admin/sidebar/Sidebar";

import { Outlet } from "react-router-dom";
import Dashboard from "../../component/admin/dashboard/Dashboard";

const AdminLayout = () => {
  return (
    <div className="flex my-5 mx-5">
      <Sidebar />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
