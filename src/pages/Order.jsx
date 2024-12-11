import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOneJadwalApi } from "../services/Jadwal";
import { getOneSeat } from "../services/Seat";

export default function Order() {
  const [movie, setMovie] = useState({});
  const [bioskop, setBioskop] = useState({});
  const [waktu, setWaktu] = useState({});
  const [seat, setSeat] = useState([]);
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
    const fetchSeat = async () => {
      try {
        const res = await getOneSeat(id);
        setSeat(res);
      } catch (error) {}
    };
    fetchSeat();
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
      <div className="mt-6 flex justify-between items-center">
        <h1 className="text-2xl font-arimo font-bold">Seat:</h1>
        <div className="flex flex-wrap justify-end gap-2">
          {seat.map((item, index) => (
            <p key={index} className="px-2 py-1 bg-gray-200 rounded">
              {item.kursi}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
