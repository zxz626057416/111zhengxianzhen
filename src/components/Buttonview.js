import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Button} from 'antd'

export default class buttonview extends Component{

    render(){


        const {state}=this.props;
        return state.isActive ?
        
        (
            <div className="buttonview-button">
                <div className="hz"><Button>汇总</Button></div>
                <div className="sy"><Button className="gray">摄影课</Button></div>
                <div className="hh"><Button>绘画课</Button></div>
                <div className="fh"><Button>返回</Button></div>
            </div>
        ):null
    }


}

