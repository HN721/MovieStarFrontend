import React from "react";
import { useSelector } from "react-redux";
import { getOneOrder } from "../../services/Order";
import Navbar from "../../component/Navbar";
import Footer from "../Fotter";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../component/Loading";

export default function OrderAccount() {
  const navigate = useNavigate();

  // Mengambil ID user dari Redux
  const user = useSelector((state) => state.auth.user.id);

  // Menggunakan React Query untuk fetch data order
  const {
    data: movie = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["oneOrder", user],
    queryFn: () => getOneOrder(user),
    enabled: !!user, // hanya fetch jika user tersedia
  });

  function handleNext(id) {
    navigate(`/account/ticket/${id}`);
  }

  return (
    <>
      <Navbar />
      <div className="px-6 mt-6">
        <h1 className="text-3xl font-bold text-center mb-8">Tiket Saya</h1>

        {isLoading ? (
          <Loading />
        ) : isError ? (
          <h1 className="flex justify-center items-center text-2xl font-bold text-center mb-8">
            Terjadi kesalahan saat memuat data.
          </h1>
        ) : movie.length > 0 ? (
          movie.map((item) => (
            <div
              key={item._id}
              className="bg-gray-100 shadow-lg rounded-lg p-6 w-full max-w-md mx-auto"
            >
              <h1 className="text-2xl font-bold text-gray-800">
                {item.jadwal.movie.judul}
              </h1>
              <p className="text-lg text-gray-600 mt-2">
                <span className="font-semibold">Bioskop: </span>
                {item.jadwal.bioskop.nama}
              </p>
              <p className="text-lg text-gray-600 mt-2">
                <span className="font-semibold">Nama: </span>
                {item.user.name}
              </p>
              <p className="text-lg text-gray-600 mt-2">
                <span className="font-semibold">Status: </span>
                {item.status}
              </p>
              <button
                className="mt-6 px-4 py-2 bg-blue-500 text-white font-medium rounded hover:bg-blue-600 transition"
                onClick={() => handleNext(item.jadwal._id)}
              >
                Lihat Detail
              </button>
            </div>
          ))
        ) : (
          <h1 className="flex justify-center items-center text-2xl font-bold text-center mb-8">
            Tidak Ada Ticket
          </h1>
        )}
      </div>
      <Footer />
    </>
  );
}
