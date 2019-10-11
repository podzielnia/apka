import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import LooksOne from '@material-ui/icons/LooksOne';
import LooksTwo from '@material-ui/icons/LooksTwo';
import React from 'react';

import { Answer } from '../types/Question';

interface Props {
  answers: Answer[];
  onPick: (answer: Answer) => void;
}

const AnswerButton = withStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    background: '#fff',
    color: '#000',
    height: '5rem',
    maxHeight: '10rem',
    width: '100%',
    margin: '1rem auto',
    position: 'relative',
    paddingLeft: '4rem',
    '&:hover': {
      background: '#fff',
    },
  },
})(Button);

const useStyles = makeStyles({
  root: {
    color: '#2e378d',
    fontSize: '4rem',
    position: 'absolute',
    left: '0.2rem',
  },
});

export default ({ answers, onPick }: Props) => {
  const classes = useStyles();
  return (
    <Container>
      {answers.map(answer => (
        <AnswerButton key={answer.text} onClick={() => onPick(answer)}>
          {answer.isCorrect ? (
            <LooksOne classes={{ root: classes.root }} />
          ) : (
            <LooksTwo classes={{ root: classes.root }} />
          )}
          <Typography variant="subtitle2">{answer.text}</Typography>
        </AnswerButton>
      ))}
    </Container>
  );
};
