import React, { Component } from 'react';

export default class botbar extends Component {

    renderBotbarView = () => {
        const { state,dispatch} = this.props;

        let msg = state.botbar.map((item, idx) => {
            return (
                
                    <div className="chat-nav__item" >
                        <img className="chat-nav__item__icon" src={item.icon} alt="" />
                        <div className="chat-nav__item__name">{item.title}</div>
                    </div>
            )
        })
        return msg;
    }

    render() {
        return (
            <nav className="chat-nav">
                {this.renderBotbarView()}
            </nav>
        )
    }
}