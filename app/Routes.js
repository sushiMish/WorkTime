import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import routes from './constants/routes'
import App from './containers/App'
import HomePage from './containers/HomePage'
import ReportsPage from './containers/ReportsPage'

export default (props) => (
  <Router>
    <App history={props.history}>
      <Switch>
        <Route path={routes.REPORTS} component={ReportsPage} />
        <Route path={routes.HOME} component={HomePage} />
      </Switch>
    </App>
  </Router>
)
