import React, { useState } from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import { lighten, withStyles } from "@material-ui/core/styles";

import QuestionText from "./QuestionText";
import QuestionImage from "./QuestionImage";
import AnswerPicker from "./AnswerPicker";
import { questions } from "../questions";
import { Answer } from "../types/Question";

const BorderLinearProgress = withStyles({
  root: {
    height: 10,
    backgroundColor: lighten("#ff6c5c", 0.5)
  },
  bar: {
    borderRadius: 20,
    backgroundColor: "#ff6c5c"
  }
})(LinearProgress);

export default function QuestionView() {
  const [questionIndex, setQuestionIndex] = useState(0);

  const onPick = (answer: Answer) => {
    if (answer.isCorrect) {
      alert("dobrze \n" + questions[questionIndex].hints[0]);
    } else {
      return alert("źle");
    }

    if (questions.length > questionIndex + 1) {
      return setQuestionIndex(questionIndex + 1);
    }
    alert("to było ostatnie pytanie");
  };

  return (
    <div>
      <BorderLinearProgress
        variant="determinate"
        color="secondary"
        value={(questionIndex / questions.length) * 100}
      />
      <QuestionText text={questions[questionIndex].title} />
      <QuestionImage />
      <AnswerPicker
        onPick={onPick}
        answers={questions[questionIndex].answers}
      />
    </div>
  );
}
