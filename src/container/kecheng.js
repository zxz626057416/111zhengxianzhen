import React,{Component} from 'react';
import {columns2} from '../components/list'
import { Table} from 'antd'
import * as actionCreators from '../action'
import { bindActionCreators} from 'redux'
import {connect} from 'react-redux'



class kecheng extends Component {

    
    componentDidMount(){

        const {Actions}=this.props;
        const mid='1111';
        Actions.fetchClassInfo(mid);        
    }


    render(){

        const {dataSource2}=this.props;
        const {text3_1}=this.props;
        const {real}=this.props;
        const {virtual}=this.props;

        return(
            <div>
                <div className="kecheng-header">
                    <div className="kecheng-header-text">班级:<span>{text3_1.name}</span></div>
                    <div className="kecheng-header-text">班级ID:<span>{text3_1.id}</span></div>
                    <div className="kecheng-header-text kecheng-header-text-one">老师:<span>{virtual.nick}</span></div>
                    <div className="kecheng-header-text kecheng-header-text-one">/ID:<span>{virtual.id}</span></div>
                    <div className="kecheng-header-text kecheng-header-text-one kecheng-header-text-one1">微信:<span>{virtual.wx_code}</span></div>
                    <div className="kecheng-header-text kecheng-header-text-one">负责员工:<span>{real.name}</span></div>
                    <div className="kecheng-header-text kecheng-header-text-one">/ID:<span>{real.mid}</span></div>
                    <div className="kecheng-header-text kecheng-header-text-one">微信:<span>{real.wx_code}</span></div>
                </div>
                <div>
                    <Table  dataSource={dataSource2}   columns={columns2}/>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    const { text1_2,text2_2,text3_2,dataSource1,dataSource2,dataSource3,dataSource4,text3_1,real,virtual } = state;
    return {
        text1_2,text2_2,text3_2,dataSource1 ,dataSource2,dataSource3,dataSource4,text3_1,real,virtual 
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      Actions: bindActionCreators(actionCreators, dispatch)
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(kecheng)

   