import React, { Component } from 'react';

import icon1 from '../resource/1.jpg';
import icon2 from '../resource/2.jpg';
import icon3 from '../resource/3.jpg';
import icon4 from '../resource/4.jpeg';

export default class FooterList extends Component {


    constructor(props) {
        super(props);
        this.state = {
            footer: [
                {
                    title: '微信',
                    icon: icon1,
                },
                {
                    title: '通讯录',
                    icon: icon2,
                },
                {
                    title: '发现',
                    icon: icon3,
                },
                {
                    title: '我',
                    icon: icon4,
                }
            ],
            isPicActive: false,
        }
    }

    renderFooterList = () => {
        const messageViews = this.state.footer.map((item, i) => {
            return (<div className="footer-content"><img src={item.icon} /><span>{item.title}</span></div>)
        });
        return messageViews;
    }

    render() {
        return (
            this.renderFooterList()
        );
    }
}