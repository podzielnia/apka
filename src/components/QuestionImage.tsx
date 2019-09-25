import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    img: {
      margin: '4rem auto 1rem auto',
      display: 'block',
      minWidth: '40%',
      minHeight: '40%',
      maxHeight: '35rem',
      width: '75%',
      objectFit: 'contain',
    },
  }),
);

const defaultImage =
  'https://images.unsplash.com/photo-1560945927-9cec08c705cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2851&q=80';

interface Props {
  image?: string;
}

export default function AnswerPicker({ image }: Props) {
  const classes = useStyles();

  return (
    <img className={classes.img} alt="complex" src={image || defaultImage} />
  );
}
