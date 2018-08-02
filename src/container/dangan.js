import React,{Component} from 'react';
import {columns3} from '../components/list'
import { Table} from 'antd'
import {Button} from 'antd'
import { Input } from 'antd';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../action';
import {connect} from 'react-redux';
const Search = Input.Search;


class dangan extends Component {


    componentDidMount(){

        const {Actions}=this.props;
        const mid='11'

        Actions.fetchStudentInfo(mid);  
         
    }


    render(){
        const {dataSource4}=this.props;
        // console.log(dataSource2)
        return(
            <div>
                <div className="dangan-header">
                    <div className="kecheng-header-button" ><Button type="primary">汇总</Button></div>
                    <div className="kecheng-header-button" ><Button type="primary">摄影课</Button></div>
                    <div className="kecheng-header-button" ><Button type="primary">绘画课</Button></div>
                    <div className="kecheng-header-search">
                        <Search 
                            placeholder=" " 
                            enterButton="Search" 
                            size="large" 
                            onSearch={value => console.log(value)}/>
                    </div>
                </div>
                <div>
                   <Table  dataSource={dataSource4}   columns={columns3}/>
                </div>
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(dangan)


   