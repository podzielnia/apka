import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

import { Answer } from "../types/Question";

export default function AnswerPicker({ answers }: { answers: Answer[] }) {
  return (
    <ButtonGroup fullWidth variant="contained">
      {answers.map(answer => (
        <Button>{answer.text}</Button>
      ))}
    </ButtonGroup>
  );
}
