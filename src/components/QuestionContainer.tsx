import LinearProgress from '@material-ui/core/LinearProgress';
import { lighten, withStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';
import { connect } from 'react-redux';

import { ReduxState } from 'store/reducers/rootReducer';
import { Answer, Question } from '../types/Question';
import QuestionView from './QuestionView';

const BorderLinearProgress = withStyles({
  root: {
    height: 10,
    backgroundColor: lighten('#ff6c5c', 0.5),
  },
  bar: {
    borderRadius: 20,
    backgroundColor: '#ff6c5c',
  },
})(LinearProgress);

interface Props {
  questions: Question[];
}

export function QuestionContainer({ questions }: Props) {
  const [questionIndex, setQuestionIndex] = useState(0);

  const onPick = (answer: Answer) => {
    if (answer.isCorrect) {
      alert('dobrze \n' + questions[questionIndex].hints[0]);
    } else {
      return alert('źle');
    }

    if (questions.length > questionIndex + 1) {
      return setQuestionIndex(questionIndex + 1);
    }
    alert('to było ostatnie pytanie');
  };

  return (
    <>
      <BorderLinearProgress
        variant="determinate"
        color="secondary"
        value={(questionIndex / questions.length) * 100}
      />
      <QuestionView question={questions[questionIndex]} onPick={onPick} />
    </>
  );
}

const mapStateToProps = (state: ReduxState) => {
  return {
    questions: state.question.questions,
  };
};

export default connect(mapStateToProps)(QuestionContainer);
