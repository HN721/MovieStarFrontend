import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getOneJadwalApi } from "../services/Jadwal";
import { getOneSeat } from "../services/Seat";
import ZaloPayLogo from "../assets/zalo.png";
import ShopeePayLogo from "../assets/shopee.png";
import ATMLogo from "../assets/atm.png";
import VisaLogo from "../assets/visa.png";
import Navbar from "../component/Navbar";
import Footer from "./Fotter";
import { useSelector } from "react-redux";

export default function Order() {
  const seat = useSelector((state) => state.kursi);
  const navigate = useNavigate();
  const [movie, setMovie] = useState({});
  const [bioskop, setBioskop] = useState({});
  const [waktu, setWaktu] = useState({});
  const [total, setTotal] = useState(0);
  const { id } = useParams();
  function handleNext(id) {
    navigate(`/account/ticket/${id}`);
  }

  useEffect(() => {
    const fetchJadwal = async () => {
      try {
        const res = await getOneJadwalApi(id);
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
        console.log(res);
      } catch (error) {
        console.error("Failed to fetch seats", error);
      }
    };

    fetchSeat();
    fetchJadwal();
  }, [id]);

  const handleTotalChange = (event) => {
    setTotal(Number(event.target.value));
  };

  return (
    <>
      <Navbar />
      <div className="px-5">
        <div className="flex bg-slate-300 rounded-lg p-4">
          <img
            src={movie.gambar || "default-movie-image.png"}
            className="w-1/3 h-auto rounded-lg"
            alt={movie.judul || "Movie Image"}
          />
          <div className="pl-4">
            <p className="font-bold font-arimo text-lg">
              {movie.judul || "Unknown Title"}
            </p>
            <p className="text-sm font-arimo font-semibold">
              {bioskop.nama || "Unknown Bioskop"}
            </p>
            <p className="text-sm font-arimo font-semibold">
              {waktu.waktu || "--:--"} AM
            </p>
            <p className="text-sm font-arimo font-semibold">
              Rp {waktu.harga || "0"}
            </p>
            <p className="text-sm font-arimo font-semibold">
              {waktu.tanggal || "Unknown Date"}
            </p>
          </div>
        </div>
        <div className="mt-6 flex justify-between items-center">
          <h1 className="text-2xl font-arimo font-bold">Seat:</h1>
          <div className="flex flex-wrap justify-end gap-2">
            {seat.kursi &&
              seat.kursi.map((item, index) => (
                <p key={index} className="px-2 py-1 bg-gray-200 rounded">
                  {item}
                </p>
              ))}
          </div>
        </div>
        <div className="flex items-center border border-slate-500 rounded-lg p-2 mb-4 mt-4">
          <input
            type="text"
            placeholder="Discount code"
            className="flex-grow bg-transparent text-sm focus:outline-none px-2"
          />
          <button className="bg-yellow-500 w-1/2 text-black text-sm px-4 py-2 rounded-lg hover:bg-yellow-600">
            Apply
          </button>
        </div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Total</h2>
          <select
            value={total}
            onChange={handleTotalChange}
            className="border rounded p-1"
          >
            <option value={10000}>Rp 10,000</option>
            <option value={20000}>Rp 20,000</option>
            <option value={30000}>Rp 30,000</option>
          </select>
        </div>
        <div className="mb-4">
          <h2 className="text-lg font-bold mb-2">Payment Method</h2>
          <div className="flex items-center justify-between hover:bg-yellow-500 hover:text-slate-50 rounded-lg  bg-slate-200 p-2  mb-2">
            <img src={ZaloPayLogo} alt="Zalo Pay" className="w-28 h-15 mr-4" />
            <span className="text-lg font-semibold font-arimo">Zalo Pay</span>
          </div>

          <div className="flex items-center justify-between hover:bg-yellow-500 hover:text-slate-50 rounded-lg  bg-slate-200 p-2  mb-2">
            <img
              src={ShopeePayLogo}
              alt="Shopee Pay"
              className="w-28 h-15 mr-4"
            />
            <span className="text-lg font-semibold font-arimo">Shopee Pay</span>
          </div>
          <div className="flex items-center justify-between hover:bg-yellow-500 hover:text-slate-50 rounded-lg  bg-slate-200 p-2  mb-2">
            <img src={ATMLogo} alt="ATM" className="w-28 h-15 mr-4" />
            <span className="text-lg font-semibold font-arimo ">ATM Card</span>
          </div>
          <div className="flex items-center justify-between hover:bg-yellow-500 hover:text-slate-50 rounded-lg  bg-slate-200 p-2  mb-2">
            <img src={VisaLogo} alt="Visa" className="w-28 h-15 mr-4" />
            <span className="text-lg font-semibold font-arimo">
              International Payments
            </span>
          </div>
        </div>
        <div>
          <button
            onClick={() => handleNext(id)}
            className="w-full bg-yellow-500 hover:bg-yellow-400 p-4 rounded-lg text-slate-50"
          >
            Order Now!
          </button>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}
