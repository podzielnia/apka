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
  const [toggleModal, setToggleModal] = useState(false);
  const [message, setMessage] = useState('');
  const [hint, setHint] = useState('');
  const [answerNumber, setAnswerNumber] = useState(0);
  const questionsLength = ([...(questions || [])]).length;
  const closeModal = () => setToggleModal(false);

  questions = questions || [];

  const onPick = (answer: Answer) => {
    setToggleModal(true);
    setMessage(answer.isCorrect ? 'Dobra odpowiedź!' : 'Zła odpowiedź!');
    setHint(answer.hint);
    setAnswerNumber(questionIndex + 1);

    if ([...(questions || [])].length > questionIndex + 1) {
      setQuestionIndex(questionIndex + 1);
      return;
    }
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
          toggleModal={toggleModal}
          closeModal={closeModal}
          message={message}
          hint={hint}
          answerNumber={answerNumber}
          questionsLength={questionsLength}
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
