import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Button} from 'antd'

class buttonview extends Component{

    render(){
        return(
            <div className="buttonview-button">
                <div className="hz"><Button>汇总</Button></div>
                <div className="sy"><Button className="gray">摄影课</Button></div>
                <div className="hh"><Button>绘画课</Button></div>
                <div className="fh"><Button>返回</Button></div>
            </div>
        )
    }


}


function mapStateToProps (state,ownProps){
    const props=state;
    return props;
}
export default connect(mapStateToProps)(buttonview)