import React, { useState } from "react";
import Navbar from "../component/Navbar";
import Footer from "./Fotter";

export default function Order() {
  const [order, setOrder] = useState({
    nama: "",
    user: "",
    jadwal: "",
    harga: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrder({ ...order, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order Submitted:", order);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen  px-4 pt-6">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded shadow-md w-full"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Input Order</h2>

          {/* Nama */}
          <div className="mb-4">
            <label
              htmlFor="nama"
              className="block text-sm font-medium text-gray-700"
            >
              Nama
            </label>
            <input
              type="text"
              id="nama"
              name="nama"
              value={order.nama}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded py-2 px-3 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Masukkan nama"
              required
            />
          </div>

          {/* User */}
          <div className="mb-4">
            <label
              htmlFor="user"
              className="block text-sm font-medium text-gray-700"
            >
              User
            </label>
            <input
              type="text"
              id="user"
              name="user"
              value={order.user}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded py-2 px-3 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Masukkan user"
              required
            />
          </div>

          {/* Jadwal */}
          <div className="mb-4">
            <label
              htmlFor="jadwal"
              className="block text-sm font-medium text-gray-700"
            >
              Jadwal
            </label>
            <input
              type="date"
              id="jadwal"
              name="jadwal"
              value={order.jadwal}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded py-2 px-3 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>

          {/* Harga */}
          <div className="mb-4">
            <label
              htmlFor="harga"
              className="block text-sm font-medium text-gray-700"
            >
              Harga
            </label>
            <input
              type="number"
              id="harga"
              name="harga"
              value={order.harga}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded py-2 px-3 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Masukkan harga"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}
