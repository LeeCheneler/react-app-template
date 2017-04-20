import React from 'react'
import { Route, Switch } from 'react-router'

import WelcomePage from 'components/pages/WelcomePage'
import NotFoundPage from 'components/pages/NotFoundPage'

const App = () => {
  return (
    <Switch>
      <Route path="/" exact component={WelcomePage} />
      <Route component={NotFoundPage} status={404} />
    </Switch>
  )
}

export default App
