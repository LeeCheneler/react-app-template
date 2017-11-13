import React from 'react'
import { Route, Switch } from 'react-router'
import { Link } from 'react-router-dom'

import AsyncComponent from 'components/async/AsyncComponent'

import routes from './routes'

const App = () =>
  <div>
    <nav>
      <ul className="pl-o-list">
        {routes.map(route => (
          <li key={route.path} className="pl-o-list__item">
            <Link to={route.path}>{route.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
    <Switch>
      {routes.map(route => (
        <Route
          key={route.path}
          path={route.path}
          component={props => <AsyncComponent {...props} load={route.load} />}
        />
      ))}
    </Switch>
  </div>

export default App
