import React from "react";
import Navbar from "../component/Navbar";
import poster from "../assets/HAWKINS.jpg";
import Popular from "./Popular";
import Footer from "./Fotter";

export default function Home() {
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
          {[...Array(5)].map((_, index) => (
            <div key={index} className="flex-shrink-0 w-40">
              <img
                src={poster}
                alt="Movie Poster"
                className="w-full h-60 object-cover rounded-lg shadow-xl"
              />
              <h1 className="mt-2 font-bold text-sm">Spiderman: No Way Home</h1>
              <p className="text-yellow-500 text-sm">
                ⭐ 9.1/10 <span className="text-slate-400">IMDb</span>
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
