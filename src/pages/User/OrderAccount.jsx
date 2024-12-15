import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getOneOrder } from "../../services/Order";
import Navbar from "../../component/Navbar";
import Footer from "../Fotter";

export default function OrderAccount() {
  const [nama, setNama] = useState("");
  const [jadwal, setJadwal] = useState("");
  const user = useSelector((state) => state.auth.user.id);
  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const res = await getOneOrder(user);
        // setNama(res.user.name)
        setJadwal(res.jadwal.bioskop.nama);
        console.log(res);
      } catch (e) {
        return e;
      }
    };
    fetchOrder();
  }, []);
  return (
    <>
      <Navbar />
      <div className="px-6">
        <h1 className="text-2xl font-arimo text-center mt-5">Ticket Saya</h1>
        <div className="bg-slate-400 w-full">
          <h1>{jadwal}</h1>
          <p></p>
        </div>
      </div>
      <Footer />
    </>
  );
}
