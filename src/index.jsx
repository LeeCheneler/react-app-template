/* eslint-disable */
import React from 'react'
import ReactDOM from 'react-dom'
/* eslint-enable */
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router'
import { Link } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import createHistory from 'history/createBrowserHistory'
// This is imported as a dev dependency and made available via webpack plugin (it's weird)
// eslint-disable-next-line import/no-extraneous-dependencies
import * as OfflinePluginRuntime from 'offline-plugin/runtime'

// Import sites core css
// This will be handled by webpack and injected into the html served
import 'sass/main.scss'

// Import redux store builder
import buildStore from 'store'

// Configure service work for good offline experience
OfflinePluginRuntime.install()

// Configure store, it uses connected-react-router under the hood to hook up rooting changes
const history = createHistory()
const store = buildStore(history)

// Get the root element to bootstrap the app into
const mountElement = document.getElementById('root')

// Finally render :)
// Provider is a part of react-redux that injects the required state parts into container components
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" exact component={() => <div><h1>Home</h1><Link to="/hello">hello</Link></div>} />
        <Route path="/hello" component={() => <div><h1>Hello</h1><Link to="/">home</Link></div>} />
        <Route component={() => <span>Not Found!</span>} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  mountElement
)
