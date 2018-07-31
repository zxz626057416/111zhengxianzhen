import React,{Component} from  'react'

 export const columns= [
    {
      title: '班级',
      dataIndex: 'class',
      key: 'class',


      render:text=>{
        let num=parseInt(text,10)   //将其解析成10进制
        if (num<80){
            return <span className="Red">{text}</span>
        }
        if (num>95){
            return <span className="Orange">{text}</span>
        }else{
            return <span>{text}</span>
        }
    }




    },
    {
      title: '状态',
      dataIndex: 'state',
      key: 'state',
    },
    {
      title: '开课时间',
      dataIndex: 'opentime',
      key: 'opentime',
    },
    {
      title: '老师',
      dataIndex: 'teacher',
      key: 'teacher',
    },
    {
      title: '上课率',
      dataIndex: 'shangkelv',
      key: 'shangkelv',
      render:text=>{
        let num1=parseInt(text.split("/")[0],10)   
        let num2=parseInt(text.split("/")[0],10);  
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
      dataIndex: 'homework',
      key: 'homework',



      render:text=>{
        let num=parseInt(text,10)   //将其解析成10进制
        if (num<80){
            return <span className="Red">{text}</span>
        }
        if (num>95){
            return <span className="Orange">{text}</span>
        }else{
            return <span>{text}</span>
        }
    }
    
    
    },
    {
      title: '被点评情况',
      dataIndex: 'dianping',
      key: 'dianping',

      render:text=>{
        let num=parseInt(text,10)   //将其解析成10进制
        if (num<80){
            return <span className="Red">{text}</span>
        }
        if (num>95){
            return <span className="Orange">{text}</span>
        }else{
            return <span>{text}</span>
        }
    }
    },
    {
      title: '打卡率',
      dataIndex: 'daka',
      key: 'daka',
      render:text=>{
        let num1=parseInt(text.split("/")[0],10)   
        let num2=parseInt(text.split("/")[0],10);  
        let num=num1/num2;
        if (num<0.8){
            return <span className="Red">{text}</span>
        }
        if (num>0.95){
            return <span className="Orange">{text}</span>
        }else{
            return <span>{text}</span>
        }
    }}
    ,
    {
      title: '满意度',
      dataIndex: 'manyidu',
      key: 'manyidu',
      
      render:text=>{
        let num=parseInt(text,10)   //将其解析成10进制
        if (num<80){
            return <span className="Red">{text}</span>
        }
        if (num>95){
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
      dataIndex: 'class',
      key: 'class',
    },
    {
      title: '状态',
      dataIndex: 'state',
      key: 'state',
    },
    {
      title: '开课时间',
      dataIndex: 'opentime',
      key: 'opentime',
    },
    {
      title: '教学组负责人',
      dataIndex: 'teacher',
      key: 'teacher',
    },
    {
      title: '上课率',
      dataIndex: 'shangkelv',
      key: 'shangkelv',
    },
    {
      title: '作业提交率',
      dataIndex: 'homework',
      key: 'homework',
    },
    {
      title: '被点评情况',
      dataIndex: 'dianping',
      key: 'dianping',
    },
    {
      title: '打卡率',
      dataIndex: 'daka',
      key: 'daka',
    },
    {
      title: '满意度',
      dataIndex: 'manyidu',
      key: 'manyidu',
    },
  ]