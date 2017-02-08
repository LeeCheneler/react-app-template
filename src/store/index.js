import { createStore, combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import messageReducer from './messageReducer'

const rootReducer = combineReducers({
  message: messageReducer,
  routing: routerReducer
})

const store = createStore(rootReducer)

export default store
