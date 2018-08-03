import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import { Provider } from 'react-redux'
import { Router, Route, IndexRedirect, browserHistory, IndexLink } from 'react-router'
import index from './reducers/index'
import './index.css'
import App from './App'
import server from './middleware/severApi'
import Todo from './container/Todo'
import Dangan from './container/dangan'
import Kecheng from './container/kecheng'
import registerServiceWorker from './registerServiceWorker'
const logger = createLogger();


const store = createStore(index, applyMiddleware(server,logger));


const routes = [{
  path: '/',
  component: App,
  indexRoute: { component: Dangan },
  childRoutes: [
    { path: 'Todo', component: Todo },
    { path: 'Dangan', component: Dangan },
    { path: 'Kecheng', component: Kecheng }    //path可以传参数  //如果有括号   可以不用输入id
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
