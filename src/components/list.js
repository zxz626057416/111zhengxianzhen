import React,{Component} from  'react'

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