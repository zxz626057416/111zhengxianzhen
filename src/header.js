import React, { Component } from 'react';


export default class MessageItemViewr extends Component{
   

    onMsgClick = () => {
        const { onClick,item } = this.props;
        if(onClick){   
            onClick(item);
        }
    }

    render(){
        const {item} = this.props;
        return(
            <li>
            <div className="left">{item.time}</div>
            <div className="right1">
                <a href="#"><img src={item.icon} alt=""/></a>
            </div>
            <div className="right2">
                    <a href="#"><img src={item.icon} alt=""/></a>
            </div>
            </li>
        )
    }
}