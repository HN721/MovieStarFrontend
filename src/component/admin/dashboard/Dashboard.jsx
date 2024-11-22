import React from "react";
import StatsWidget from "../widget/StatsWidget";
import ChartWidget from "../widget/ChartWidget";

const Dashboard = () => {
  // const data = useSelector((state) => state.login.user.name);
  return (
    <div className="p-6 bg-gray-100 rounded-e-lg shadow-lg shadow-slate-400 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatsWidget title="Total Users" value="1,245" />
        <StatsWidget title="Revenue" value="$12,345" />
        <ChartWidget />
      </div>
    </div>
  );
};

export default Dashboard;
