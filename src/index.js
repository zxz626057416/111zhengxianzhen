import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import { Provider } from 'react-redux'
import { Router, Route, IndexRedirect, browserHistory, IndexLink } from 'react-router'
import index from './reducers/index'
import './index.css'
import App from './App'

import Todo from './container/Todo'
import Dangan from './container/dangan'
import Kecheng from './container/kecheng'

import registerServiceWorker from './registerServiceWorker'
const logger = createLogger();
const store = createStore(index, applyMiddleware(logger));

const routes = [{
  path: '/',
  component: App,
  indexRoute: { component: Todo },
  childRoutes: [
    { path: 'Todo', component: Todo },
    { path: 'Dangan', component: Dangan },
    { path: 'Kecheng', component: Kecheng }
  ]
}]

ReactDOM.render(
  <Provider store={store}>
    <Router routes={routes} history={browserHistory}/>
    {/*<WeChatMessage />*/}
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
