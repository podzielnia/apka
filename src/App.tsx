import { MuiThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import { Provider } from 'react-redux';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createFirestoreInstance, reduxFirestore } from 'redux-firestore';
import CustomTheme from './CustomTheme';

import firebaseConfig from '../src/config/firebase';
import Main from './components/Main';
import rootReducer from './store/reducers/rootReducer';

const store = createStore(
  rootReducer,
  composeWithDevTools({})(reduxFirestore(firebaseConfig)),
);

const rrfProps = {
  firebase: firebaseConfig,
  config: { userProfile: 'users' },
  dispatch: store.dispatch,
  createFirestoreInstance,
};

const App: React.FC = () => {
  return (
    <MuiThemeProvider theme={CustomTheme}>
      <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
          <Main />
        </ReactReduxFirebaseProvider>
      </Provider>
    </MuiThemeProvider>
  );
};

export default App;
