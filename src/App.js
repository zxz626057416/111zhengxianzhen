import React from 'react';
import MessageItemView from './components/MessageItem.js';
import DialogView from './components/DialogView.js';
import HeaderItem from './components/Header.js';
import Dialogjiahao from './components/Dialogjiahao.js';
import './App.css';

// const icon = require('./resource/icon_Good_B-2.png');

import icon from './resource/icon_Good_B-2.png';
import icon1 from './resource/jiahao.jpg';

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {

      header:[
        {
        content:'微信',
        icon:icon1,
      }
    ],

      messages: [
        {
          icon: icon,
          title: '小年糕',
          descript: 'hello 小年糕',
          time: '7-18 11:14',
          another:'更多',
        },
        {
          icon: icon,
          title: '小板凳',
          descript: 'hello 小板凳',
          time: '7-18 11:15',
          another:'更多',
        },
        {
          icon: icon,
          title: '小豆包',
          descript: 'hi 小豆包',
          time: '7-17 10:00',
          another:'更多',
        }
      ],
      isDialogActive: false,
      istianjiaActive:false,
    }
  }

  onItemClick = (message) => {
    console.log(message);
  }




  onheaderClick = () => {
    this.setState({
      istianjiaActive:true,
    })
  }

  onguanbiClick=()=>{
    this.setState({
      istianjiaActive:false,
    })
  }





  handleAddItem = () => {
    const newMessages = this.state.messages.slice();
    newMessages.unshift({
      icon: icon,
      title: 'zhanglinxue',
      descript: '哎呦不错',
      time: '20180719'
    });
    this.setState({
      messages: newMessages
    });
  }



  handleShowDialog = isActive => {
    this.setState({ isDialogActive: isActive });
  }



  renderMessageList = () => {
    const messageViews = this.state.messages.map((item,i) => {
      return <MessageItemView key={i} item={item} onClick={this.onItemClick}/>
    });
    return messageViews;
  }

  renderHeaderList = () => {
    const headerViews = this.state.header.map((item,i) => {
      return <HeaderItem key={i} item={item} onClick={this.onheaderClick}/>
    });
    return headerViews;
  }

  renderDialogjiahao=()=>{
    const jiahaoViews = this.state.header.map((item,i) => {
      return <Dialogjiahao key={i} item={item} onClick={this.onguanbiClick}/>
    });
    return jiahaoViews;
  }


  render() {
    return (
      <div>
        { this.renderHeaderList()}
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
        <DialogView isActive={this.state.isDialogActive} onCloseClick={this.handleShowDialog} />
        <Dialogjiahao isActive={this.state.istianjiaActive} onCloseClick={this.guanbi} />
      </div>
    );
  }
}

export default App;
