import React,{Component} from 'react'
import { connect } from 'react-redux';
import {DIALOG_SHOW_STATUS} from '../const/dialog_show_state'


class Classview extends Component{

    showclass=()=>{
        return(
           456
        )
    }
    render(){
        const {isActive}=this.props;
        switch (isActive){
            case DIALOG_SHOW_STATUS.SHOW_CLASS:
            return this.showclass()
            case DIALOG_SHOW_STATUS.SHOW_IDEA:
            return this.showidea()
        }
    }

}
function mapStateToProps(state, ownProps) {
    const props = state;
    return props;
}
export default connect(mapStateToProps)(Classview)