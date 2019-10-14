import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import shippments from './ducks/shippments'
import shippment from './ducks/shippment'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
  shippments,
  shippment,
})

export default initalState =>
  createStore(
    rootReducer,
    initalState,
    composeEnhancers(applyMiddleware(thunk))
  )
