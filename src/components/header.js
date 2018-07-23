import React, { Component } from 'react';

export default class HeaderItemView extends Component{

    onShowAddViewClick = () => {
        const { onClick, item } = this.props;
        if (onClick) {
          onClick(item);
        }
        console.log("123")
      }

    constructor(props){
        super(props)
    }
    render(){ 
        const { item } = this.props;
        return(
        <div className="header">
        <div className="text">{item.title}</div>
        <div className="pic" onClick={this.onShowAddViewClick}>{item.descript}</div>
        </div>
        );
    }
}