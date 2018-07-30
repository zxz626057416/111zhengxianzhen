import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'antd'

class tableview extends Component {

    render() {
        const {state,ccolumns,dataSource,ccolumns1,dataSource1}=this.props;



        console.log(state.isActive)



        
        return state.isActive ?(
            <div className="learning">
                <div className="learning-text">在学课程</div>
                <Table dataSource={dataSource} columns={ccolumns} />
                <div className="learning-text">历史数据</div>
                <Table dataSource={dataSource1} columns={ccolumns1} />
            </div>
        ):null
    }
}

function mapStateToProps(state, ownProps) {
    const props = state;
    return props;
}

export default connect(mapStateToProps)(tableview)