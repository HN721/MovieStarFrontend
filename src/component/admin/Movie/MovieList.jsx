import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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
      <div class=" relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 ">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" class="px-6 py-3">
                Judul
              </th>
              <th scope="col" class="px-6 py-3">
                Deskripsi
              </th>
              <th scope="col" class="px-6 py-3">
                Durasi
              </th>
              <th scope="col" class="px-6 py-3">
                Poster
              </th>
              <th scope="col" class="px-6 py-3">
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
                    src={`http://localhost:3000/${movie.gambar.replace(
                      /\\/g,
                      "/"
                    )}`}
                    alt={movie.judul}
                    className="w-16 h-auto"
                  />
                </td>
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    Edit
                  </a>
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
