import React from "react";
import poster from "../assets/kk.jpg";

export default function Popular() {
  return (
    <div className="mt-6 ">
      {/* Title and "See More" */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-800">Popular</h1>
        <button className="text-sm text-cyan-600 hover:underline">
          See more
        </button>
      </div>

      {/* List of Movies */}
      <div className="mt-4">
        {/* Movie Item */}
        <div className="flex   items-center border-b border-gray-200">
          {/* Poster */}
          <img
            src={poster}
            className="h-52 rounded-md shadow-md object-cover pr-4"
            alt="Movie poster"
          />

          {/* Movie Details */}
          <div className="">
            <h2 className="text-2xl font-bold  text-gray-800">
              Venom: Let There Be Carnage
            </h2>
            <p className="text-lg font-light  text-gray-500">⭐ 6.4/10 IMDb</p>

            {/* Tags */}
            <div className="flex gap-1 pr-1 ">
              <span className="text-sm font-light border rounded-full border-cyan-600 text-cyan-600 px-2">
                Horror
              </span>
              <span className="text-sm font-light border rounded-full border-cyan-600 text-cyan-600 px-2">
                Mystery
              </span>
              <span className="text-sm font-light border rounded-full border-cyan-600 text-cyan-600 px-2">
                Thriller
              </span>
            </div>

            {/* Duration */}
            <p className="text-base text-gray-500 mt-2">1h 47m</p>
            <button className="bg-cyan-600 text-white px-4 py-2 rounded-xl mt-4">
              Booking Now
            </button>
          </div>
        </div>
      </div>
      <div className="mt-4">
        {/* Movie Item */}
        <div className="flex  gap-4 items-center border-b border-gray-200">
          {/* Poster */}
          <img
            src={poster}
            className="h-52 rounded-md shadow-md pr-4 object-cover"
            alt="Movie poster"
          />

          {/* Movie Details */}
          <div className="">
            <h2 className="text-2xl font-bold  text-gray-800">
              Venom: Let There Be Carnage
            </h2>
            <p className="text-lg font-light  text-gray-500">⭐ 6.4/10 IMDb</p>

            {/* Tags */}
            <div className="flex gap-1 ">
              <span className="text-sm font-light border rounded-full border-cyan-600 text-cyan-600 px-2">
                Horror
              </span>
              <span className="text-sm font-light border rounded-full border-cyan-600 text-cyan-600 px-2">
                Mystery
              </span>
              <span className="text-sm font-light border rounded-full border-cyan-600 text-cyan-600 px-2">
                Thriller
              </span>
            </div>

            {/* Duration */}
            <p className="text-base text-gray-500 mt-2">1h 47m</p>
            <button className="bg-cyan-600 text-white px-4 py-2 rounded-xl mt-4">
              Booking Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
