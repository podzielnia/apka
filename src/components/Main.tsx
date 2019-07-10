import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import QuestionContainer from './QuestionContainer';

const Main = () => {
  return (
    <div className="App">
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Podzielnia
          </Typography>
        </Toolbar>
      </AppBar>
      <QuestionContainer />
    </div>
  );
};

export default Main;
