import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

export default function AnswerPicker() {
  return (
    <Grid item xs={12}>
      <ButtonGroup fullWidth variant="contained">
        <Button>Wyrzucam do kosza</Button>
        <Button>Oddaje w punkcie zbiórki elektroodpadów</Button>
      </ButtonGroup>
    </Grid>
  );
}
