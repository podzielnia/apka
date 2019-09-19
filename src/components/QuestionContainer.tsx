import { Box, Button, ButtonGroup, Container } from '@material-ui/core';
// import Container from '@material-ui/core/Container';
import LinearProgress from '@material-ui/core/LinearProgress';
import { lighten, makeStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Cancel from '@material-ui/icons/Cancel';
import CheckCircle from '@material-ui/icons/CheckCircle';
import React, { useState } from 'react';
import { Answer, Question } from '../types/Question';
import Bar from './Bar';
import Modal from './Modal';
import QuestionView from './QuestionView';

const BorderLinearProgress = withStyles({
  root: {
    height: 10,
    backgroundColor: lighten('#2e378d', 0.7),
  },
  bar: {
    borderRadius: 20,
    backgroundColor: '#2e378d',
  },
})(LinearProgress);

const QuizContainer = withStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100vh',
    padding: 0,
    background: '#fff',
    position: 'relative',
  },
})(Container);

const CustomButtonGroup = withStyles({
  root: {
    position: 'absolute',
    right: '1rem',
    top: '5.5rem',
    borderRadius: '10px',
  },
})(ButtonGroup);

const useStyles = makeStyles({
  root: {
    color: '#7bc914',
  },
  wrong: {
    color: 'red',
  },
});

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

  const classes = useStyles();

  return (
    <QuizContainer>
      <Box>
        <Bar>QUIZ</Bar>
        <BorderLinearProgress
          variant="determinate"
          value={(questionNumber / questionsTotalNumber) * 100}
        />
      </Box>
      <CustomButtonGroup>
        <Button classes={{ root: classes.wrong }}>
          <Typography variant="h6" style={{ marginRight: '0.5rem' }}>
            4
          </Typography>
          <Cancel color="error" />
        </Button>
        <Button classes={{ root: classes.root }}>
          <Typography variant="h6" style={{ marginRight: '0.5rem' }}>
            2
          </Typography>
          <CheckCircle />
        </Button>
      </CustomButtonGroup>
      <QuestionView question={question} onPickAnswer={onPick} />
      <Modal
        modalVisible={modalVisible}
        closeModal={closeModal}
        message={getMessage()}
        hint={chosenAnswer.hint}
        answerNumber={questionNumber}
        questionsLength={questionsTotalNumber}
      />
    </QuizContainer>
  );
}
