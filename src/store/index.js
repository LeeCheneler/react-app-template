import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'

// TODO - replace placeholder when you need your first reducer
const placeholder = (s = 'hello world!') => s
const rootReducer = combineReducers({
  placeholder
})

const buildStore = history => createStore(
  connectRouter(history)(rootReducer),
  compose(
    applyMiddleware(
      routerMiddleware(history), // for dispatching history actions
      // ... other middlewares ...
    ),
  ),
)

export default buildStore
