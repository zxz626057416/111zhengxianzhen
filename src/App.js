import React, { Component } from 'react';
import MessageItemView from './header.js';
import ZhutiView from './Zhuti.js';
import Footerview from './Footer.js';
import './App.css';


  const icon1=require('./img/21.png')      
  const icon2=require('./img/22.png')
  const icon3=require('./img/1.jpg')
  const icon4=require('./img/2.jpg')
  const icon5=require('./img/3.jpg')
  const icon6=require('./img/4.jpeg')
  const icon7=require('./img/5.jpg')
  const icon8=require('./img/6.jpeg')
  const icon9=require('./img/11.png')
  const icon10=require('./img/12.png')
  const icon11=require('./img/13.png')
  const icon12=require('./img/14.png')






  class App extends Component {
    constructor(props){
      super(props);
      this.state={




        top:[
            {
                content:'微信(5)',
            },
            {
                icon:icon1,
            },
            {
                icon:icon2,
            }
        ],
    




        message:[
          {
            icon : icon3,
            name : '小年糕前端训练营',
            description : '靳博宇:好的好的，知道了！',
            time : '上午8:13' 
          },
          {
            icon : icon4,
            name : '亲亲宝贝(家人群)',
            description : '大哥:吃饭了吗？',
            time : '上午8:20' 
          },
          {
            icon : icon5,
            name : '15级 工程制图',
            description : '张浩:老师饶命啊，多给点平时成绩！',
            time : '上午9:58' 
          },
          {
            icon : icon6,
            name : '高中-吴磊',
            description : '下午有时间吗？一起玩去！',
            time : '上午10:53' 
          },
          {
            icon : icon7,
            name : '大班长-胡静',
            description : '下午3:40开班会，不能到先联系我',
            time : '中午12:33' 
          },
          {
            icon : icon7,
            name : '表妹-康佳',
            description : '我今天晚上去你那吃饭！',
            time : '下午2:33' 
          },
        ],



        
        nav:[
          {
            icon : icon9,
            title : '微信'
          },
          {
            icon : icon10,
            title : '通讯录'
          },
          {
            icon : icon11,
            title : '发现'
          },
          {
            icon : icon12,
            title : '我'
          }
        ],
        showDailog : false
      }
    }










    
    onItemClick=(message)=>{
      console.log(message);
      this.setState({
        showDailog:true  //控制DialogView的显示
      })
    }











    renderHeader=()=>{
        const topmsg=this.state.top.map((item,idx)=>{
            return <MessageItemView key={idx} item={item} onClick={this.onItemClick}/>
          });
          return topmsg;
        }


  
    renderZhuti=()=>{
      const zhutimsg=this.state.message.map((item,idx)=>{
        return <ZhutiView key={idx} item={item} onClick={this.onItemClick}/>
      });
      return zhutimsg;
    }


 
     renderFooter = () => {
        const footermsg = this.state.nav.map((item,idx) => {
          return <Footerview key={idx} item={item}  onClick={this.onItemClick}/>
       });
       return footermsg;
     }


  render() {
    return (
        <div id="one333">
            <header>
                {
                    this.renderHeader()
                }
            </header>
            {
                this.renderZhuti()
            }
            <footer>
            {
                this.renderFooter()
            }
            </footer>
        </div>
    );
  }
  
}

export default App;
