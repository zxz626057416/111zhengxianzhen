import React, { Component } from 'react';
import Headerview from '../components/Headerview'
import Titleview from '../components/titleview'
import 'antd/dist/antd.css'
import {connect} from 'react-redux';
import * as api from '../api';

class todo extends Component{
    




    
    componentDidMount(){
        // const {dispatch}=this.props;
        // api.getuser(don(dispatch));
    }
    




    render(){
        return(
            <div>
                <Headerview state={this.props} dispatch={this.props.dispatch}/>
                <Titleview state={this.props} dispatch={this.props.dispatch}/>       
            </div>
        )
    }
}

function mapStateToProps(state,ownProps){
    const props=state;
    return props;
}
export default connect(mapStateToProps)(todo)










































// const icon = require('../resource/icon.png')
// export default class todo extends Component {
//     constructor() {
//         super();
//         this.state = {
//             botview: [
//                 {
//                     icon: icon,
//                     title: '微信',
//                 },
//                 {
//                     icon: icon,
//                     title: '通讯录',
//                 },
//                 {
//                     icon: icon,
//                     title: '发现',
//                 },
//                 {
//                     icon: icon,
//                     title: '我',
//                 },
//             ],
//             messages: [
//                 {
//                     icon: icon,
//                     title: '小年糕',
//                     descript: 'hello 小年糕',
//                     time: '7-18 11:14'
//                 },
//                 {
//                     icon: icon,
//                     title: '小板凳',
//                     descript: 'hello 小板凳',
//                     time: '7-18 11:15',
//                 },
//                 {
//                     icon: icon,
//                     title: '小豆包',
//                     descript: 'hi 小豆包',
//                     time: '7-17 10:00',
//                 }
//             ], 
//             isActive:false,
//             idx:null,
//         }
//     }
//     moreLick=(item)=>{
//         this.setState({
//             isActive:item.isActive,
//             idx:item.idx,
//         })
//     }
//     topdialog=(item)=>{
//         const newmessage=this.state.messages.slice();
//         const topmessage=newmessage[this.state.idx];
//         newmessage.splice(this.state.idx,1);
//         newmessage.unshift(topmessage);
//         this.setState({

//             isActive:item.isActive,
//             messages:newmessage,
//         })
//     }
//     render() {
//         return (
//             <div>
//                 <Topbar />
//                 <Message messages={this.state.messages}  isActive={this.state.isActive} moreLick={this.moreLick}/>
//                 <Dialog  isActive={this.state.isActive} topdialog={this.topdialog}/>
//                 <Botbar botview={this.state.botview}/>
//             </div>
//         )
//     }
// }