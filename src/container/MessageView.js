import React, { Component } from 'react';
import icon from '../resource/xiaoduihao.png';

export default class MessageList extends Component {

    constructor(props) {
        super(props);
        this.state = {

            message: [
                {
                    title: '微信',
                    icon: icon,
                },
                {
                    title: '通讯录',
                    icon: icon,
                },
                {
                    title: '发现',
                    icon: icon,
                },
                {
                    title: '我',
                    icon: icon,
                }
            ],
        }
    }

    messagecolor() {
        
    }

    renderMessageList = () => {
        const messageViews = this.state.message.map((item, i) => {
            return (<div>
                <ul className="message-ul">
                    <li className="message-li">
                        <div className="text">{item.title}</div>
                        <div className="content">
                            <div className="pic one" onClick={this.messagecolor}><img src={item.icon} /></div>
                            <div className="pic two" onClick={this.messagecolor}><img src={item.icon} /></div>
                            <div className="pic three" onClick={this.messagecolor}><img src={item.icon} /></div>
                            <div className="pic four" onClick={this.messagecolor}><img src={item.icon} /></div>
                        </div>
                    </li>
                </ul>
            </div>)
        });
        return messageViews;
    }

    render() {
        return (
            this.renderMessageList()
        );
    }
}