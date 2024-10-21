import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black p-4 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <div className="text-yellow-400 font-bold text-2xl">
          <Link to="/">Chaat-Le</Link>
        </div>
        <div className="space-x-4">
          <Link
            to="/"
            className="text-white hover:text-yellow-400 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/quiz"
            className="text-white hover:text-yellow-400 transition duration-300"
          >
            Quiz
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
