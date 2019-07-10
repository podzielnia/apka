import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import Main from './components/Main';
import rootReducer from './store/reducers/rootReducer';

const store = createStore(rootReducer, composeWithDevTools({})());

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

export default App;
