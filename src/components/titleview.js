import React,{Component} from 'react';
import { connect } from 'react-redux';

class Titleview extends Component {


    renderidea=()=>{
       
    }

    render(){
        return(
            <div className="titleview">
                <div className="title-class" >课程信息</div>
                <div className="title-idea" >满意度反馈</div>
            </div>
        )
    }
}
function mapStateToProps(state, ownProps) {
    const props = state;
    return props;
}


export default connect(mapStateToProps)(Titleview)