import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getOneOrder } from "../../services/Order";
import Navbar from "../../component/Navbar";
import Footer from "../Fotter";
import { useNavigate } from "react-router-dom";

export default function OrderAccount() {
  const navigate = useNavigate();
  const [nama, setNama] = useState("");
  const [movie, setMovie] = useState("");
  const [jadwal, setJadwal] = useState("");
  const [status, setStatus] = useState("");
  const user = useSelector((state) => state.auth.user.id);
  const [id, setId] = useState("");
  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const res = await getOneOrder(user);
        setStatus(res.status);
        setMovie(res.jadwal.movie.judul);
        setNama(res.user.name);
        setId(res.jadwal._id);
        setJadwal(res.jadwal.bioskop.nama);
        console.log(res);
      } catch (e) {
        console.error(e);
      }
    };
    fetchOrder();
  }, [user]);
  function handleNext(id) {
    navigate(`/account/ticket/${id}`);
  }

  return (
    <>
      <Navbar />
      <div className="px-6 mt-6">
        <h1 className="text-3xl font-bold text-center mb-8">Tiket Saya</h1>

        <div className="bg-gray-100 shadow-lg rounded-lg p-6 w-full max-w-md mx-auto">
          <h1 className="text-2xl font-bold text-gray-800">{movie}</h1>
          <p className="text-lg text-gray-600 mt-2">
            <span className="font-semibold">Bioskop: </span>
            {jadwal}
          </p>
          <p className="text-lg text-gray-600 mt-2">
            <span className="font-semibold">Nama: </span>
            {nama}
          </p>
          <p className="text-lg text-gray-600 mt-2">
            <span className="font-semibold">Status: </span>
            {status}
          </p>
          <button
            className="mt-6 px-4 py-2 bg-blue-500 text-white font-medium rounded hover:bg-blue-600 transition"
            onClick={() => handleNext(id)}
          >
            Lihat Detail
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
