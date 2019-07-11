import LinearProgress from '@material-ui/core/LinearProgress';
import { lighten, withStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

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
  questions?: Question[];
}

export function QuestionContainer({ questions }: Props) {
  const [questionIndex, setQuestionIndex] = useState(0);

  questions = questions || [];

  const onPick = (answer: Answer) => {
    const message = answer.isCorrect ? 'dobrze' : 'źle';
    alert(`${message} \n${answer.hint}`);

    if ([...(questions || [])].length > questionIndex + 1) {
      setQuestionIndex(questionIndex + 1);
      return;
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
      {questions.length > 0 && (
        <QuestionView
          question={questions[questionIndex || 0]}
          onPick={onPick}
        />
      )}
    </>
  );
}

const mapStateToProps = (state: ReduxState) => {
  return {
    questions: state.firestore.ordered.questions,
  };
};

export default compose<any>(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'questions' }]),
)(QuestionContainer);
