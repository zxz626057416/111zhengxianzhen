import React, { Component } from 'react';
import './DialogView.css';

export default class DialogView extends Component {
  
  render() {
    console.log('component render');
    const { isActive } = this.props;

    if (!isActive) {
      return null;
    }
    return (
      <div className="mask-ctn">
        <div className="close-btn" onClick={this.handleClose}>close</div>
        <div className="dialog-ctn">

        </div>
      </div>
    );
  }
}

