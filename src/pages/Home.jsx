import React from "react";
import Background from "../assets/Disney.jpg";
import ListMovie from "./ListMovie";

export default function Home() {
  return (
    <>
      <div
        className="min-h-screen bg-cover bg-center text-white flex items-center justify-center relative"
        style={{ backgroundImage: `url(${Background})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>

        {/* Content */}
        <div className="relative  flex flex-col  text-center items-center  md:px-8 max-w-4xl">
          {/* Heading */}
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Welcome to Movie Stars World
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-300">
            Dive into the enchanting world of Disney. Watch your favorite
            movies, shows, and exclusive series all in one place.
          </p>
          {/* Buttons */}
          <div className="mt-6 flex gap-4">
            <button className="bg-red-800 hover:bg-red-500 text-white font-bold py-3 px-6 rounded-full text-lg">
              Booking Now
            </button>
            <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-full text-lg">
              More Info
            </button>
          </div>
          {/* Trending Thumbnails */}\
        </div>
      </div>
      <ListMovie />
    </>
  );
}
