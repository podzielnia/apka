import React from 'react';

import { Answer, Question } from '../types/Question';
import AnswerPicker from './AnswerPicker';
import QuestionImage from './QuestionImage';
import QuestionText from './QuestionText';

interface Props {
  question: Question;
  onPickAnswer: (answer: Answer) => void;
}

export default ({ question, onPickAnswer }: Props) => (
  <div>
    <QuestionText text={question.title} />
    <QuestionImage />
    <AnswerPicker onPick={onPickAnswer} answers={question.answers} />
  </div>
);
