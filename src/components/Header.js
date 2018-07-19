import React, { Component } from 'react';

export default class HeaderItem extends Component {
  
  tianjia= () => {
    const { onClick, item } = this.props;
    if (onClick) {
      onClick(item);
    }
  }

  render(){
    const { item } = this.props;
    return(
      <div className="header">
        <div className="text">{item.content}</div>
        <div className="pic" onClick={this.tianjia.bind(this, true)}>
            <img src={item.icon} />
        </div>
      </div>
    );
  }
}

