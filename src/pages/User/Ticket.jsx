import React from "react";

export default function Ticket() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-white to-purple-200">
      {/* Ticket Container */}
      <div className="w-80 bg-white rounded-xl shadow-lg overflow-hidden relative">
        {/* Image at the Top */}
        <div className="relative">
          <img
            src="https://via.placeholder.com/300x150" // Ganti dengan URL gambar
            alt="Movie Thumbnail"
            className="w-full h-40 object-cover"
          />
        </div>

        {/* Ticket Content */}
        <div className="p-4">
          {/* Title and Badge */}
          <div className="flex items-center justify-between">
            <h2 className="font-bold text-lg">RATU ILMU HITAM</h2>
            <span className="bg-green-600 text-white text-xs px-2 py-1 rounded">
              XXI
            </span>
          </div>
          <p className="text-gray-500 text-sm mt-1">
            XXI Ambarrukmo Plaza, Studio 1
          </p>

          {/* Date, Hour, and Seats */}
          <div className="flex justify-between mt-4 text-sm">
            <div>
              <p className="text-gray-500">Date</p>
              <p className="font-medium">20 Nov</p>
            </div>
            <div>
              <p className="text-gray-500">Hour</p>
              <p className="font-medium">15:05</p>
            </div>
            <div>
              <p className="text-gray-500">Seats</p>
              <p className="font-medium">G10, G11</p>
            </div>
          </div>

          {/* Booking Code */}
          <div className="mt-4 border-t pt-4">
            <p className="text-gray-500 text-sm">Booking Code</p>
            <p className="font-medium text-lg tracking-wide">091821912301</p>
            <p className="text-gray-500 text-sm mt-2">Pass Key</p>
            <p className="font-medium text-lg tracking-wide">129312</p>
          </div>

          {/* Barcode Placeholder */}
          <div className="mt-4 flex items-center justify-center">
            <div className="h-12 w-full bg-gray-300 rounded-md"></div>
          </div>
        </div>

        {/* Center Left and Right Holes */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-gray-100 rounded-full"></div>
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 w-8 h-8 bg-gray-100 rounded-full"></div>
      </div>
    </div>
  );
}
