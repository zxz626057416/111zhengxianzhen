import React from 'react';
import './AddTodo.css';
import { addTodo } from '../../actions'

const KEY_RETURN = 13;

export default class AddTodo extends React.Component {
  constructor() {
    super();
    this.inputValue = '';
  }

  // handleInputChange = e => {
  //   this.inputValue = e.target.value;
  // }

  // listenReturnKeyDown = e => {
  //   if (e.keyCode === KEY_RETURN) {
  //     this.handleSubmit();
  //   }
  // }

  // handleSubmit = () => {
  //   if (!this.inputValue) {
  //     return;
  //   }
  //   const { todoActions } = this.props;
  //   todoActions.addTodo((new Date()).getTime() ,this.inputValue);
    
  //   this.inputValue = '';
  // }

  render() {
    return (
      <div className="NavBar">
        <div className="NavBarLeft">微信</div>
        <div className="NavBarRight" >+</div>
      </div>
    );
  }
}
