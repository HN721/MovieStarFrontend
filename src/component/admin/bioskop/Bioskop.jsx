import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getBioskopApi } from "../../../services/bioskop";

export default function Bioskop() {
  const [bioskop, setBioskop] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBioskop = async () => {
      try {
        const res = await getBioskopApi();
        console.log(res);
        setBioskop(res); // Pastikan response API adalah array daftar bioskop
      } catch (error) {
        console.log(error);
      }
    };
    fetchBioskop();
  }, []);

  return (
    <div className="bg-gray-100 h-screen p-6">
      <div className="flex justify-between mb-4">
        <h1 className="text-3xl font-bold">Daftar Bioskop</h1>
        <button
          onClick={() => navigate("/admin/add-bioskop")}
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
                Bioskop Name
              </th>
              <th scope="col" className="px-6 py-3">
                Lokasi
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {bioskop.length > 0 ? (
              bioskop.map((item, index) => (
                <tr
                  key={index}
                  className="odd:bg-white even:bg-gray-50 border-b"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    {item.nama}
                  </th>
                  <td className="px-6 py-4">{item.lokasi}</td>
                  <td className="px-6 py-4">
                    <a
                      href="#"
                      className="font-medium text-blue-600 hover:underline"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="px-6 py-4 text-center">
                  Tidak ada bioskop yang tersedia.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
