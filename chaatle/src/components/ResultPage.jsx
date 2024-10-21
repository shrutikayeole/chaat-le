import React from "react";
import { Link } from "react-router-dom";

const ResultPage = ({ result }) => {
  const menuItems = {
    "Basic B Nachos": 40,
    "Samosa Chaat": 40,
    "Sev Puri": 40,
    "Papdi Chaat": 40,
    "Dahi Puri": 50,
    "Señor Nachos": 60,
    "Fiesta Nachos": 100,
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-5">
      <div className="bg-gray-800 p-6 rounded-3xl shadow-lg w-full max-w-md text-center">
        <h1 className="text-3xl text-yellow-400 font-bold mb-5">Your Perfect Dish is.. </h1>
        <h2 className="text-2xl text-yellow-300 mb-3">{result} !!</h2>
        <p className="text-white text-lg mb-5">Price: Rs. {menuItems[result]}</p>
        <Link
          to="/"
          className="bg-yellow-400 text-gray-800 py-2 px-6 rounded-full hover:bg-yellow-500 transition-all shadow-md"
        >
          Back to Home 
        </Link>
      </div>
    </div>
  );
};

export default ResultPage;
