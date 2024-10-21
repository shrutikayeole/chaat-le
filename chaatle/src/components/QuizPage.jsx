import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const QuizPage = ({ onComplete }) => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const navigate = useNavigate();

  const questions = [
    {
      question: "What kind of vacation do you prefer?",
      options: [
        "A quiet cabin in the mountains",
        "A beach resort with lots of activities",
        "A bustling city with lots to explore",
        "Backpacking through remote areas",
      ],
    },
    {
      question: "How do you handle surprises in life?",
      options: [
        "I prefer to plan everything, no surprises",
        "I can handle small surprises",
        "I thrive in unexpected situations",
        "I actively seek out new and surprising experiences",
      ],
    },
    {
      question: "What’s your go-to way to de-stress?",
      options: [
        "Curling up with a good book or show",
        "Meeting up with friends for fun",
        "Doing something adventurous or thrilling",
        "Learning something new or engaging in a hobby",
      ],
    },
    {
      question: "What’s your usual preference for meal portions?",
      options: [
        "Light and small",
        "Something filling but not too heavy",
        "I like to have a good variety of dishes",
        "A hearty and substantial meal",
      ],
    },
    {
      question: "When trying new food, how adventurous are you?",
      options: [
        "I stick with safe, known options",
        "I’ll try something new if it’s a recommendation",
        "I like to experiment with flavors",
        "I’m always up for the wildest and most unique dishes",
      ],
    },
  ];

  const assignDish = () => {
    const menuItems = {
      "Basic B Nachos": 40,
      "Samosa Chaat": 40,
      "Sev Puri": 40,
      "Papdi Chaat": 40,
      "Dahi Puri": 50,
      "Señor Nachos": 60,
      "Fiesta Nachos": 100,
    };
    const weightedItems = [];

    for (const [item, price] of Object.entries(menuItems)) {
      const weight = price / 10;
      for (let i = 0; i < weight; i++) {
        weightedItems.push(item);
      }
    }

    const randomIndex = Math.floor(Math.random() * weightedItems.length);
    return weightedItems[randomIndex];
  };

  const handleAnswer = (optionIndex) => {
    setAnswers([...answers, optionIndex]);

    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      const dish = assignDish();
      onComplete(dish);
      navigate("/result");
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center">
      {/* Quiz Container */}
      <div className="bg-gray-800 p-4 rounded-xl shadow-lg w-full max-w-sm">
        {/* Top section with question count */}
        <div className="flex justify-between items-center mb-3">
          <span className="text-white text-sm">
            Quiz: {step + 1} / {questions.length}
          </span>
        </div>

        {/* Question */}
        <h2 className="text-2xl text-yellow-400 mb-4">
          {questions[step].question}
        </h2>

        {/* Options */}
        <div className="space-y-3">
          {questions[step].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(index + 1)}
              className="w-full bg-gray-700 text-yellow-400 py-2 px-3 rounded-lg hover:bg-yellow-400 hover:text-gray-800 transition-all"
            >
              {option}
            </button>
          ))}
        </div>

        {/* Submit Button */}
        <button
          className="w-full mt-4 bg-yellow-400 text-gray-800 py-2 rounded-lg hover:bg-yellow-500 transition-all"
          onClick={() => handleAnswer(-1)} // Placeholder logic
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default QuizPage;
