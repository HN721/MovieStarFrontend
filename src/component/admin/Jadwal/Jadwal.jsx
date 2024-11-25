import React from "react";

export default function Jadwal() {
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
