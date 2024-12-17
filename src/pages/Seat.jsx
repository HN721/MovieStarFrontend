import React, { useState, useEffect } from "react";
import Navbar from "../component/Navbar";
import Footer from "./Fotter";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { getToken } from "../utils/getToken";
import { useDispatch } from "react-redux";
import { setKursi } from "../redux/slice/Seat";

const Seat = () => {
  const dispatch = useDispatch();
  const token = getToken();
  const { id } = useParams(); // ID Jadwal
  const rows = ["A", "B", "C", "D", "E"];
  const cols = Array.from({ length: 5 }, (_, i) => i + 1);

  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookedSeats, setBookedSeats] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();

  // Fetch data kursi yang sudah dibooking
  useEffect(() => {
    const fetchBookedSeats = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/seat/get-one/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        // Filter booked seats based on their 'status'
        const booked = response.data.filter((seat) => seat.status === "booked");
        // Store only the seat identifiers for easy comparison
        const bookedSeatNames = booked.map((seat) => seat.kursi);
        setBookedSeats(bookedSeatNames);
      } catch (error) {
        console.error("Failed to fetch booked seats:", error.message);
        setErrorMessage("Failed to load booked seats. Please try again.");
      }
    };
    fetchBookedSeats();
  }, [id, token]);
  console.log(bookedSeats);

  // Toggle pemilihan kursi
  const toggleSeat = (seat) => {
    setSelectedSeats((prevSelectedSeats) => {
      if (prevSelectedSeats.includes(seat)) {
        return prevSelectedSeats.filter((s) => s !== seat);
      } else {
        return [...prevSelectedSeats, seat];
      }
    });
  };

  // Submit data ke server
  const handleSubmit = async () => {
    const jadwal = id; // ID Jadwal
    const status = "booked"; // Status kursi yang dipilih
    dispatch(setKursi(selectedSeats));

    try {
      // Kirim request untuk setiap kursi yang dipilih
      const promises = selectedSeats.map((kursi) =>
        axios.post(
          "https://moviestar-iota.vercel.app/api/seat/create",
          { jadwal, kursi, status },
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        )
      );

      // Tunggu semua request selesai
      await Promise.all(promises);

      // Navigasi ke halaman berikutnya
      navigate(`/order/${jadwal}`);
    } catch (error) {
      setErrorMessage(
        error.response?.data?.error || "Failed to book seats, please try again."
      );
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white text-black flex flex-col items-center py-6">
        {/* Screen */}
        <div className="w-3/4 bg-gradient-to-r from-gray-500 to-gray-300 rounded-lg h-12 flex items-center justify-center mb-8 shadow-lg">
          <span className="text-lg font-bold">SCREEN</span>
        </div>

        {/* Seats */}
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
                    onClick={() => !isBooked && toggleSeat(seat)} // Disable click on booked seats
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

        {/* Error Message */}
        {errorMessage && (
          <div className="text-red-500 mt-4 font-semibold">{errorMessage}</div>
        )}

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
          <button
            onClick={handleSubmit}
            className="bg-blue-500 px-6 py-2 rounded-full font-bold text-white hover:bg-blue-600"
          >
            Confirm
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Seat;
