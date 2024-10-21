
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar"; // Import the Navbar

const MenuPage = () => {
  const [text, setText] = useState("");
  const message = "Welcome to our personalized quiz to see which item on our menu suits you the best.";

  useEffect(() => {
    let currentIndex = 0;

    const typeWriterEffect = () => {
      if (currentIndex < message.length) {
        // Update text only if currentIndex is within bounds
        setText(message.slice(0, currentIndex + 1));
            currentIndex++;
        setTimeout(typeWriterEffect, 100); // Adjust speed here if needed
      }
    };

    typeWriterEffect();

    // Clean up function to avoid memory leaks if component unmounts
    return () => {
      currentIndex = message.length; // Stop the effect when component unmounts
    };
  }, []);

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-5">
      <div className="text-2xl text-yellow-400 font-mono text-center max-w-lg mb-8">
        {text}
      </div>

      <Link
        to="/quiz"
        className="mt-8 bg-yellow-400 text-gray-800 font-semibold py-2 px-8 rounded-full hover:bg-yellow-500 transition-all shadow-md"
      >
        Start Test
      </Link>
    </div>
  );
};

export default MenuPage;

