import { createStore, combineReducers } from 'redux'

import messageReducer from './messageReducer'

const rootReducer = combineReducers({
  message: messageReducer
})

const store = createStore(rootReducer)

export default store
