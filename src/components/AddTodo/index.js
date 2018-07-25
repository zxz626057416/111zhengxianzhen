import React from 'react';
import './AddTodo.css';
import { addTodo } from '../../actions'

const KEY_RETURN = 13;

export default class AddTodo extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: ''
    };
  }

  handleInputChange = e => {
    this.setState({ inputValue: e.target.value });
  }

  listenReturnKeyDown = e => {
    if (e.keyCode === KEY_RETURN) {
      this.handleSubmit();
    }
  }

  handleSubmit = () => {
    if (!this.state.inputValue) {
      return;
    }
    const { dispatch } = this.props;
    const action = addTodo(this.state.inputValue);
    dispatch(action);
    
    this.setState({ inputValue: '' });
  }

  render() {
    const {messages}=this.props;
    console.log(messages)
    return (
      <li className="chat-list__item" >
        <img className="chat-list__item__avatar" src={messages.icon} alt="" />
        <div className="chat-list__item__content">
          <div className="chat-list__item__content__topBar">
            <h2 className="chat-list__item__content__title">{messages.title}</h2>
            <div className="chat-list__item__content__time">{messages['time']}</div>
          </div>
          <div className="chat-list__item__content__recentMsg">{messages['descript']}</div>
          <div className="chat-list__item__content__moreBtn" >更多</div>
        </div>
      </li>
    );
  }
}
