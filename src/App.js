import React from 'react';
import 'antd/dist/antd.css';
import Todo from './container/Todo';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore();

export default class App extends React.Component {
  componentWillMount() {
    /*  */
  }

  render() {
    return (
      <Provider store={store}>
        <Todo />
      </Provider>
    );
  }
}
