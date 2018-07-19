import React, { Component } from 'react';
import './Dialogjiahao.css';

export default class Dialogjiahao extends Component {
 
  render() {
    console.log('component render');
    const { isActive } = this.props;

    if (!isActive) {
      return null;
    }

    
    return (
      <div className="jiahao-main">
       <div className="jiahao-close" >close</div>
          <div className="jiahao-one">
              <div className="jiahao-content">
               
                <div className="jiahao-content-one">标题</div>
                <div className="jiahao-content-two"><input id="content-one"></input></div>
                <div className="jiahao-content-one">描述</div>
                <div className="jiahao-content-two"><input id="content-two"></input></div>
                <div className="jiahao-content-one">时间</div>
                <div className="jiahao-content-two"><input id="content-three"></input></div>
                <div className="submit"><button>提交</button></div>
              </div>
          </div>
      </div>
    );
  }
}

