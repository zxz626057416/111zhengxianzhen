import React, { Component } from 'react';
import '../App.css';
import { DIALOG_SHOW_STATUS } from '../const'
export default class DialogView extends Component {

  constructor(props) {
    super(props)
    this.state = {
      title: '',
      descript: '',
      time: ''
    }
    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleDescChange = this.handleDescChange.bind(this)
    this.handleTimeChange = this.handleTimeChange.bind(this)
    this.handleCloseDialog = this.handleCloseDialog.bind(this)
    this.handleConfirmAddClick = this.handleConfirmAddClick.bind(this)
  }
 

  handleCloseDialog=()=> {
    const { onCloseClick }= this.props;
    onCloseClick(false)
    console.log("456")
  }


  handleTitleChange(e){
    this.setState({
      title:e.target.value
    })
  }

  handleDescChange(e){
    this.setState({
      descript:e.target.value
    })
  }

  handleTimeChange(e){
    this.setState({
      time:e.target.value
    })
  }

  
  handleConfirmAddClick() {
    const { title, descript, time } = this.state
    const { handleAddItem } = this.props      //const handleAddItem=this.props.handleAddItem


    if (!title || !descript || !time) {
      return
    }
    handleAddItem && handleAddItem({    //title:title
      title,
      descript,
      time,
    })
  }


    renderAddMessageView(){
      return (
        <div className="ViewContent">
          <div>
            标题：<input onChange={this.handleTitleChange}/>
          </div>
          <div>
            描述：<input onChange={this.handleDescChange} />
          </div>
          <div>
            时间：<input onChange={this.handleTimeChange} />
          </div>
          <div className="confirmBtn" onClick={this.handleConfirmAddClick}>确认</div>
        </div>
      );
  }


  renderMoreBtnView() {
    const { handleDeleteItem, handleSetToTop, handleMultipleClick } = this.props
    return (
      <div className="ViewContent">
        <div className="MoreBtnItem" onClick={handleSetToTop}>置顶</div>
        <div className="MoreBtnItem" onClick={handleDeleteItem}>删除</div>
        <div className="MoreBtnItem" onClick={handleMultipleClick}>多选</div>
      </div>
    )
  }

  renderCloseBtn() {
    return (
      <div className="closeBtn" onClick={this.handleCloseDialog}>Close</div>
    )
  }

  renderContent() {
    const { isActive } = this.props
    switch (isActive) {
      case DIALOG_SHOW_STATUS.SHOW_ADD_MESSAGE:
        return this.renderAddMessageView()
      case DIALOG_SHOW_STATUS.SHOW_MORE_BTN:
        return this.renderMoreBtnView()
      default:
        return null
    }
  }


  render() {
    // console.log('component render');
    const { isActive } = this.props;
    if (!isActive) {return null;}
    return (
      <div className="DialogView">
        {this.renderCloseBtn()}
        {this.renderContent()}
      </div>
    )
  }
}

