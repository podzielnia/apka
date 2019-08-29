import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { withStyles } from '@material-ui/core/styles';
import React from 'react';

import { Answer } from '../types/Question';

interface Props {
  answers: Answer[];
  onPick: (answer: Answer) => void;
}

const AnswerButton = withStyles({
  root: {
    background: '#f1f1f1',
    color: '#009688',
  },
})(Button);

export default ({ answers, onPick }: Props) => (
  <ButtonGroup fullWidth variant="contained">
    {answers.map(answer => (
      <AnswerButton key={answer.text} onClick={() => onPick(answer)}>
        {answer.text}
      </AnswerButton>
    ))}
  </ButtonGroup>
);
