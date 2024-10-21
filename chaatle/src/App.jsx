import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MenuPage from "./components/MenuPage";
import QuizPage from "./components/QuizPage";
import ResultPage from "./components/ResultPage";
import { useState } from "react";

function App() {
  const [quizResult, setQuizResult] = useState(null);

  const handleQuizCompletion = (result) => {
    setQuizResult(result);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MenuPage />} />
        <Route path="/quiz" element={<QuizPage onComplete={handleQuizCompletion} />} />
        <Route path="/result" element={<ResultPage result={quizResult} />} />
      </Routes>
    </Router>
  );
}

export default App;