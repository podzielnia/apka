import React from "react";

import QuestionText from "./QuestionText";
import QuestionImage from "./QuestionImage";
import AnswerPicker from "./AnswerPicker";
import { Question } from "../types/Question";

export default function QuestionView(question: Question) {
  return (
    <div>
      <QuestionText text={question.title} />
      <QuestionImage />
      <AnswerPicker answers={question.answers} />
    </div>
  );
}
