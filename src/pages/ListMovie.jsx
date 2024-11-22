import React from "react";

export default function ListMovie() {
  // Data dummy untuk film
  const movies = [
    {
      id: 1,
      title: "The Lion King",
      description:
        "A young lion prince flees his kingdom only to learn the true meaning of responsibility.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "Frozen",
      description:
        "A fearless princess sets off on a journey to find her sister, whose powers have trapped the kingdom in eternal winter.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      title: "Aladdin",
      description:
        "A street rat discovers a magical lamp and must protect it from falling into the wrong hands.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      title: "Avenger",
      description:
        "A street rat discovers a magical lamp and must protect it from falling into the wrong hands.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 5,
      title: "Halk",
      description:
        "A street rat discovers a magical lamp and must protect it from falling into the wrong hands.",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="px-28 justify-evenly bg-slate-950  py-12">
      <h2 className="text-3xl font-bold text-white mb-6">Popular Movies</h2>
      <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src={movie.image}
              alt={movie.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{movie.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{movie.description}</p>
              <button className="bg-blue-600 hover:bg-blue-800 text-white py-2 px-4 rounded">
                Watch Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
