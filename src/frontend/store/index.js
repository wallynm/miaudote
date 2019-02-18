import { createStore, applyMiddleware, combineReducers } from 'redux'
import { routerReducer, createRouterMiddleware, initialRouterState } from 'connected-next-router'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import Router from '../../routes'

const initData = {}

const routerMiddleware = createRouterMiddleware({
  Router,
  methods: {
    push: 'pushRoute',
    replace: 'replaceRoute',
    prefetch: 'prefetchRoute',
  },
});

export const reducers = combineReducers({
  router: routerReducer,
  ui: require('./ui').default,
  animals: require('./animals/reducers').default,
  user: require('./user/reducers').default
})

export const initStore = (initialState = initData, options) => {
  // Set default values to routing
  if (options.asPath) {
    initialState.router = initialRouterState(options.asPath);
  }

  return createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware, routerMiddleware))
  )
}