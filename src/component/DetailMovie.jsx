import React from "react";
import Navbar from "./Navbar";
import Footer from "../pages/Fotter";
import poster from "../assets/HAWKINS.jpg";
import { useNavigate } from "react-router-dom";

export default function DetailMovie() {
  const navigate = useNavigate();
  function handleSubmit() {
    navigate("/ticket");
  }
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Poster Movie */}
          <div className="flex-none w-full md:w-1/3">
            <img
              src={poster}
              alt="Movie Poster"
              className="rounded-lg max-h-[500px] shadow-lg w-full object-cover"
            />
          </div>

          {/* Movie Details */}
          <div className="flex-1 ">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Spiderman: No Way Home
            </h1>
            <p className="text-sm text-gray-500 mb-4">Rating: 9.1/10 IMDb</p>

            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-blue-200 text-blue-700 text-sm rounded-full">
                Action
              </span>
              <span className="px-3 py-1 bg-purple-200 text-purple-700 text-sm rounded-full">
                Adventure
              </span>
              <span className="px-3 py-1 bg-green-200 text-green-700 text-sm rounded-full">
                Fantasy
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-6">
              <p>
                Length: <span className="font-medium">2h 28min</span>
              </p>
              <p>
                Language: <span className="font-medium">English</span>
              </p>
              <p>
                Rating: <span className="font-medium">PG-13</span>
              </p>
            </div>

            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Description
            </h2>
            <p className="text-sm text-gray-600 mb-6">
              With Spider-Man's identity now revealed, Peter asks Doctor Strange
              for help. When a spell goes wrong, dangerous foes from other
              worlds start to appear, forcing Peter to discover what it truly
              means to be Spider-Man.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mb-2">Cast</h2>
            <div className="flex gap-4">
              <div className="text-center">
                <img
                  src="https://via.placeholder.com/80"
                  alt="Actor 1"
                  className="rounded-full mb-2"
                />
                <p className="text-sm">Actor 1</p>
              </div>
              <div className="text-center">
                <img
                  src="https://via.placeholder.com/80"
                  alt="Actor 2"
                  className="rounded-full mb-2"
                />
                <p className="text-sm">Actor 2</p>
              </div>
              <div className="text-center">
                <img
                  src="https://via.placeholder.com/80"
                  alt="Actor 3"
                  className="rounded-full mb-2"
                />
                <p className="text-sm">Actor 3</p>
              </div>
              {/* Add more actors as needed */}
            </div>
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
    </>
  );
}
