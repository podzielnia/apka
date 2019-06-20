import React from "react";

import QuestionText from "./components/QuestionText";
import QuestionImage from "./components/QuestionImage";
import AnswerPicker from "./components/AnswerPicker";

const App: React.FC = () => {
  return (
    <div className="App">
      <QuestionText />
      <QuestionImage />
      <AnswerPicker />
    </div>
  );
};

export default App;
