import Container from '@material-ui/core/Container';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      // padding: theme.spacing(3, 2),
      textAlign: 'center',
    },
  }),
);

export default function QuestionText({ text }: { text: string }) {
  const classes = useStyles();

  return (
    <div>
      <Container className={classes.root}>
        <Typography variant="h6" component="h3">
          {text}
        </Typography>
      </Container>
    </div>
  );
}
