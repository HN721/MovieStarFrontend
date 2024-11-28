export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full flex justify-around mt-6 items-center  z-10">
      <h1 className="font-poppins cursor-pointer text-4xl my-5 text-white">
        Movie
        <span className="text-white cursor-pointer bg-amber-500  mx-3 px-3 rounded-sm font-poppins text-4xl my-5">
          Star
        </span>
      </h1>
      <div className="flex gap-3">
        <p className="text-white text-xl hover:text-yellow-500 cursor-pointer">
          Home
        </p>
        <p className="text-white text-xl hover:text-yellow-500 cursor-pointer">
          Movie
        </p>
        <p className="text-white text-xl hover:text-yellow-500 cursor-pointer">
          Trending
        </p>
        <p className="text-white text-xl hover:text-yellow-500 cursor-pointer">
          Login
        </p>
      </div>
    </div>
  );
}
