import React,{Component} from 'react';
import { connect } from 'react-redux';
import {changeidea} from '../action'
import {changeclass} from '../action'
class Titleview extends Component {


    renderidea=()=>{
       const {state,dispatch}=this.props;
       const {isActive} = state.isActive;
       dispatch(changeidea(isActive))
    }

    rendeclass=()=>{
        const {state,dispatch}=this.props;
       const {isActive} = state.isActive;
       dispatch(changeclass(isActive))
    }


    render(){
        return(
            <div className="titleview">
                <div className="title-class" onClick={this.rendeclass}>课程信息</div>
                <div className="title-idea" onClick={this.renderidea}>满意度反馈</div>
            </div>
        )
    }
}
function mapStateToProps(state, ownProps) {
    const props = state;
    return props;
}


export default connect(mapStateToProps)(Titleview)