import React from "react";
import { useNavigate } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteFilm, getFilm } from "../../../services/Film";

const MovieList = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  // Menggunakan useQuery untuk mengambil data film
  const {
    data: movies,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["movies"],
    queryFn: getFilm,
  });

  // Menggunakan useMutation untuk menghapus film
  const mutation = useMutation({
    mutationFn: deleteFilm,
    onSuccess: () => {
      // Refetch atau update cache setelah penghapusan berhasil
      queryClient.invalidateQueries(["movies"]);
      alert("Film berhasil dihapus.");
    },
    onError: (error) => {
      console.error(error);
      alert("Gagal menghapus film.");
    },
  });

  const handleEdit = (id) => {
    navigate(`/admin/edit-movie/${id}`);
  };

  const handleDelete = (id) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus film ini?")) {
      mutation.mutate(id); // Menjalankan mutate untuk menghapus film
    }
  };

  // Menangani loading dan error
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

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
