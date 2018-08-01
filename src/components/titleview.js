import React,{Component} from 'react';
import { connect } from 'react-redux';
import Buttonview from '../components/Buttonview'
import Tableview from '../components/Tableview'
import { Tabs } from 'antd';

class Titleview extends Component {



    render(){

        // const {state,dispatch}=this.props;

        const TabPane = Tabs.TabPane;
        

        return(

            <Tabs defaultActiveKey="1" >
                <TabPane tab="课程信息" key="1">
                    <Buttonview  state={this.props} dispatch={this.props.dispatch}/>
                    <Tableview state={this.props} dispatch={this.props.dispatch}/>
                </TabPane>
                <TabPane tab="满意度及反馈" key="2"></TabPane>
            </Tabs>
            
        )
        
    }

}
function mapStateToProps(state, ownProps) {
    const props = state;
    return props;
}


export default connect(mapStateToProps)(Titleview)