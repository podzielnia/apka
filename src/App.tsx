import { MuiThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import CustomTheme from './CustomTheme';

import Main from './components/Main';
import rootReducer from './store/reducers/rootReducer';

const store = createStore(rootReducer);

const App: React.FC = () => {
  return (
    <MuiThemeProvider theme={CustomTheme}>
      <Provider store={store}>
        <Main />
      </Provider>
    </MuiThemeProvider>
  );
};

export default App;
