import React from "react";
import { BsHouse } from "react-icons/bs";
import { RiAccountCircleLine, RiTicketLine } from "react-icons/ri";

export default function Footer() {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white shadow-md py-3 z-50">
      <div className="flex justify-around items-center">
        {/* Home Icon */}
        <div className="flex flex-col items-center text-gray-500 hover:text-cyan-600">
          <BsHouse size={24} />
          <p className="text-xs mt-1">Home</p>
        </div>

        {/* Tickets Icon */}
        <div className="flex flex-col items-center text-gray-500 hover:text-cyan-600">
          <RiTicketLine size={24} />
          <p className="text-xs mt-1">Tickets</p>
        </div>

        {/* Account Icon */}
        <div className="flex flex-col items-center text-gray-500 hover:text-cyan-600">
          <RiAccountCircleLine size={24} />
          <p className="text-xs mt-1">Account</p>
        </div>
      </div>
    </div>
  );
}
