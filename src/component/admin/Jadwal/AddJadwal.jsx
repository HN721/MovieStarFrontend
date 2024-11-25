import React, { useState } from "react";

export default function AddJadwal() {
  const [movie, setMovie] = useState("");
  const [bioskop, setBioskop] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [harga, setHarga] = useState(null);
  const [waktu, setWaktu] = useState("");
  return (
    <div className="bg-gray-100 p-6  h-screen">
      <h1 className="font-bold text-2xl">Add Bioskop</h1>
      <form>
        <div className="flex flex-col  mt-12">
          <label className="mb-2 font-medium text-slate-900">
            Pilih Bioskop
          </label>
          <select value={bioskop} className="mb-5">
            <option value="" disabled>
              -- Pilih Bioskop --
            </option>
            <option value="Bioskop 1">Bioskop 1</option>
            <option value="Bioskop 2">Bioskop 2</option>
            <option value="Bioskop 3">Bioskop 3</option>
          </select>
          <label className="mb-2 font-medium text-slate-900">Pilih Movie</label>
          <select value={movie} className="mb-5 p-3">
            <option value="" disabled>
              {" "}
              -- Pilih Movie --
            </option>
            <option value="Movie 1">Movie 1</option>
            <option value="Movie 2">Movie 2</option>
            <option value="Movie 3">Movie 3</option>
          </select>
          <label htmlFor="" className="mb-2 font-medium text-slate-900">
            Pilih Tanggal
          </label>
          <input type="date" value={tanggal} className="mb-5 p-3" />
          <label htmlFor="" className="mb-2 font-medium text-slate-900">
            Pilih Waktu
          </label>
          <input type="time" value={waktu} className="mb-5 p-3" />
          <label htmlFor="" className="mb-2 font-medium text-slate-900">
            Masukan Harga
          </label>
          <input
            type="number"
            className="mb-5 p-3"
            value={harga}
            placeholder="Masukan Harga"
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
