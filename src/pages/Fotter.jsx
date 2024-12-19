import React from "react";
import { BsHouse } from "react-icons/bs";
import { RiAccountCircleLine, RiTicketLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white shadow-md py-3 z-50">
      <div className="flex justify-around items-center">
        {/* Home Icon */}
        <div className="flex flex-col items-center text-gray-500 hover:text-cyan-600">
          <BsHouse size={24} />
          <button onClick={() => navigate("/")} className="text-xs mt-1">
            Home
          </button>
        </div>

        {/* Tickets Icon */}
        <div className="flex flex-col items-center text-gray-500 hover:text-cyan-600">
          <RiTicketLine size={24} />
          <button
            onClick={() => navigate("/account/order")}
            className="text-xs mt-1"
          >
            Tickets
          </button>
        </div>

        {/* Account Icon */}
        <div className="flex flex-col items-center text-gray-500 hover:text-cyan-600">
          <RiAccountCircleLine size={24} />
          <button onClick={() => navigate("/account")} className="text-xs mt-1">
            Account
          </button>
        </div>
      </div>
    </div>
  );
}
