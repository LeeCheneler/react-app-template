import { createStore, combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import title from 'store/title/reducer'

const rootReducer = combineReducers({
  title,
  routing: routerReducer
})

const store = createStore(rootReducer)

export default store
