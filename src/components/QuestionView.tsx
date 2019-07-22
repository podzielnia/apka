import React from 'react';

import { Answer, Question } from '../types/Question';
import AnswerPicker from './AnswerPicker';
import QuestionImage from './QuestionImage';
import QuestionText from './QuestionText';

interface Props {
  question: Question;
  onPick: (answer: Answer, question: Question) => void;
}

export default function QuestionView({ question, onPick }: Props) {

  const onPickAnswer = (answer: Answer) => onPick(answer, question);

  return (
    <div>
      <QuestionText text={question.title} />
      <QuestionImage />
      <AnswerPicker
        onPick={onPickAnswer}
        answers={question.answers}
      />
    </div>
  );
}
