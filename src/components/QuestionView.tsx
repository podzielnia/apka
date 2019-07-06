import React from 'react';

import { Answer, Question } from '../types/Question';
import AnswerPicker from './AnswerPicker';
import QuestionImage from './QuestionImage';
import QuestionText from './QuestionText';

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
