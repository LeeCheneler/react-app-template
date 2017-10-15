import React from 'react'
import { Route, Switch } from 'react-router'
import { Link } from 'react-router-dom'

import AsyncBundle from 'components/common/AsyncBundle'
import loadRouteOne from 'modules/RouteOne/index.bundle'
import loadRouteTwo from 'modules/RouteTwo/index.bundle'

const RouteOne = props =>
  <AsyncBundle load={loadRouteOne}>
    {Comp => <Comp {...props} />}
  </AsyncBundle>

const RouteTwo = props =>
  <AsyncBundle load={loadRouteTwo}>
    {Comp => <Comp {...props} />}
  </AsyncBundle>

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
      <Route path="/route-one" component={RouteOne} />
      <Route path="/route-two" component={RouteTwo} />
    </Switch>
  </div>

export default App
