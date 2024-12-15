import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getOneOrder } from "../../services/Order";
import Navbar from "../../component/Navbar";
import Footer from "../Fotter";

export default function OrderAccount() {
  const user = useSelector((state) => state.auth.user.id);
  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const res = await getOneOrder(user);
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
      <div>
        <h1 className="text-2xl font-arimo text-center mt-5">Ticket Saya</h1>
        <div>
          <h1></h1>
          <p></p>
        </div>
      </div>
      <Footer />
    </>
  );
}
