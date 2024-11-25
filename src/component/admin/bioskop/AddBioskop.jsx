import React, { useState } from "react";
import { bioskopApi } from "../../../services/bioskop";
import { useNavigate } from "react-router-dom";
export default function AddBioskop() {
  const navigate = useNavigate();
  const [nama, setNama] = useState("");
  const [lokasi, setLokasi] = useState("");
  async function handleAddBioskop(e) {
    try {
      e.preventDefault();
      const res = await bioskopApi(nama, lokasi);
      console.log(res);
      navigate("/admin/bioskop");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="bg-gray-100 p-6  h-screen">
      <h1 className="font-bold text-2xl">Add Bioskop</h1>
      <form onSubmit={handleAddBioskop}>
        <div className="flex flex-col mt-12">
          <label className="mb-2 font-medium text-slate-900">
            Masukan Nama Bioskop
          </label>
          <input
            type="text"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            className="mb-4 p-2"
            placeholder="Masukan Nama Bioskop"
          />
          <label className="mb-2 font-medium text-slate-900">
            Masukan Lokasi Bioskop
          </label>
          <input
            type="text"
            placeholder="Masukan Lokasi Bioskop"
            className="p-2"
            value={lokasi}
            onChange={(e) => setLokasi(e.target.value)}
          />
        </div>
        <div className="flex mt-7 gap-3">
          <button className="bg-gray-500 text-white py-2 px-5 rounded-md">
            Cancel
          </button>
          <button className="bg-indigo-600 text-white px-12 rounded-md">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
