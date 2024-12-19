import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getFilm } from "../services/Film";

export default function Popular() {
  const navigate = useNavigate();
  const [expandedMovieId, setExpandedMovieId] = useState(null);

  // Fetch data using useQuery
  const {
    data: movies = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["PopularFilm"],
    queryFn: getFilm,
  });

  const truncateText = (text, length) => {
    if (text.length > length) {
      return `${text.slice(0, length)}...`;
    }
    return text;
  };

  const toggleDescription = (id) => {
    setExpandedMovieId(expandedMovieId === id ? null : id);
  };

  if (isLoading) {
    return <p>Loading movies...</p>;
  }

  if (error) {
    return <p>Failed to load movies. Please try again later.</p>;
  }

  return (
    <div className="mt-6">
      {/* Title and "See More" */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-800">Popular</h1>
        <button className="text-sm text-cyan-600 hover:underline">
          See more
        </button>
      </div>

      {/* List of Movies */}
      {movies.map((movie) => (
        <div key={movie.id} className="mt-4 px-3">
          {/* Movie Item */}
          <div className="flex flex-wrap gap-4 items-center border-b border-gray-200 pb-4">
            {/* Poster */}
            <div className="w-40 h-60 flex-shrink-0">
              <img
                src={movie.gambar}
                className="w-full h-full object-cover rounded-md shadow-md"
                alt="Movie poster"
              />
            </div>

            {/* Movie Details */}
            <div className="flex-1">
              <h2 className="text-xl font-bold text-gray-800">{movie.judul}</h2>
              <p className="text-lg font-light text-gray-500">
                {expandedMovieId === movie.id
                  ? movie.deskripsi
                  : truncateText(movie.deskripsi, 33)}
              </p>

              {/* See More / See Less Button */}
              {movie.deskripsi.length > 100 && (
                <button
                  className="text-sm text-cyan-600 hover:underline mt-2"
                  onClick={() => toggleDescription(movie.id)}
                >
                  {expandedMovieId === movie.id ? "See less" : "See more"}
                </button>
              )}

              {/* Duration */}
              <p className="text-base text-gray-500 mt-2">{movie.durasi}</p>
              <button className="bg-cyan-600 text-white px-4 py-2 rounded-xl mt-4">
                Booking Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
