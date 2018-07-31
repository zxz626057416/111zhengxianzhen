import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Avatar } from 'antd';
import { Input } from 'antd';
import { Button } from 'antd';
const Search = Input.Search;
class Headerview extends Component {
    renderText1_1 = () => {
        const { state } = this.props;

        let msg = state.text1_1.map((item, idx) => {
            return (

                <div className="text1-1">{item.content}</div>

            )
        })
        return msg;
    }
    renderText1_2 = () => {
        const { state } = this.props;
        let msg = state.text1_2.map((item, idx) => {
            return (

                <div className="text1-2">{item.content}</div>

            )
        })
        return msg;
    }
    renderText2_1 = () => {
        const { state } = this.props;
        let msg = state.text2_1.map((item, idx) => {
            return (

                <div className="text2-1">{item.content}</div>

            )
        })
        return msg;
    }
    renderText2_2 = () => {
        const { state } = this.props;
        let msg = state.text2_2.map((item, idx) => {
            return (

                <div className="text2-2">{item.content}</div>

            )
        })
        return msg;
    }
    renderText3_1 = () => {
        const { state } = this.props;
        let msg = state.text3_1.map((item, idx) => {
            return (

                <div className="text3-1">{item.content}</div>


            )
        })
        return msg;
    }
    renderText3_2 = () => {
        const { state } = this.props;
        let msg = state.text3_2.map((item, idx) => {
            return (
                <div>
                    <div className="text3-1">{item.content}</div>
                    <div className="weixin">

                        <Search
                            placeholder=""
                            enterButton="提交"
                            size="large"
                            onSearch={value => console.log(value)}
                        />
                        {/* <div className="inline"><Input size="small" placeholder="small size" /></div>
                        <div className="inline"><Button type="primary">Primary</Button></div> */}



                    </div>
                    <div className="beizhu">

                        <Search
                            placeholder=""
                            enterButton="提交"
                            size="large"
                            onSearch={value => console.log(value)}
                        />


                        

                        {/* <div className="inline"><Input size="small" placeholder="small size" /></div>
                        <div className="inline"><Button type="primary">Primary</Button></div> */}




                    </div>
                </div>
            )
        })
        return msg;
    }
    render() {
        return (
            <div className="header_main">
                <div className="avatar">
                    <Avatar size="large" icon="user" />
                </div>
                <div className="text1">
                    <div className="class">三班人</div>
                    <div className="left">{this.renderText1_1()}</div>
                    <div className="left">{this.renderText1_2()}</div>
                </div>
                <div className="text2">
                    <div className="left">{this.renderText2_1()}</div>
                    <div className="left">{this.renderText2_2()}</div>
                </div>
                <div className="text3">
                    <div className="left">{this.renderText3_1()}</div>
                    <div className="one left">{this.renderText3_2()}</div>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state, ownProps) {
    const props = state;
    return props;
}


export default connect(mapStateToProps)(Headerview)