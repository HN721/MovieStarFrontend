import React from "react";
import Logo from "../assets/logo.png";
export default function Navbar() {
  return (
    <div className="flex  justify-around items-center bg-slate-950">
      <h1 className="text-white font-serif text-4xl my-5">
        Movie
        <span className="text-amber-400 font-bold text-4xl my-5"> Star</span>
      </h1>
      <div className="flex gap-3">
        <p className="text-white text-xl hover:text-slate-500">Home</p>
        <p className="text-white text-xl hover:text-slate-500">Movie</p>
        <p className="text-white text-xl hover:text-slate-500">Trending</p>
        <p className="text-white text-xl hover:text-slate-500">Login</p>
      </div>
    </div>
  );
}
