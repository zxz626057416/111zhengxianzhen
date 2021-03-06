import * as actionTypes from '../const/actionTypes'
import tablelist from './tablelist'
import icon from '../resource/icon.png'
import * as api from '../api';


const init_state = {
  text1_2: [
  ],
  text2_2: [
  ],
  text3_2: [
  ],

  text3_1:[

  ],

  dataSource:[
  ],

  real:[],

  virtual:[],
  
  dataSource1:[
  ],

  dataSource2:[
  ],

  dataSource3:[
  ],

  dataSource4:[
  ],



}


export default function TodoList(state = init_state, action) {
  switch (action.type) {
    case actionTypes.FETCH_USER_INFO_SUC:
          const newState1 = {...state};
          const temp1=[
            {content:action.response.data.mid},
            {content:action.response.data.learningLesson},
            {content:action.response.data.enterDate}
          ]
          const temp2=[
            {content:action.response.data.history_pay
            },
            {content:action.response.data.totalLearningDays
            },
            {content:action.response.data.lastLoginDate
            }
          ]
          const temp3=[
            {content:action.response.data.tel
            },
          ]
          newState1.text1_2=temp1
          newState1.text2_2=temp2
          newState1.text3_2=temp3
          return newState1;


          case actionTypes.FETCH_LESSON_INFO_SUC:
          const newState2 = {...state};
          const temp2_1=action.response.data.currentLessonsList
          const temp2_2=action.response.data.historyLessonsList
          const banji=action.response.data.currentLessonsList[0].classInfo.name
          const laoshi=action.response.data.currentLessonsList[0].teacherInfo.nick
          const banji1=action.response.data.currentLessonsList[1].classInfo.name
          const laoshi1=action.response.data.currentLessonsList[1].teacherInfo.nick
          const banji2_1=action.response.data.historyLessonsList[0].classInfo.name
          const laoshi2_1=action.response.data.historyLessonsList[0].teacherInfo.nick
          newState2.dataSource=temp2_1
          newState2.dataSource1=temp2_2
          newState2.dataSource[0].classInfo=banji
          newState2.dataSource[0].teacherInfo=laoshi
          newState2.dataSource[1].classInfo=banji1
          newState2.dataSource[1].teacherInfo=laoshi1
          newState2.dataSource1[0].classInfo=banji2_1
          newState2.dataSource1[0].teacherInfo=laoshi2_1
         
          return newState2;











          case actionTypes.FETCH_CLASS_INFO_SUC:

          
          const newState3={...state}
          console.log(action.response.data)
          newState3.real=action.response.data.basic_info.real_teacher
          newState3.virtual=action.response.data.basic_info.virtual_teacher

          newState3.text3_1=action.response.data.basic_info
          newState3.dataSource2=action.response.data.list
         
          console.log("123456")
          console.log("123456")
          console.log("123456")
          return newState3;

















          case actionTypes.FETCH_STUDENT_INFO_SUC:
          const newState4={...state}
          // console.log(action.response.data)
          // console.log(action.response.data)
          newState4.dataSource4=action.response.data
          // console.log("123456")
          // console.log("123456")
          // console.log("123456")
          // console.log("123456")
          // console.log("123456")
          return newState4;
        




    default:
      return state;
  }
}

