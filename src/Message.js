import React,{Component} from 'react';
import './App.css';


export default class MessageItem extends Component{
    onMsgClick=()=>{
        const {onclick,item}=this.props;
        if(onclick){        //判断这个对象是否存在
            onclick(item);
        }
    }
    render(){
        const {item}=this.props;
        return(
            <li className="msg" onClick={this.onMsgClick} >
                    <img src={item.icon} alt=""/>
                    <div className="box">
                        <div className="word">{item.name}</div>
                        <div className="message">{item.description}</div>
                    </div>
                    <span className="fr">{item.time}</span>
                </li>
        )
    }
}