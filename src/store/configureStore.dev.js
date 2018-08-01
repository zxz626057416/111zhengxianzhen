import { createStore, applyMiddleware } from 'redux'

import { createLogger } from 'redux-logger'
import rootReducer from '../reducers'
import serverApi from '../middleware/severApi';

const configureStore = preloadedState => {
  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware( serverApi, createLogger())
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      store.replaceReducer(rootReducer)
    })
  }

  return store
}

export default configureStore
