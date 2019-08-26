import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from './Routes';

const OuterContainer = withStyles({
  root: {
    padding: '3rem',
    textAlign: 'center',
  },
})(Container);

const linkStyles = {
  textDecoration: 'none',
  color: '#009688',
};

const Page404 = () => {
  return (
    <OuterContainer maxWidth="sm">
      <Typography variant="h5" style={{ margin: '2.5rem' }}>
        Strona nie została odnaleziona
      </Typography>
      <Link to={routes.root} style={linkStyles}>
        Wróć do strony głównej
      </Link>
    </OuterContainer>
  );
};

export default Page404;
