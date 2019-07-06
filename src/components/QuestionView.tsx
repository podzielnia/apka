import React from "react";

import QuestionText from "./QuestionText";
import QuestionImage from "./QuestionImage";
import AnswerPicker from "./AnswerPicker";
import { Question, Answer } from "../types/Question";

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
