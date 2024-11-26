import React from "react";
import { useNavigate } from "react-router-dom";

export default function Seat() {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-100 h-screen p-6">
      <h1 className="text-3xl font-bold">Daftar Tabel Kursi</h1>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                Jadwal
              </th>
              <th scope="col" className="px-6 py-3">
                Kursi
              </th>
              <th scope="col" className="px-6 py-3">
                Tanggal
              </th>
              <th scope="col" className="px-6 py-3">
                Waktu
              </th>
              <th>
                <th scope="col" className="px-6 py-3">
                  Harga
                </th>
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="3" className="px-6 py-4 text-center">
                Tidak ada Jadwal yang tersedia.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
