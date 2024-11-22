import React from "react";
import { useNavigate } from "react-router-dom";

const MovieList = () => {
  const navigate = useNavigate();
  const movies = [
    {
      id: 1,
      judul: "The Shawshank Redemption",
      durasi: 142,
    },
    {
      id: 2,
      judul: "The Dark Knight",
      durasi: 152,
    },
    {
      id: 3,
      judul: "Inception",
      durasi: 148,
    },
    {
      id: 4,
      judul: "Fight Club",
      durasi: 139,
    },
    {
      id: 5,
      judul: "Pulp Fiction",
      durasi: 154,
    },
  ];
  return (
    <div className="max-w-4xl mx-auto mt-10">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-gray-800">Daftar Film</h1>
        <button
          onClick={() => navigate("/admin/add-movie")}
          className="bg-indigo-600 text-white px-4 py-2 rounded shadow hover:bg-indigo-700"
        >
          Tambah Film
        </button>
      </div>
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b"></th>
            <th className="px-4 py-2 border-b">Judul</th>
            <th className="px-4 py-2 border-b">Durasi</th>
            <th className="px-4 py-2 border-b">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {movies.length > 0 ? (
            movies.map((movie, index) => (
              <tr key={movie.id} className="hover:bg-gray-100">
                <td className="px-4 py-2 border-b text-center">{index + 1}</td>
                <td className="px-4 py-2 border-b">{movie.judul}</td>
                <td className="px-4 py-2 border-b text-center">
                  {movie.durasi} menit
                </td>
                <td className="px-4 py-2 border-b text-center">
                  <button
                    onClick={() => navigate(`/edit-movie/${movie.id}`)}
                    className="text-indigo-600 hover:underline"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="px-4 py-2 text-center text-gray-500">
                Tidak ada film yang tersedia.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MovieList;
