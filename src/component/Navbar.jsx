import { useState } from "react";
import { GoBell } from "react-icons/go";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" p-4">
      {/* Logo dan Hamburger Button */}
      <div className="flex items-center justify-between">
        <GoBell className="text-2xl" />
        <h1 className=" text-lg font-bold">Movie Star</h1>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="block lg:hidden  focus:outline-none"
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Navigasi */}
      <ul
        className={`lg:flex lg:space-x-4 mt-4 lg:mt-0 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <li className=" hover:text-gray-300">
          <a href="#home">Home</a>
        </li>
        <li className=" hover:text-gray-300">
          <a href="#my-order">My Order</a>
        </li>
        <li className=" hover:text-gray-300">
          <a href="#profile">Profile</a>
        </li>
        <li className=" hover:text-gray-300">
          <a href="#logout">Logout</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
