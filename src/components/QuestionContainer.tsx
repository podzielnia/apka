import LinearProgress from '@material-ui/core/LinearProgress';
import { lighten, withStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';
import { connect } from 'react-redux';

import { goodAnswer, wrongAnswer } from '../store/reducers/actions';
import { Answer, Question } from '../types/Question';
import Bar from './Bar';
import Modal from './Modal';
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
  question: Question;
  questionNumber: number;
  questionsTotalNumber: number;
  onAnswerPick: () => void;
  goodAnswerPick: () => void;
  wrongAnswerPick: () => void;
}

export function QuestionContainer({
  question,
  questionNumber,
  questionsTotalNumber,
  onAnswerPick,
  goodAnswerPick,
  wrongAnswerPick,
}: Props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [chosenAnswer, setChosenAnswer] = useState({} as Answer);
  const closeModal = () => {
    setModalVisible(false);
    onAnswerPick();
  };
  const getMessage = () =>
    chosenAnswer.isCorrect ? 'Dobra odpowiedź!' : 'Zła odpowiedź!';

  const onPick = (answer: Answer) => {
    setModalVisible(true);
    setChosenAnswer(answer);
    if (answer.isCorrect) {
      goodAnswerPick();
      alert(1);
    } else {
      wrongAnswerPick();
      alert(2);
    }
  };

  return (
    <>
      <Bar>QUIZ</Bar>
      <BorderLinearProgress
        variant="determinate"
        color="secondary"
        value={(questionNumber / questionsTotalNumber) * 100}
      />
      <QuestionView question={question} onPickAnswer={onPick} />
      <Modal
        modalVisible={modalVisible}
        closeModal={closeModal}
        message={getMessage()}
        hint={chosenAnswer.hint}
        answerNumber={questionNumber}
        questionsLength={questionsTotalNumber}
      />
    </>
  );
}

const mapDispatchToProps = {
  goodAnswerPick: goodAnswer,
  wrongAnswerPick: wrongAnswer,
};

export default connect(
  null,
  mapDispatchToProps,
)(QuestionContainer);
