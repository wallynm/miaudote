import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

const exampleInitialState = {
  lastUpdate: 0,
  light: false,
  count: 0
}

export const reducers = combineReducers({
  ui: require('./ui').default,
  order: require('./animals/reducers').default,
  store: require('./user/reducers').default
})

export const initStore = (initialState = exampleInitialState) => {
  return createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}