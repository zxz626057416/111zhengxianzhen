import React, { Component } from 'react';
import {moreButton} from '../action'
import {connect} from 'react-redux';


class message extends Component {



    showDialog = (idx) => {
        const { state,dispatch } = this.props;
        const {isActive} = state.isActive;
        dispatch(moreButton(isActive,idx))
    }

    renderMessageView = () => {
        const { state } = this.props;
        let msg = state.messages.map((item, idx) => {
            return (
                <li className="chat-list__item">
                    {/* {this.renderSelectBtn()} */}
                    <img className="chat-list__item__avatar" src={item.icon} alt="" />
                    <div className="chat-list__item__content">
                        <div className="chat-list__item__content__topBar">
                            <h2 className="chat-list__item__content__title">{item.title}</h2>
                            <div className="chat-list__item__content__time">{item['time']}</div>
                        </div>
                        <div className="chat-list__item__content__recentMsg">{item['descript']}</div>
                        <div className="chat-list__item__content__moreBtn" onClick={this.showDialog.bind(this, idx)}>更多</div>
                    </div>
                </li>
            )
        })
        return msg;
    }
    render() {
        return (
            <div>
                {this.renderMessageView()}
            </div>
        )
    }
}


function mapStateToProps(state,ownProps){
    const props=state;
    return props;
}
export default connect(mapStateToProps)(message)


