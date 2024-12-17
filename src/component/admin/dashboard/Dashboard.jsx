import React, { useEffect, useState } from "react";
import StatsWidget from "../widget/StatsWidget";
import ChartWidget from "../widget/ChartWidget";
import { useSelector } from "react-redux";
import { getUser } from "../../../services/user";

const Dashboard = () => {
  const data = useSelector((state) => state.auth.user?.nama || "Halo");
  const [total, setTotal] = useState(null);
  useEffect(() => {
    const fetchApiUser = async () => {
      try {
        const response = await getUser();
        setTotal(response.length);
      } catch (error) {
        console.log(error);
      }
    };
    fetchApiUser();
  }, []);
  return (
    <div className="p-6 bg-gray-100 rounded-e-lg shadow-lg shadow-slate-400 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Hello {data}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatsWidget title="Total Users" value={total} />
        <StatsWidget title="Revenue" value="$12,345" />
        <ChartWidget />
      </div>
    </div>
  );
};

export default Dashboard;
