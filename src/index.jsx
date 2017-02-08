import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

// Import sites core css
// This will be handled by webpack and injected into the html served
import './sass/main.scss'

// Import redux store
import store from './store'

// Import root App component
import App from './components/App'

// Get the root element to bootstrap the app into
const mountElement = document.getElementById('root')

// Finally render :)
// Provider is a part of react-redux that injects the required state parts into container components
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  mountElement
)
