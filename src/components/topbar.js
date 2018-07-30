import React, { Component } from 'react';
export default class Topabr extends Component {










    jiahao=()=>{
        const{state,dispatch}=this.props;
        
    }





    render() {
        return (
            <div className="NavBar">
                <div className="NavBarLeft">微信</div>
                <div className="NavBarRight" onClick={this.jiahao}>+</div>
            </div>
        )
    }
} 