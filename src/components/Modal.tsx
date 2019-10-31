import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogActions from '@material-ui/core/DialogActions';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles,
} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import leafIconGood from 'assets/leaf-good.svg';
import leafIconWrong from 'assets/leaf-wrong.svg';
import React from 'react';
import { Link } from 'react-router-dom';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(2),
      alignItems: 'center',
    },
  });

export interface DialogTitleProps extends WithStyles<typeof styles> {
  id: string;
  children: React.ReactNode;
  closeModal: () => void;
}

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
  const { children, classes } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root}>
      <Typography variant="h6" align="center">
        {children}
      </Typography>
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
  },
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
    background: '#dedfe8',
    '&:hover': {
      backgroundColor: '#dedfe8',
    },
  },
})(Button);

interface Props {
  modalVisible: boolean;
  closeModal: () => void;
  message: string;
  hint: string;
  answerNumber: number;
  questionsLength: number;
}

export default function Modal({
  modalVisible,
  closeModal,
  message,
  hint,
  answerNumber,
  questionsLength,
}: Props) {
  const btnNextQuestion = 'NASTĘPNE PYTANIE';
  const btnLastQuestion = 'PRZEJDŹ DO PODSUMOWANIA';

  return (
    <div>
      <CompleteDialog
        aria-labelledby="customized-dialog-title"
        open={modalVisible}
      >
        <DialogTitle id="customized-dialog-title" closeModal={closeModal}>
          {message}
        </DialogTitle>
        {message === 'Dobra odpowiedź!' ? (
          <img src={leafIconGood} className="leaf-icon" />
        ) : (
          <img src={leafIconWrong} className="leaf-icon" />
        )}
        <DialogContent>
          <Typography gutterBottom align="center">
            {hint}
          </Typography>
        </DialogContent>
        <Typography gutterBottom align="center" style={{ fontWeight: 'bold' }}>
          Ukończono {answerNumber}/{questionsLength}
        </Typography>
        <DialogActions>
          <StyledButton variant="contained" onClick={closeModal}>
            {answerNumber === questionsLength ? (
              <Link to={'/summary'} className="summary__link">
                {btnLastQuestion}{' '}
              </Link>
            ) : (
              btnNextQuestion
            )}
          </StyledButton>
        </DialogActions>
      </CompleteDialog>
    </div>
  );
}
