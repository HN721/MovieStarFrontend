import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import Popular from "./Popular";
import Footer from "./Fotter";
import { getFilm } from "../services/Film";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const navigate = useNavigate();
  function handleSubmit(id) {
    navigate(`/detail/${id}`);
  }
  const { data: movies = [], isLoading, error } = useQuery(["Film"], getFilm);
  if (isLoading) {
    <p>Loading</p>;
  }
  if (error) {
    <p>Error Failed to catch Movie</p>;
  }
  return (
    <>
      <Navbar />
      <div className="px-4 py-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className=" font-bold text-2xl">Now Showing</h1>
          <h1 className="text-sm p-2 rounded-xl text-slate-400 border border-slate-900 cursor-pointer">
            See More
          </h1>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="flex gap-6 overflow-x-auto pt-5 scrollbar-hide">
          {/* Movie Item */}
          {movies.map((movie) => (
            <div key={movie._id} className="flex-shrink-0 w-40">
              <img
                src={movie.gambar}
                onClick={() => handleSubmit(movie._id)}
                alt="Movie Poster"
                className="w-full h-60 object-cover rounded-lg shadow-xl"
              />
              <h1 className="mt-2 font-bold text-sm">{movie.judul}</h1>
              <p className="text-yellow-500 text-sm">
                {movie.durasi} <span className="text-slate-400">Menit</span>
              </p>
            </div>
          ))}
        </div>
        <Popular />
      </div>
      <Footer />
    </>
  );
}
