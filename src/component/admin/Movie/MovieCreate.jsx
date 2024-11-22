import React, { useState } from "react";
import { getToken } from "../../../utils/getToken";
import axios from "axios";

const MovieCreate = () => {
  const [formData, setFormData] = useState({
    judul: "",
    deskripsi: "",
    durasi: "",
    gambar: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, gambar: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("judul", formData.judul);
    form.append("deskripsi", formData.deskripsi);
    form.append("durasi", formData.durasi);
    form.append("gambar", formData.gambar);
    const token = getToken();
    const url = "http://localhost:3000/api/film/create";

    try {
      const response = await axios.post(url, form, {
        headers: {
          Authorization: `Bearer ${token}`, // Sertakan token autentikasi jika perlu
          "Content-Type": "multipart/form-data", // Jika mengirimkan file, pastikan header ini ada
        },
      });

      alert("Film berhasil ditambahkan!");
      console.log(response.data);
    } catch (error) {
      // Tampilkan pesan error yang lebih informatif
      console.error(error.response?.data || error.message);
      alert(
        `Gagal menambahkan film: ${
          error.response?.data?.message || error.message
        }`
      );
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Tambah Film</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="judul"
            className="block text-sm font-medium text-gray-700"
          >
            Judul
          </label>
          <input
            type="text"
            name="judul"
            id="judul"
            value={formData.judul}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div>
          <label
            htmlFor="deskripsi"
            className="block text-sm font-medium text-gray-700"
          >
            Deskripsi
          </label>
          <textarea
            name="deskripsi"
            id="deskripsi"
            value={formData.deskripsi}
            onChange={handleChange}
            required
            rows="3"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          ></textarea>
        </div>

        <div>
          <label
            htmlFor="durasi"
            className="block text-sm font-medium text-gray-700"
          >
            Durasi (menit)
          </label>
          <input
            type="number"
            name="durasi"
            id="durasi"
            value={formData.durasi}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div>
          <label
            htmlFor="gambar"
            className="block text-sm font-medium text-gray-700"
          >
            Gambar
          </label>
          <input
            type="file"
            name="gambar"
            id="gambar"
            onChange={handleFileChange}
            required
            className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
          />
        </div>

        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Tambah Film
          </button>
        </div>
      </form>
    </div>
  );
};

export default MovieCreate;
