import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOneJadwalApi } from "../services/Jadwal";

export default function Order() {
  const [movie, setMovie] = useState({});
  const [bioskop, setBioskop] = useState({});
  const [waktu, setWaktu] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchJadwal = async () => {
      try {
        const res = await getOneJadwalApi(id);
        console.log(res);
        setMovie(res.movie);
        setBioskop(res.bioskop);
        setWaktu(res);
      } catch (error) {
        console.error("Failed to fetch jadwal", error);
      }
    };
    fetchJadwal();
  }, [id]);

  return (
    <div className="px-5">
      <h1 className="text-2xl font-arimo font-bold text-center mt-4">Order</h1>
      <div className="flex bg-slate-300 rounded-lg p-4">
        <img
          src={movie.gambar}
          className="w-1/3 h-auto rounded-lg"
          alt={movie.judul || "Movie Image"}
        />
        <div className="pl-4">
          <p className="font-bold font-arimo text-lg">{movie.judul}</p>
          <p className="text-sm font-arimo font-semibold">{bioskop.nama}</p>
          <p className="text-sm font-arimo font-semibold">{waktu.waktu} AM</p>
          <p className="text-sm font-arimo font-semibold">Rp {waktu.harga}</p>
          <p className="text-sm font-arimo font-semibold">{waktu.tanggal}</p>
        </div>
      </div>
      <div>
        <h1>Seat </h1>
      </div>
    </div>
  );
}
