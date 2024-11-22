import React from "react";
import Background from "../assets/Disney.jpg";

export default function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center text-white flex items-center justify-center relative"
      style={{ backgroundImage: `url(${Background})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 md:px-8 max-w-4xl">
        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Welcome to Disney's Magical World
        </h2>
        <p className="mt-4 text-lg md:text-xl text-gray-300">
          Dive into the enchanting world of Disney. Watch your favorite movies,
          shows, and exclusive series all in one place.
        </p>
        {/* Buttons */}
        <div className="mt-6 flex gap-4">
          <button className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-full text-lg">
            Play
          </button>
          <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-full text-lg">
            More Info
          </button>
        </div>

        {/* Trending Thumbnails */}
        <div className="mt-10 flex flex-wrap justify-center gap-6 w-full">
          {/* Thumbnail Item */}
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="w-28 md:w-36 lg:w-44">
              <div className="bg-gray-300 w-full h-36 rounded-lg flex items-center justify-center text-black">
                150 x 150
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
