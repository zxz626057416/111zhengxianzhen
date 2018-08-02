import React,{Component} from 'react';
import { connect } from 'react-redux';
import Buttonview from '../components/Buttonview'
import Tableview from '../components/Tableview'
import { Tabs } from 'antd';
// import Kecheng  from '../components/kecheng'
// import Dangan from '../components/dangan'


class Titleview extends Component {



    render(){

        // const {state,dispatch}=this.props;

        const TabPane = Tabs.TabPane;
        const {dataSource} = this.props;
        const {dataSource1} = this.props;
        const {dataSource2} = this.props;
        const {dataSource3} = this.props;
      

        return(


            
            <Tabs defaultActiveKey="1" >
                <TabPane tab="课程信息" key="1">
                    <Buttonview  state={this.props} dispatch={this.props.dispatch}/>

                    <Tableview  dataSource={dataSource}  
                                dataSource1={dataSource1}     
                                dispatch={this.props.dispatch}                               
                                />
                </TabPane>
                <TabPane tab="满意度及反馈" key="2">这是第二个页面</TabPane>
               
            </Tabs>
            
        )
        
    }

}
function mapStateToProps(state, ownProps) {
    const props = state;
    return props;
}


export default connect(mapStateToProps)(Titleview)