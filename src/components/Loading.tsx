import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles(theme => ({
  progress: {
    marginLeft: '50%',
    marginTop: '50%',
  },
}));

export default function Loading() {
  const classes = useStyles();

  return <CircularProgress className={classes.progress} />;
}
