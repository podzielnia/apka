import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogActions from '@material-ui/core/DialogActions';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import React from 'react';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(2),
      alignItems: 'center',
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(-2),
      top: theme.spacing(-2),
      color: 'white',
      backgroundColor: 'black',
      '&:hover': {
        backgroundColor: 'black',
      }
    },
  });

export interface DialogTitleProps extends WithStyles<typeof styles> {
  id: string;
  children: React.ReactNode;
  onClose: () => void;
}

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
  const { children, classes, onClose } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root}>
      <Typography variant="h6" align="center">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="Close" color="primary" className={classes.closeButton} onClick={onClose}>
          <CloseIcon/>
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const CompleteDialog = withStyles((theme: Theme) => ({
  paperScrollPaper: {
    alignItems: 'center',
    padding: '2rem 1rem',
  },
  paper: {
    overflowY: 'visible',
  }
}))(Dialog);

const DialogContent = withStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme: Theme) => ({
  root: {
    margin: '0 0 2rem 0',
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const StyledButton = withStyles({
  root: {
    background: '#009688',
    '&:hover': {
      backgroundColor: '#009688',
    }  
  }
})(Button);

interface Props {
  toggleModal: boolean;
  closeModal: any;
  message: string;
  hint: string;
  answerNumber: number;
  questionsLength: number;
}

export default function Modal( {toggleModal, closeModal, message , hint, answerNumber, questionsLength}: Props ) {
 
  const btnNextQuestion = 'NASTĘPNE PYTANIE';
  const btnLastQuestion = 'PRZEJDŹ DO POSUMOWANIA';

  return (
    <div>
      <CompleteDialog
        onClose={closeModal}
        aria-labelledby="customized-dialog-title"
        open={toggleModal}
      >
        <DialogTitle id="customized-dialog-title" onClose={closeModal}>
          {message}
        </DialogTitle>
        <DialogContent>
          <Typography gutterBottom align="center">
            {hint}
          </Typography>
        </DialogContent>
        <DialogActions>
          <StyledButton variant="contained" color="primary" onClick={closeModal}>
            {answerNumber === questionsLength ? btnLastQuestion : btnNextQuestion}
          </StyledButton>
        </DialogActions>
        <Typography gutterBottom align="center">
            Ukończono {answerNumber}/{questionsLength}
          </Typography>
      </CompleteDialog>
    </div>
  );
}

