import { createStore, combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'


const rootReducer = combineReducers({
  routing: routerReducer
})

const store = createStore(rootReducer)

export default store
