import { createBrowserHistory } from 'history'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

// Import App component
import App from 'components/App'

// Import sites core css
// This will be handled by webpack and injected into the html served
import 'sass/main.scss'

// Import redux store
import store from './store'

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(createBrowserHistory(), store)

// Get the root element to bootstrap the app into
const mountElement = document.getElementById('root')

// Finally render :)
// Provider is a part of react-redux that injects the required state parts into container components
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  mountElement
)
