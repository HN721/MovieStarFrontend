import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../component/Navbar";
import Footer from "./Fotter";
import { useNavigate } from "react-router-dom";

const JadwalList = () => {
  const navigate = useNavigate();
  const [jadwal, setJadwal] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJadwal = async () => {
      try {
        const response = await axios.get(
          "https://moviestar-iota.vercel.app/api/jadwal/get-all"
        );
        setJadwal(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    fetchJadwal();
  }, []);

  function handleClick(id) {
    navigate(`/ticket/${id}`);
  }
  if (loading) return <div className="text-center mt-10">Loading...</div>;

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Jadwal Tayang Film</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {jadwal.map((item) => (
            <div
              key={item._id}
              onClick={() => handleClick(item._id)}
              className="p-4 bg-white shadow-lg rounded-lg hover:shadow-xl transition"
            >
              <h2 className="text-lg font-semibold">{item.movie.judul}</h2>
              <p className="text-sm text-gray-600">{item.bioskop.nama}</p>
              <p className="text-sm text-gray-600">Tanggal: {item.tanggal}</p>
              <p className="text-sm text-gray-600">Waktu: {item.waktu}</p>
              <p className="text-sm text-gray-600">
                Harga: Rp {item.harga.toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default JadwalList;
