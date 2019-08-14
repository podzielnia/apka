import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import tree from 'assets/drzewko-bw.svg';
import React from 'react';
import { Link } from 'react-router-dom';

const OuterContainer = withStyles({
  root: {
    height: '100vh',
    padding: '3rem 2rem 0rem 2rem',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
})(Container);

const InnerContainer = withStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
})(Container);

const StyledButton = withStyles({
  root: {
    margin: '2rem 1rem 1rem 1rem',
  },
})(Button);

const TransparentButton = withStyles({
  root: {
    color: '#009688',
    background: 'none',
    '&:hover': {
      background: 'none',
    },
  },
})(Button);

const imgStyles = {
  minHeight: '8rem',
  height: '30rem',
  marginTop: '1.5rem',
};

const linkStyles = {
  textDecoration: 'none',
  color: '#009688',
};

export default function Summary() {
  return (
    <>
      <OuterContainer maxWidth="sm">
        <Typography variant="h6">Podsumowanie</Typography>
        <Typography variant="h6" style={{ margin: '1.5rem' }}>
          10/10
        </Typography>
        <Typography variant="subtitle1">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda,
          repudiandae! Vel, aperiam debitis officia officiis quam laborum.
        </Typography>
        <InnerContainer>
          <StyledButton>UDOSTĘPNIJ NA FACEBOOKU</StyledButton>
          <TransparentButton>
            <Link to="/" style={linkStyles}>
              Wróć do strony głównej
            </Link>
          </TransparentButton>
        </InnerContainer>
        <img src={tree} style={imgStyles} alt="tree illustration" />
      </OuterContainer>
    </>
  );
}
