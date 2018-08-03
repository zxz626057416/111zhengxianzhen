import React,{Component} from  'react'
import {Icon} from 'antd'



//用   onRow 标签   精确到每一行


//阻止事件冒泡    handle
// handleStopBubble

 export const columns= [
    {
      title: '班级',
      dataIndex: 'classInfo',
      key: 'classInfo',
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: '开课时间',
      dataIndex: 'startTime',
      key: 'startTime',
    },
    {
      title: '老师',
      dataIndex: 'teacherInfo',
      key: 'teacherInfo',
    },
    {
      title: '上课率',
      dataIndex: 'enterRate',
      key: 'enterRate',


        render:text=>{
        let num1=parseFloat(text.split("/")[0],10)   
        let num2=parseFloat(text.split("/")[1],10);  
        let num=num1/num2;
        if (num<0.8){
            return <span className="Red">{text}</span>
        }
        if (num>0.95){
            return <span className="Orange">{text}</span>
        }else{
            return <span>{text}</span>
        }
    }




    },
    {
      title: '作业提交率',
      dataIndex: 'homeworkSubmitRate',
      key: 'homeworkSubmitRate',



      render:text=>{
        let num=parseFloat(text,10)   //将其解析成10进制
        if (num<0.8){
            return <span className="Red">{text}</span>
        }
        if (num>0.95){
            return <span className="Orange">{text}</span>
        }else{
            return <span>{text}</span>
        }
    }
    
    
    },
    {
      title: '被点评情况',
      dataIndex: 'beCommenttedRate',
      key: 'beCommenttedRate',

      render:text=>{
        let num=parseFloat(text,10)   //将其解析成10进制
        if (num<0.8){
            return <span className="Red">{text}</span>
        }
        if (num>0.95){
            return <span className="Orange">{text}</span>
        }else{
            return <span>{text}</span>
        }
    }
    },
    {
      title: '打卡率',
      dataIndex: 'satisfyRate',
      key: 'satisfyRate',
      render:text=>{
        let num=parseFloat(text,10)   //将其解析成10进制
        if (num<0.8){
            return <span className="Red">{text}</span>
        }
        if (num>0.95){
            return <span className="Orange">{text}</span>
        }else{
            return <span>{text}</span>
        }
    }
}
    ,
    {
      title: '满意度',
      dataIndex: 'beCommenttedRate',
      key: 'beCommenttedRate',
      
      render:text=>{
        let num=parseFloat(text,10)   //将其解析成10进制
        if (num<0.8){
            return <span className="Red">{text}</span>
        }
        if (num>0.95){
            return <span className="Orange">{text}</span>
        }else{
            return <span>{text}</span>
        }
    }
    },
  ]

  export const columns1= [
    {
      title: '班级',
      dataIndex: 'classInfo',
      key: 'classInfo',
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: '开课时间',
      dataIndex: 'startTime',
      key: 'startTime',
    },
    {
      title: '老师',
      dataIndex: 'teacherInfo',
      key: 'teacherInfo',
    },
    {
      title: '上课率',
      dataIndex: 'enterRate',
      key: 'enterRate',
      render:text=>{
        let num1=parseFloat(text.split("/")[0],10)   
        let num2=parseFloat(text.split("/")[1],10);  
        let num=num1/num2;
        if (num<0.8){
            return <span className="Red">{text}</span>
        }
        if (num>0.95){
            return <span className="Orange">{text}</span>
        }else{
            return <span>{text}</span>
        }
    }
    },
    {
      title: '作业提交率',
      dataIndex: 'homeworkSubmitRate',
      key: 'homeworkSubmitRate',



      render:text=>{
        let num=parseFloat(text,10)   //将其解析成10进制
        if (num<0.8){
            return <span className="Red">{text}</span>
        }
        if (num>0.95){
            return <span className="Orange">{text}</span>
        }else{
            return <span>{text}</span>
        }
    }
    
    
    },
    {
      title: '被点评情况',
      dataIndex: 'beCommenttedRate',
      key: 'beCommenttedRate',

      render:text=>{
        let num=parseFloat(text,10)   //将其解析成10进制
        if (num<0.8){
            return <span className="Red">{text}</span>
        }
        if (num>0.95){
            return <span className="Orange">{text}</span>
        }else{
            return <span>{text}</span>
        }
    }
    },
    {
      title: '打卡率',
      dataIndex: 'satisfyRate',
      key: 'satisfyRate',




      render:text=>{
        let num=parseFloat(text,10)   //将其解析成10进制
        if (num<0.8){
            return <span className="Red">{text}</span>
        }
        if (num>0.95){
            return <span className="Orange">{text}</span>
        }else{
            return <span>{text}</span>
        }
    }
}
    ,
    {
      title: '满意度',
      dataIndex: 'beCommenttedRate',
      key: 'beCommenttedRate',
      
      render:text=>{
        let num=parseFloat(text,10)   //将其解析成10进制
        if (num<0.8){
            return <span className="Red">{text}</span>
        }
        if (num>0.95){
            return <span className="Orange">{text}</span>
        }else{
            return <span>{text}</span>
        }
    }
    },
  ]

  export const columns2=[
    {
        title: '课程内容',
        dataIndex: 'course_name',
        key: 'course_name',
    },
    {
        title: '上课时间',
        dataIndex: 'time',
        key: 'time',
    },
    {
        title: '上课情况',
        dataIndex: 'enter_status',
        key: 'enter_status',

        render:text=>{
            let num=parseFloat(text,10)   //将其解析成10进制
            if (num<1){
                return <span className="Red"><Icon type="close" style={{ fontSize: 40, color: 'red' }} /></span>
            }else{
                return <span><Icon type="check" style={{ fontSize: 40, color: '#08c' }} /></span>
            }
        }

    },
    {
        title: '作业提交情况',
        dataIndex: 'homework_status',
        key: 'homework_status',



        render:text=>{
            let num=parseFloat(text,10)   //将其解析成10进制
            if (num<1){
                return <span className="Red"><Icon type="close" style={{ fontSize: 40, color: 'red' }} /></span>
            }else{
                return <span><Icon type="check" style={{ fontSize: 40, color: '#08c' }} /></span>
            }
        }



       

    },
    {
        title: '被点评情况',
        dataIndex: 'review_status',
        key: 'review_status',


        render:text=>{
            let num=parseFloat(text,10)   //将其解析成10进制
            if (num<5){
                return <span className="Red"><Icon type="check" style={{ fontSize: 40, color: '#08c' }} /></span>
            }
           
            else{
                return <span><Icon type="close" style={{ fontSize: 40, color: 'red' }} /></span>
            }
        }
        



    },
    {
        title: '打卡情况',
        dataIndex: 'clockin_status',
        key: 'clockin_status',

        render:text=>{
            let num=parseFloat(text,10)   //将其解析成10进制
            if (num<1){
                return <span className="Red"><Icon type="close" style={{ fontSize: 40, color: 'red' }} /></span>
            }else{
                return <span><Icon type="check" style={{ fontSize: 40, color: '#08c' }} /></span>
            }
        }

    },
    {
        title: '满意度评分',
        dataIndex: 'satisfied_score',
        key: 'satisfied_score',


        render:text=>{
            let num=parseFloat(text,10)   //将其解析成10进制
            if (num<5){
                return <span className="Red large">{text}</span>
            }
           
            else{
                return <span className="large">{text}</span>
            }
        }
        
    },
  ]


  export const columns3=[
    {
        title: '学员名',
        dataIndex: 'nick',
        key: 'nick',
    },
    {
        title: '学员编号/MID',
        dataIndex: 'mid',
        key: 'mid',
    },
    {
        title: '入学时间',
        dataIndex: 'enter_time',
        key: 'enter-_ime',
    },
    {
        title: '开课时间',
        dataIndex: 'start_time',
        key: 'start_time',
    },
    {
        title: '在学课程',
        dataIndex: 'learning_lessons',
        key: 'learning_lessons',
    },
    {
        title: '负责老师',
        dataIndex: 'teachers',
        key: 'teachers',
    },
  ]


