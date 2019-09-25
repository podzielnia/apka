import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import menuImg from 'assets/img-menu.png';
import logo from 'assets/podzielnia.png';
import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from './Routes';

const OuterContainer = withStyles({
  root: {
    padding: '1rem 2rem',
    textAlign: 'center',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    maxWidth: '20rem',
  },
})(Container);

const InnerContainer = withStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
})(Container);

const StyledButton = withStyles({
  root: {
    margin: '1.5rem 0rem 1.5rem 0rem',
  },
})(Button);

const TransparentButton = withStyles({
  root: {
    color: '#000',
    background: 'none',
    border: '2px solid #fff',
    marginBottom: '1rem',
    '&:hover': {
      background: 'none',
    },
  },
})(Button);

const styledButtonLink = {
  textDecoration: 'none',
  color: '#000',
};

const transparentButtonLink = {
  textDecoration: 'none',
  color: '#000',
};

export default function Menu() {
  return (
    <OuterContainer>
      <img src={logo} className="podzielnia-logo" />
      <Typography variant="h6">aplikacja edukacyjna</Typography>
      <img src={menuImg} className="menu-img" />
      <Typography variant="subtitle2">
        Świat zagrożony katastrofą ekologiczną ma jeszcze szansę na równowagę.
        Sprawdź swoją wiedzę o zero waste.
      </Typography>
      <InnerContainer>
        <StyledButton>
          <Link to={routes.quiz} style={styledButtonLink}>
            Nowa gra
          </Link>
        </StyledButton>
        <TransparentButton>
          <Link to={routes.about} style={transparentButtonLink}>
            O projekcie
          </Link>
        </TransparentButton>
      </InnerContainer>
    </OuterContainer>
  );
}
