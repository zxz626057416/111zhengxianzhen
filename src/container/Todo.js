import React, { Component } from 'react';
import Headerview from '../components/Headerview'
import Titleview from '../components/titleview'
import { bindActionCreators } from 'redux';
import 'antd/dist/antd.css'
import {connect} from 'react-redux';
import * as api from '../api';       //把api里所有的function放在  api   这个对象里
import * as actionCreators from '../action';
import '../App.css';

class todo extends Component{
        
    componentDidMount(){

        const {Actions}=this.props;
        
        const mid='11'

        Actions.fetchUserInfo(mid);
        
        Actions.fetchLessonInfo(mid);
         
    }
    
    render(){
        const { ...datas } = this.props;
        return(
            <div>
                <Headerview {...datas} />
                <Titleview {...datas} />       
            </div>
        )
    }
}

const mapStateToProps = state => {
    const { text1_2,text2_2,text3_2,dataSource1,dataSource2,dataSource3,dataSource4, } = state;
    return {
        text1_2,text2_2,text3_2,dataSource1 ,dataSource2,dataSource3,dataSource4,
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      Actions: bindActionCreators(actionCreators, dispatch)
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(todo)//