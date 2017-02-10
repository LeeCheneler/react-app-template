import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

// Import sites core css
// This will be handled by webpack and injected into the html served
import './sass/main.scss'

// Import components
import WelcomePage from './components/pages/WelcomePage'
import NotFoundPage from './components/pages/NotFoundPage'

// Import redux store
import store from './store'

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

// Get the root element to bootstrap the app into
const mountElement = document.getElementById('root')

// Finally render :)
// Provider is a part of react-redux that injects the required state parts into container components
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={WelcomePage} />
      <Route path="*" component={NotFoundPage} />
    </Router>
  </Provider>,
  mountElement
)
