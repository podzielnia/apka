import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import About from './About';
import Quiz from './Quiz';
import Summary from './Summary';

const SplashScreen = () => {
  return (
    <div>
      <h2>PODZIELNIA LOGO</h2>
      <button>
        <Link to={'/quiz'}>Nowa gra</Link>
      </button>
      <button>
        <Link to={'/about'}>O projekcie</Link>
      </button>
    </div>
  );
};

const Routes = () => {
  return (
    <Router>
      <Route exact path="/" component={SplashScreen} />
      <Route path="/quiz" component={Quiz} />
      <Route path="/about" component={About} />
      <Route path="/summary" component={Summary} />
    </Router>
  );
};

const Main = () => {
  return (
    <div className="App">
      <Routes />
    </div>
  );
};

export default Main;
