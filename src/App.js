import React,{Component} from 'react';
import './App.css';
import Todo from './container/todo'


import rootReducer from './reducers';
import {Provider} from 'react-redux';
import {createStore} from 'redux';



const store = createStore(
    rootReducer,
  )
export default class app extends Component{

    render (){
        return(

            
            <Provider store={store}>
            <Todo />
            </Provider>
            

        )
    }
}