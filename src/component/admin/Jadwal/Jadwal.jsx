import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getJadwalApi } from "../../../services/Jadwal";
import { useDispatch } from "react-redux";
import { jadwalAction } from "../../../redux/slice/Jadwal";

export default function Jadwal() {
  const dispatch = useDispatch();
  const [jadwal, setJadwal] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    const fetchApiJadwal = async () => {
      try {
        const res = await getJadwalApi();
        setJadwal(res);
        console.log(res);
        dispatch(jadwalAction(res));
      } catch (err) {
        console.log(err);
      }
    };
    fetchApiJadwal();
  }, []);

  return (
    <div className="bg-gray-100 h-screen p-6">
      <div className="flex justify-between mb-4">
        <h1 className="text-3xl font-bold">Daftar Jadwal Tayang</h1>
        <button
          onClick={() => navigate("/admin/add-jadwal")}
          className="bg-indigo-600 text-white px-4 py-2 rounded shadow hover:bg-indigo-700"
        >
          Tambah Bioskop
        </button>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                Movie
              </th>
              <th scope="col" className="px-6 py-3">
                Bioskop
              </th>
              <th scope="col" className="px-6 py-3">
                Tanggal
              </th>
              <th scope="col" className="px-6 py-3">
                Waktu
              </th>
              <th scope="col" className="px-6 py-3">
                Harga
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {jadwal.length > 0 ? (
              jadwal.map((jadwals, index) => (
                <tr key={index} className="bg-white border-b">
                  <td className="px-6 py-4">{jadwals.movie.judul}</td>
                  <td className="px-6 py-4">{jadwals.bioskop.nama}</td>
                  <td className="px-6 py-4">{jadwals.tanggal}</td>
                  <td className="px-6 py-4">{jadwals.waktu}</td>
                  <td className="px-6 py-4">{jadwals.harga}</td>
                  <td className="px-6 flex gap-2 py-4">
                    <button className="font-medium text-blue-600 hover:underline">
                      Edit
                    </button>
                    <button className="font-medium text-red-600 hover:underline">
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="px-6 py-4 text-center">
                  Tidak ada Jadwal yang tersedia.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
