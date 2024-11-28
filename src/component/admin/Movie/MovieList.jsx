import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteFilm } from "../../../services/Film";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/film/get-all"
        );
        setMovies(response.data);
        console.log(response.data);
      } catch (e) {
        console.error(e);
      }
    };

    fetchData();
  }, []);

  const handleEdit = (id) => {
    navigate(`/admin/edit-movie/${id}`);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus film ini?")) {
      try {
        await deleteFilm(id);
        setMovies(movies.filter((movie) => movie.id !== id));
        alert("Film berhasil dihapus.");
      } catch (error) {
        console.error(error);
        alert("Gagal menghapus film.");
      }
    }
  };

  return (
    <div className="p-6 bg-gray-100 h-screen rounded-md ">
      <div className="flex justify-between pb-3 ">
        <h1 className="text-3xl font-bold ">Daftar Film</h1>
        <button
          onClick={() => navigate("/admin/add-movie")}
          className="bg-indigo-600 text-white px-4 py-2 rounded shadow hover:bg-indigo-700"
        >
          Tambah Film
        </button>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Judul
              </th>
              <th scope="col" className="px-6 py-3">
                Deskripsi
              </th>
              <th scope="col" className="px-6 py-3">
                Durasi
              </th>
              <th scope="col" className="px-6 py-3">
                Poster
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie, index) => (
              <tr key={index} className="bg-white border-b">
                <td className="px-6 py-4">{movie.judul}</td>
                <td className="px-6 py-4">{movie.deskripsi}</td>
                <td className="px-6 py-4">{movie.durasi} Jam</td>
                <td className="px-6 py-4">
                  <img
                    src={movie.gambar}
                    alt={movie.judul}
                    className="w-16 h-auto"
                  />
                </td>
                <td className="px-6 flex gap-2 py-4">
                  <button
                    onClick={() => handleEdit(movie._id)}
                    className="font-medium text-blue-600 hover:underline"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(movie._id)}
                    className="font-medium text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MovieList;
