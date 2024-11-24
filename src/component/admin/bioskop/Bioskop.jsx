import React from "react";

export default function Bioskop() {
  return (
    <>
      <div className="bg-gray-100 h-screen p-12">
        <div className="flex justify-between mb-4">
          <h1 className="text-3xl font-bold">Daftar Bioskop</h1>
          <button
            //   onClick={() => navigate("/admin/add-movie")}
            className="bg-indigo-600 text-white px-4 py-2 rounded shadow hover:bg-indigo-700"
          >
            Tambah Bioskop
          </button>
        </div>
        <div class="relative  overflow-x-auto shadow-md  sm:rounded-lg">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50  ">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Bioskop Name{" "}
                </th>
                <th scope="col" class="px-6 py-3">
                  Lokasi
                </th>
                <th scope="col" class="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="odd:bg-white  even:bg-gray-50  border-b ">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4">Silver</td>

                <td class="px-6 py-4">
                  <a href="#" class="font-medium text-blue-600 hover:underline">
                    Edit
                  </a>
                </td>
              </tr>

              <tr className="odd:bg-white  even:bg-gray-50  border-b ">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  Cinepolis{" "}
                </th>
                <td class="px-6 py-4">Bogor </td>
                <td class="px-6 py-4">
                  <a href="#" class="font-medium text-blue-600 hover:underline">
                    Edit
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
