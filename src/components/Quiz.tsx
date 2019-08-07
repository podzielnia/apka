import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

import { ReduxState } from 'store/reducers/rootReducer';
import { shuffle } from 'utils';
import { Question } from '../types/Question';
import Loading from './Loading';
import QuestionContainer from './QuestionContainer';

const getRandomQuestionsPool = (questions: Question[]): Question[] =>
  shuffle<Question>([...questions]).slice(0, 9);

interface Props {
  questions?: Question[];
}

export const Quiz = ({ questions }: Props) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [questionsPool, setQuestionsPool] = useState([] as Question[]);

  useEffect(() => {
    if (questionsPool.length < 1 && questions) {
      setQuestionsPool(getRandomQuestionsPool(questions));
    }
  }, [questionsPool.length, questions]);

  const getCurrentQuestion = (): Question | null => {
    if (!questionsPool) {
      return null;
    }

    return questionsPool[currentQuestionIndex];
  };

  const goToNextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const question = getCurrentQuestion();

  return question ? (
    <QuestionContainer
      question={question}
      questionNumber={currentQuestionIndex + 1}
      questionsTotalNumber={questionsPool.length}
      onAnswerPick={goToNextQuestion}
    />
  ) : (
    <Loading />
  );
};

const mapStateToProps = (state: ReduxState) => {
  return {
    questions: state.firestore.ordered.questions,
  };
};

export default compose<any>(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'questions' }]),
)(Quiz);
