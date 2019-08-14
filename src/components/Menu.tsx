import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import React from 'react';
import { Link } from 'react-router-dom';

const OuterContainer = withStyles({
  root: {
    padding: '3rem 2rem',
    textAlign: 'center',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
})(Container);

const InnerContainer = withStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 'fit-content',
  },
})(Container);

const StyledButton = withStyles({
  root: {
    marginBottom: '2rem',
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

const styledButtonLink = {
  textDecoration: 'none',
  color: 'white',
};

const transparentButtonLink = {
  textDecoration: 'none',
  color: '#009688',
};

export default function Menu() {
  return (
    <OuterContainer>
      <Typography variant="h4">PODZIELNIA LOGO</Typography>
      <InnerContainer>
        <StyledButton>
          <Link to={'/quiz'} style={styledButtonLink}>
            Nowa gra
          </Link>
        </StyledButton>
        <TransparentButton>
          <Link to={'/about'} style={transparentButtonLink}>
            O projekcie
          </Link>
        </TransparentButton>
      </InnerContainer>
      <Typography variant="subtitle2">All rights reserved</Typography>
    </OuterContainer>
  );
}
