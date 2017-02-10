import { createStore, combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import titleReducer from './titleReducer'

const rootReducer = combineReducers({
  title: titleReducer,
  routing: routerReducer
})

const store = createStore(rootReducer)

export default store
