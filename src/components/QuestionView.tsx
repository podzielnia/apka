import Box from '@material-ui/core/Box';
import LinearProgress from '@material-ui/core/LinearProgress';
import { lighten, withStyles } from '@material-ui/core/styles';
import React from 'react';
import { Answer, Question } from '../types/Question';
import AnswerPicker from './AnswerPicker';
import QuestionImage from './QuestionImage';
import QuestionText from './QuestionText';

interface Props {
  question: Question;
  onPickAnswer: (answer: Answer) => void;
  progress: number;
}

const QuestionWrapper = withStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyItems: 'space-between',
    width: '100%',
  },
})(Box);

const BorderLinearProgress = withStyles({
  root: {
    height: 10,
    backgroundColor: lighten('#2e378d', 0.7),
    width: '90%',
    borderRadius: '10px',
    marginBottom: '0.5rem',
  },
  bar: {
    borderRadius: 20,
    backgroundColor: '#2e378d',
  },
})(LinearProgress);

export default ({ question, onPickAnswer, progress }: Props) => (
  <>
    <QuestionImage image={question.image} />
    <BorderLinearProgress variant="determinate" value={progress} />
    <QuestionWrapper>
      <QuestionText text={question.title} />
      <AnswerPicker onPick={onPickAnswer} answers={question.answers} />
    </QuestionWrapper>
  </>
);
