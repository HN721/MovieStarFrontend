import React from "react";
import spiderman from "../assets/Spiderman.jpg";

export default function Home() {
  return (
    <div
      className="h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${spiderman})` }}
    >
      <div className="h-full w-full bg-black bg-opacity-50 flex items-center">
        <div className="text-left pl-16">
          <h1 className="text-white text-5xl font-poppins mb-4">
            SpiderMan No Way Home
          </h1>
          <div className="flex gap-3 mb-3">
            <span className="text-white text-lg mr-2">2021 |</span>
            <span className="text-white text-lg mr-2">2h 28m</span>
            <span className="text-white text-lg mr-2 px-2 bg-amber-500 rounded-sm">
              Action
            </span>
            <span className="text-white text-lg mr-2">Adventure</span>
            <span className="text-white text-lg mr-2">Fantasy</span>
          </div>
          <p className="text-gray-300 text-lg max-w-md">
            Scelerisque sed ultricies tristique. Mi in vivamus aliquam varius eu
            felis. Id ultricies diam turpis mi tincidunt. Ut morbi sed urna
            tempor imperdiet eu scelerisque egestas. Interdum mi orci
            suspendisse in s... <span className="text-amber-600">See more</span>
          </p>
        </div>
      </div>
    </div>
  );
}
