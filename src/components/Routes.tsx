import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import About from './About';
import Menu from './Menu';
import Page404 from './Page404';
import Quiz from './Quiz';
import Summary from './Summary';

const routes = {
  root: '/',
  quiz: '/quiz',
  about: '/about',
  summary: '/summary',
};

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={routes.root} component={Menu} />
        <Route path={routes.quiz} component={Quiz} />
        <Route path={routes.about} component={About} />
        <Route path={routes.summary} component={Summary} />
        <Route component={Page404} />
      </Switch>
    </Router>
  );
};

export default Routes;
export { routes };
