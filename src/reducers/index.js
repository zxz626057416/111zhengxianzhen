import * as actionTypes from '../const/actionTypes'
import icon from '../resource/icon.png'
// import {DIALOG_SHOW_STATUS} from '../const/dialog_show_state'
const init_state = {




  dataSource: [
    {
      key: '1',
      class: '高级班',
      state: '进行中',
      opentime: '2017-04-20',
      teacher: '小白老师',
      shangkelv: '3/21',
      homework: '67.98%',
      dianping: '87.98%',
      daka: '3/21',
      manyidu: '90.14%',
    },
    {
      key: '2',
      class: '进阶班',
      state: '进行中',
      opentime: '2017-04-21',
      teacher: '小白老师',
      shangkelv: '5/21',
      homework: '76.89%',
      dianping: '31.87%',
      daka: '5/21',
      manyidu: '98.14%',
    },
    {
      key: '3',
      class: '提高班',
      state: '进行中',
      opentime: '2017-04-22',
      teacher: '小白老师',
      shangkelv: '13/21',
      homework: '13.89%',
      dianping: '21.76%',
      daka: '13/21',
      manyidu: '88.01%',
    },
    {
      key: '4',
      class: '入门班',
      state: '进行中',
      opentime: '2017-04-23',
      teacher: '小白老师',
      shangkelv: '20/21',
      homework: '98.45%',
      dianping: '98.67%',
      daka: '20/21',
      manyidu: '30.10%',
    },
    {
      key: '5',
      class: '体验班',
      state: '进行中',
      opentime: '2017-04-2',
      teacher: '小白老师',
      shangkelv: '21/21',
      homework: '31.54%',
      dianping: '78.76%',
      daka: '21/21',
      manyidu: '94.10%',
    },
  ],



  ccolumns: [
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
      title: '老师',
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
  ],


  ccolumns1: [
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
  ],

  dataSource1: [
    {
      key: '1',
      class: '高级班',
      state: '已结束',
      opentime: '2017-04-30',
      teacher: '小白老师',
      shangkelv: '21/21',
      homework: '8/10',
      dianping: '10/10',
      daka: '5/21',
      manyidu: '90.00%',
    }
  ],



  text1_1: [
    {
      content: '学员编号：'
    },
    {
      content: '在学课程：'
    },
    {
      content: '入学时间：'
    },
  ],




  text1_2: [
    {
      content: 'MID33900056321'
    },
    {
      content: '摄影课，绘画课'
    },
    {
      content: '2018-10-30'
    },
  ],






  text2_1: [
    {
      content: '历史付费：'
    },
    {
      content: '累计学习天数：'
    },
    {
      content: '最后登录时间：'
    },
  ],






  text2_2: [
    {
      content: '987'
    },
    {
      content: '456'
    },
    {
      content: '2018-10-30'
    },
  ],



  text3_1: [
    {
      content: '手机号码：'
    },
    {
      content: '微信号码：'
    },
    {
      content: '备注：'
    },
  ],



  text3_2: [
    {
      content: '12345678910'
    },

  ],




  messages: [
    {
      icon: icon,
      title: '小年糕',
      descript: 'hello 小年糕',
      time: '7-18 11:14'
    },
    {
      icon: icon,
      title: '小板凳',
      descript: 'hello 小板凳',
      time: '7-18 11:15',
    },
    {
      icon: icon,
      title: '小豆包',
      descript: 'hi 小豆包',
      time: '7-17 10:00',
    }
  ],
  botbar: [
    {
      icon: icon,
      title: '微信',
    },
    {
      icon: icon,
      title: '通讯录',
    },
    {
      icon: icon,
      title: '发现',
    },
    {
      icon: icon,
      title: '我',
    }
  ],
  isActive: true,
  idx: null,
}

export default function TodoList(state = init_state, action) {

  switch (action.type) {
    case actionTypes.IDEA:
    const newState1 = { ...state };
    newState1.isActive = false;
    return newState1;  
   

   
    case actionTypes.CLASS:
    const newState2 = { ...state };
    newState2.isActive = true;
    return newState2; 


    default:
      return state;
  }
}

