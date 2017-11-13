import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import { routerReducer, routerMiddleware } from 'react-router-redux'

const rootReducer = combineReducers({
  router: routerReducer
})

const buildStore = history => createStore(
  rootReducer,
  compose(applyMiddleware(routerMiddleware(history)))
)

export default buildStore
