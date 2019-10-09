import { Box, Button, ButtonGroup, Container } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Cancel from '@material-ui/icons/Cancel';
import CheckCircle from '@material-ui/icons/CheckCircle';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { ReduxState } from 'store/reducers/rootReducer';
import { goodAnswer, wrongAnswer } from '../store/reducers/actions';
import { Answer, Question } from '../types/Question';
import Bar from './Bar';
import Modal from './Modal';
import QuestionView from './QuestionView';

const QuizContainer = withStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100vh',
    padding: 0,
    background: '#fefcfd',
    position: 'relative',
  },
})(Container);

const QuizInnerWrapper = withStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '90vh',
    justifyContent: 'space-around',
  },
})(Box);

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
  goodAnswerCounter: number;
  wrongAnswerCounter: number;
  onAnswerPick: () => void;
  goodAnswerPick: () => void;
  wrongAnswerPick: () => void;
}

export function QuestionContainer({
  question,
  questionNumber,
  questionsTotalNumber,
  goodAnswerCounter,
  wrongAnswerCounter,
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
    } else {
      wrongAnswerPick();
    }
  };

  const classes = useStyles();

  return (
    <QuizContainer>
      <Bar>QUIZ</Bar>
      <QuizInnerWrapper>
        <CustomButtonGroup>
          <Button classes={{ root: classes.wrong }}>
            <Typography variant="h6" style={{ marginRight: '0.5rem' }}>
              {wrongAnswerCounter}
            </Typography>
            <Cancel color="error" />
          </Button>
          <Button classes={{ root: classes.root }}>
            <Typography variant="h6" style={{ marginRight: '0.5rem' }}>
              {goodAnswerCounter}
            </Typography>
            <CheckCircle />
          </Button>
        </CustomButtonGroup>
        <QuestionView
          question={question}
          onPickAnswer={onPick}
          progress={(questionNumber / questionsTotalNumber) * 100}
        />
        <Modal
          modalVisible={modalVisible}
          closeModal={closeModal}
          message={getMessage()}
          hint={chosenAnswer.hint}
          answerNumber={questionNumber}
          questionsLength={questionsTotalNumber}
        />
      </QuizInnerWrapper>
    </QuizContainer>
  );
}

const mapDispatchToProps = {
  goodAnswerPick: goodAnswer,
  wrongAnswerPick: wrongAnswer,
};

const mapStateToProps = (state: ReduxState) => {
  return {
    goodAnswerCounter: state.score.goodAnswers,
    wrongAnswerCounter: state.score.wrongAnswers,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(QuestionContainer);
