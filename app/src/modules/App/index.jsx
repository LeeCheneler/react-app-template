import React from 'react'
import { Route, Switch } from 'react-router'
import { Link } from 'react-router-dom'

import AsyncComponent from 'components/async/AsyncComponent'
import loadRouteOne from 'modules/RouteOne/index.bundle'
import loadRouteTwo from 'modules/RouteTwo/index.bundle'

const App = () =>
  <div>
    <nav>
      <ul className="pl-o-list">
        <li className="pl-o-list__item">
          <Link to="/route-one">Route One</Link>
        </li>
        <li className="pl-o-list__item">
          <Link to="/route-two">Route Two</Link>
        </li>
      </ul>
    </nav>
    <Switch>
      <Route path="/route-one" component={() => <AsyncComponent load={loadRouteOne} />} />
      <Route path="/route-two" component={() => <AsyncComponent load={loadRouteTwo} />} />
    </Switch>
  </div>

export default App
