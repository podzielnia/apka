import React, { useState } from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import { lighten, withStyles } from "@material-ui/core/styles";

import QuestionText from "./QuestionText";
import QuestionImage from "./QuestionImage";
import AnswerPicker from "./AnswerPicker";
import { Question, Answer } from "../types/Question";

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

interface Props {
  question: Question;
  onPick: (answer: Answer) => void;
}

export default function QuestionView({ question, onPick }: Props) {
  return (
    <div>
      <QuestionText text={question.title} />
      <QuestionImage />
      <AnswerPicker onPick={onPick} answers={question.answers} />
    </div>
  );
}
