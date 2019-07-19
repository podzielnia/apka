import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import React from 'react';

import { Answer } from '../types/Question';

interface Props {
  answers: Answer[];
  onPick: (answer: Answer) => void;
}

export default function AnswerPicker({ answers, onPick }: Props) {
  return (
    <ButtonGroup fullWidth variant="contained">
      {answers.map(answer => (
        <Button key={answer.text} onClick={() => onPick(answer)}>
          {answer.text}
        </Button>
      ))}
    </ButtonGroup>
  );
}
