import React, { Component } from 'react';


export default class footer extends Component{
   

    onMsgClick = () => {
        const { onClick,item } = this.props;
        if(onClick){   
            onClick(item);
        }
    }

    render(){
        const {item} = this.props;
        return(
        <ul>
            <a href="#">
            <li>
                <img class="bottom1"src={item.icon} alt=""/>
                <span class="bottom2">{item.title}</span>
            </li>
            </a>
        </ul>
        )
    }
}