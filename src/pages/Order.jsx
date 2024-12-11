import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Order() {
  const { id } = useParams();
  useEffect(() => {
    const fetchJadwal = async () => {
      try {
      } catch (error) {}
    };
  }, []);
  return (
    <div>
      <h1 className="text-2xl font-arimo font-bold text-center mt-4">Order</h1>
      <div></div>
    </div>
  );
}
