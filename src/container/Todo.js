import React, { Component } from 'react';
import Headerview from '../components/Headerview'
import Titleview from '../components/titleview'
import { bindActionCreators } from 'redux';
import 'antd/dist/antd.css'
import {connect} from 'react-redux';
import * as api from '../api';       //把api里所有的function放在  api   这个对象里
import * as actionCreators from '../action';


class todo extends Component{
        
    componentDidMount(){

        const {Actions}=this.props;
        const mid='11'
        Actions.fetchUserInfo(mid);
        
        Actions.fetchLessonInfo(mid);  
         
    }
    
    render(){
        
        return(
            <div>
                <Headerview state={this.props} dispatch={this.props.dispatch}/>
                <Titleview state={this.props} dispatch={this.props.dispatch}/>       
            </div>
        )
    }
}

const mapStateToProps = state => {
    const { todos } = state;
    return {
      todos
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      Actions: bindActionCreators(actionCreators, dispatch)
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(todo)

