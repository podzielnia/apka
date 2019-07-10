import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Main from './components/Main';
import rootReducer from './store/reducers/rootReducer';

const store = createStore(rootReducer);

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

export default App;
