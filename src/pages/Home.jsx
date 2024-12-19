import React from "react";
import Navbar from "../component/Navbar";
import Popular from "./Popular";
import Footer from "./Fotter";
import { getFilm } from "../services/Film";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const navigate = useNavigate();

  // Handle navigation to detail page
  function handleSubmit(id) {
    navigate(`/detail/${id}`);
  }

  // Fetch movies using useQuery
  const {
    data: movies = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["Film"],
    queryFn: getFilm,
  });

  // Handle loading and error states
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: Failed to fetch movies. Please try again later.</p>;
  }

  return (
    <>
      <Navbar />
      <div className="px-4 py-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-2xl">Now Showing</h1>
          <h1 className="text-sm p-2 rounded-xl text-slate-400 border border-slate-900 cursor-pointer">
            See More
          </h1>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="flex gap-6 overflow-x-auto pt-5 scrollbar-hide">
          {movies.map((movie) => (
            <div key={movie._id} className="flex-shrink-0 w-40">
              <img
                src={movie.gambar}
                onClick={() => handleSubmit(movie._id)}
                alt="Movie Poster"
                className="w-full h-60 object-cover rounded-lg shadow-xl cursor-pointer"
              />
              <h1 className="mt-2 font-bold text-sm">{movie.judul}</h1>
              <p className="text-yellow-500 text-sm">
                {movie.durasi} <span className="text-slate-400">Menit</span>
              </p>
            </div>
          ))}
        </div>

        {/* Popular Section */}
        <Popular />
      </div>
      <Footer />
    </>
  );
}
