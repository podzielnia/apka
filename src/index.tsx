import { MuiThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CustomTheme from './CustomTheme';
import './index.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <MuiThemeProvider theme={CustomTheme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root'),
);

serviceWorker.register();
