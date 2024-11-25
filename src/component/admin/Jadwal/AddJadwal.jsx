import React, { useEffect, useState } from "react";
import { createJadwalApi } from "../../../services/Jadwal";
import axios from "axios";
import { getBioskopApi } from "../../../services/bioskop";

export default function AddJadwal() {
  const [selectedBioskop, setSelectedBioskop] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [movie, setMovie] = useState([]);
  const [bioskop, setBioskop] = useState([]);
  const [tanggal, setTanggal] = useState("");
  const [harga, setHarga] = useState(null);
  const [waktu, setWaktu] = useState("");

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/film/get-all"
        );
        setMovie(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    const fetchBioskop = async () => {
      try {
        const res = await getBioskopApi();
        setBioskop(res);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovie();
    fetchBioskop();
  }, []);

  async function handleAddJadwal(e) {
    e.preventDefault();
    try {
      const res = await createJadwalApi(movie, bioskop, tanggal, waktu, harga);
      console.log(res);
    } catch (error) {
      return error;
    }
  }

  return (
    <div className="bg-gray-100 p-6  h-screen">
      <h1 className="font-bold text-2xl">Add Bioskop</h1>
      <form onSubmit={handleAddJadwal}>
        <div className="flex flex-col  mt-12">
          <label className="mb-2 font-medium text-slate-900">
            Pilih Bioskop
          </label>
          <select
            value={selectedBioskop}
            onChange={(e) => setSelectedBioskop(e.target.value)}
            className="mb-5"
          >
            <option value="" disabled>
              ---Pilih Bioskop----
            </option>
            {bioskop.map((bioskop) => (
              <option key={bioskop.id} value={bioskop.id}>
                {bioskop.nama}
              </option>
            ))}
          </select>
          <label className="mb-2 font-medium text-slate-900">Pilih Movie</label>
          <select
            value={selectedMovie}
            onChange={(e) => setSelectedMovie(e.target.value)}
            className="mb-5 p-3"
          >
            {movie.map((movie) => (
              <option key={movie.id} value={movie.id}>
                {movie.judul}
              </option>
            ))}
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
