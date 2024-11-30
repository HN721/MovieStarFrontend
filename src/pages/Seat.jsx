import React, { useState } from "react";

const Seat = () => {
  // Baris kursi
  const rows = ["A", "B", "C", "D", "E"];
  // Kolom kursi (5 per kolom, vertikal)
  const cols = Array.from({ length: 5 }, (_, i) => i + 1);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const bookedSeats = ["A1", "B1", "C3", "D2", "E4"]; // Contoh kursi yang sudah dibooking

  const toggleSeat = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  return (
    <div className="min-h-screen bg-white text-black flex flex-col items-center py-6">
      {/* Screen */}
      <div className="w-3/4 bg-gradient-to-r from-gray-500 to-gray-300 rounded-lg h-12 flex items-center justify-center mb-8 shadow-lg">
        <span className="text-lg font-bold">SCREEN</span>
      </div>

      {/* Seats (Vertikal) */}
      <div className="flex gap-4">
        {cols.map((col) => (
          <div key={col} className="flex flex-col gap-2">
            {rows.map((row) => {
              const seat = `${row}${col}`;
              const isBooked = bookedSeats.includes(seat);
              const isSelected = selectedSeats.includes(seat);

              return (
                <button
                  key={seat}
                  onClick={() => !isBooked && toggleSeat(seat)}
                  className={`w-8 h-8 rounded-full text-sm font-bold flex items-center justify-center ${
                    isBooked
                      ? "bg-gray-500 text-white cursor-not-allowed"
                      : isSelected
                      ? "bg-blue-500 text-white"
                      : "bg-gray-300 hover:bg-blue-300"
                  }`}
                >
                  {seat}
                </button>
              );
            })}
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="flex gap-4 items-center justify-center mt-8">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
          <span>Available</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-gray-500 rounded-full"></div>
          <span>Booked</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
          <span>Selected</span>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full flex justify-between items-center mt-8 px-6">
        <span className="text-lg font-bold">
          Rp {selectedSeats.length * 50000}
        </span>
        <button className="bg-blue-500 px-6 py-2 rounded-full font-bold text-white hover:bg-blue-600">
          Confirm
        </button>
      </div>
    </div>
  );
};

export default Seat;