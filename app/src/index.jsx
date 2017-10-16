// Iport polyfill file
import 'polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import * as OfflinePluginRuntime from 'offline-plugin/runtime'

// Import sites core css
// This will be handled by webpack and injected into the html served
import 'sass/main.scss'

// Import redux store builder
import buildStore from 'store'

// Import components
import App from 'modules/App'

// Configure service work for good offline experience
if (process.env.NODE_ENV === 'production') {
  OfflinePluginRuntime.install()
}

// Configure store, it uses connected-react-router under the hood to hook up rooting changes
const history = createHistory()
const store = buildStore(history)

// Get the root element to bootstrap the app into
const mountElement = document.getElementById('root')

// Render, wrap app in redux's <Provider /> and react-router-redux's <ConnectedRouter />
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  mountElement
)
