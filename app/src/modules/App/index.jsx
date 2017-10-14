import React from 'react'
import { Route, Switch } from 'react-router'

import Home from 'modules/Home'

const App = () =>
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </div>

export default App
