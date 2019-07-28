import LinearProgress from '@material-ui/core/LinearProgress';
import { lighten, withStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';

import { Answer, Question } from '../types/Question';
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
}

export default function QuestionContainer({
  question,
  questionNumber,
  questionsTotalNumber,
  onAnswerPick,
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
  };

  return (
    <>
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
