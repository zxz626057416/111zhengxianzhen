import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'antd'
import {columns,columns1} from './list'


class tableview extends Component {

    render() {
        const {state,dataSource,dataSource1}=this.props;
       
        return (
            <div className="learning">
                <div className="learning-text">在学课程</div>
                <Table dataSource={dataSource} columns={columns} />
                <div className="learning-text">历史数据</div>
                <Table dataSource={dataSource1} columns={columns1} />
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    const props = state;
    return props;
}

export default connect(mapStateToProps)(tableview)