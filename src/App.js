import React from 'react';
import MessageItemView from './components/MessageItem.js';
import DialogView from './components/DialogView.js';
import HeaderItemView from './components/header.js';
import { DIALOG_SHOW_STATUS } from './const.js';
import './App.css';

// const icon = require('./resource/icon_Good_B-2.png');

import icon from './resource/icon_Good_B-2.png';

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {

      header:[
        {
          title:'微信',
          descript:'+',
        }
      ],
      messages: [
        {
          icon: icon,
          title: '小年糕',
          descript: 'hello 小年糕',
          time: '7-18 11:14',
          another: '更多',
        },
        {
          icon: icon,
          title: '小板凳',
          descript: 'hello 小板凳',
          time: '7-18 11:15',
          another: '更多',
        },
        {
          icon: icon,
          title: '小豆包',
          descript: 'hi 小豆包',
          time: '7-17 10:00',
          another: '更多',
        }
      ],
      isDialogActive: DIALOG_SHOW_STATUS.HIDE
    }
  }

  onItemClick = (message) => {
    console.log(message);
  }




  handleAddItem = item => {
    const newMessages = this.state.messages.slice();
    newMessages.unshift({
      icon: icon,
      another: '更多',
      ...item,
    });
    this.setState({
      messages: newMessages,
      isDialogActive: DIALOG_SHOW_STATUS.HIDE,
    });
  }




  
  handleShowDialog = isActive => {
    this.setState({ isDialogActive: isActive });
    
  }

  renderMessageList = () => {
    const messageViews = this.state.messages.map((item,i) => {
      return <MessageItemView key={i} item={item} onClick={this.handleItemMoreClick}/>
    });
    return messageViews;
  }

  renderHeaderlist=()=>{
    const headerView=this.state.header.map((item,i)=>{
      return <HeaderItemView key={i} item={item} onClick={this.handleShowAddViewClick}/>
    });
    return headerView;
  }
  handleShowAddViewClick = () => {
    this.setState({
      isDialogActive: DIALOG_SHOW_STATUS.SHOW_ADD_MESSAGE,
    })
  }

  handleItemMoreClick = () => {
    this.setState({
      isDialogActive: DIALOG_SHOW_STATUS.SHOW_MORE_BTN,
    })
    console.log("123");
  }


  handleSetToTop = () => {
    const { handleItemIndex, messages } = this.state
    console.log(handleItemIndex)
    const messageTmp = messages.slice()
    const item = messageTmp.splice(handleItemIndex, 1)
    messageTmp.unshift(item)
    this.setState({
      messages: messageTmp,
      isDialogActive: DIALOG_SHOW_STATUS.HIDE,
    })
  }


  
  render() {
    return (
      <div>
        { this.renderHeaderlist()}

        { this.renderMessageList() }

        <nav className="chat-nav">
          <div className="chat-nav__item" onClick={this.handleAddItem}>
            <img className="chat-nav__item__icon" src={icon} alt="" />
            <div className="chat-nav__item__name">微信</div>
          </div>
          <div className="chat-nav__item">
            <img className="chat-nav__item__icon" src={icon} alt="" />
            <div className="chat-nav__item__name">通讯录</div>
          </div>
          <div className="chat-nav__item">
            <img className="chat-nav__item__icon" src={icon} alt="" />
            <div className="chat-nav__item__name">发现</div>
          </div>
          <div className="chat-nav__item" onClick={this.handleShowDialog.bind(this, true)}>
            <img className="chat-nav__item__icon" src={icon} alt="" />
            <div className="chat-nav__item__name">我</div>
          </div>
        </nav>



        <DialogView
          isActive={this.state.isDialogActive}
          onCloseClick={this.handleShowDialog}
          handleAddItem={this.handleAddItem}
          handleDeleteItem={this.handleDeleteItem}
          handleSetToTop={this.handleSetToTop}
          handleMultipleClick={this.handleMultipleClick}
        />



        
      </div>
    );
  }
}

export default App;
