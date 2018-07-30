import React, { Component } from 'react';
import { topMessage } from '../action'
import { delMessage } from '../action'

import { connect } from 'react-redux';





class dialog extends Component {


    topmessage = () => {
        const { state, dispatch } = this.props;
        dispatch(topMessage(state.isActive))
    }

    delmessage = () => {
        const { state, dispatch } = this.props;
        dispatch(delMessage(state.isActive))
    }





    render() {
        console.log("123")
        const { state, dispatch } = this.props;

        
        return state.isActive1 ? (

            <div className="ViewContent">
                {/* <div className="closeBtn" onClick={this.handleCloseDialog}>Close</div> */}
                <div>
                    标题：<input onChange={this.handleTitleChange} />
                </div>
                <div>
                    描述：<input onChange={this.handleDescChange} />
                </div>
                <div>
                    时间：<input onChange={this.handleTimeChange} />
                </div>
                <div className="confirmBtn" onClick={this.handleConfirmAddClick}>确认</div>
            </div>
        ) : null
    }







    render() {
        const { state, dispatch } = this.props;

        return state.isActive ? (
            // console.log(state.isActive),
            <div className="ViewContent">
                <div className="MoreBtnItem" onClick={this.topmessage}>置顶</div>
                <div className="MoreBtnItem" onClick={this.delmessage}>删除</div>
                <div className="MoreBtnItem" >多选</div>
            </div>
        ) : null
    }




}
function mapStateToProps(state, ownProps) {
    const props = state;
    return props;
}
export default connect(mapStateToProps)(dialog)