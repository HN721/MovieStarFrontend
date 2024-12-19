import React, { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Footer from "../pages/Fotter";
import Navbar from "./Navbar";
import { getOne } from "../services/Film";
import Loading from "./Loading";

export default function DetailMovie() {
  const { id } = useParams(); // Fetch movie ID from URL
  const [movie, setMovie] = useState(null); // Initialize as null
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await getOne(id);
        setMovie(res);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false); // Stop loading
      }
    };
    fetchMovie();
  }, [id]);

  function handleSubmit() {
    navigate("/detail/jadwal");
  }

  if (isLoading) {
    return <Loading />; // Render a loading spinner or message
  }

  if (!movie) {
    return <div>Movie not found.</div>; // Handle case when movie data is null
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Poster Movie */}
          <div className="flex-none w-full md:w-1/3">
            <img
              src={movie.gambar}
              alt="Movie Poster"
              className="rounded-lg max-h-[500px] shadow-lg w-full object-cover"
            />
          </div>

          {/* Movie Details */}
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              {movie.judul}
            </h1>
            <p className="text-sm text-gray-500 mb-4">Rating: 9/10 IMDb</p>

            <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-6">
              <p>
                Length: <span className="font-medium">{movie.durasi} min</span>
              </p>
              <p>
                Language: <span className="font-medium">English</span>
              </p>
              <p>
                Rating: <span className="font-medium">8/10</span>
              </p>
            </div>

            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Description
            </h2>
            <p className="text-sm text-gray-600 mb-6">{movie.deskripsi}</p>

            <h2 className="text-xl font-semibold text-gray-800 mb-2">Cast</h2>
          </div>
        </div>
        <div className="flex justify-center mt-3 mb-5">
          <button
            onClick={handleSubmit}
            className="bg-cyan-600 w-full hover:bg-cyan-700 text-white py-2 px-4 rounded-lg"
          >
            Booking Now
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
