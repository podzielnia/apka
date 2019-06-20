import React from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(3, 2)
    }
  })
);

export default function QuestionText() {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
          Zepsute sprzęty AGD, których nie da się już naprawić:
        </Typography>
        <Typography component="p">
          KOMENTARZ: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras
          vel lorem. Etiam pellentesque aliquet tellus.
        </Typography>
      </Paper>
    </div>
  );
}
