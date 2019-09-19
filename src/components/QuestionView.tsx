import Box from '@material-ui/core/Box';
import { withStyles } from '@material-ui/core/styles';
import React from 'react';
import { Answer, Question } from '../types/Question';
import AnswerPicker from './AnswerPicker';
import QuestionImage from './QuestionImage';
import QuestionText from './QuestionText';

interface Props {
  question: Question;
  onPickAnswer: (answer: Answer) => void;
}

const QuestionWrapper = withStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyItems: 'space-between',
  },
})(Box);

export default ({ question, onPickAnswer }: Props) => (
  <>
    <QuestionImage image={question.image} />
    <QuestionWrapper>
      <QuestionText text={question.title} />
      <AnswerPicker onPick={onPickAnswer} answers={question.answers} />
    </QuestionWrapper>
  </>
);
