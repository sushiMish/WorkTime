/* eslint react/prop-types: 0 */
import React from 'react';
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect
} from 'react-router-dom';
import routes from './constants/routes';
import App from './containers/App';
import HomePage from './containers/HomePage';
import ReportsPage from './containers/ReportsPage';

export default ({ history }) => (
  <Router>
    <App history={history}>
      <Switch>
        <Route path={routes.REPORTS} component={ReportsPage} />
        <Route exact path={routes.HOME} component={HomePage} />
        <Route component={() => <Redirect to={routes.HOME} />} />
      </Switch>
    </App>
  </Router>
);
