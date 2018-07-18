import React, { Component } from 'react';


export default class zhuti extends Component{
   

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
            <a href="#">
        <div class="one" id="one" onclick="one()">
        <div class="img1">
            <img id="pic1" src={item.icon} alt=""/>
        </div>
        <div class="dialog">
            <h1 id="one1">{item.name}</h1>
            <span id="one2">{item.description }</span>
        </div>
        <div class="time" id="one3">{item.time}</div>
        </div>
        </a>
        <hr/>
            </li>
        )
    }
}