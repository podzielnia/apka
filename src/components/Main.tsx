import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import React from 'react';
import Routes from './Routes';

const AppInnerWrapper = withStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyItems: 'space-between',
    height: '100vh',
    padding: '0',
  },
})(Container);

const Main = () => {
  return (
    <div className="App">
      <AppInnerWrapper>
        <Routes />
      </AppInnerWrapper>
    </div>
  );
};

export default Main;
