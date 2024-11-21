import React from "react";

const StatsWidget = ({ title, value }) => {
  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-2xl font-bold mt-2">{value}</p>
    </div>
  );
};

export default StatsWidget;
