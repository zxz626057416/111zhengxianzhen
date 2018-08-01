// import * as ActionTypes from '../const/actionTypes';
// import * as api from '../api';




// const initstate = {
//   LessonsList: [],
//   historyLessonsList: []
// }

// export default function tablelist(state = initstate, action) {
//   switch (action.type) {
//     case ActionTypes.FETCH_LESSONINFO_SUC:
//       let LessonsList = action.data.currentLessonsList;
//       let historyLessonsList1 = action.data.historyLessonsList;
//       // console.log("lesson is here`")
//       // console.log(LessonsList,'+',historyLessonsList1);
//       // console.log("lesson is here")
//       return Object.assign({}, state, { LessonsList, historyLessonsList:historyLessonsList1 })
//     // case ActionTypes.FETCH_USERINFO_SUC:
//     //   let historyLessonsList = action.next.data.historyLessonsList;
//     //   return Object.assign({}, state, { historyLessonsList })
//     default:
//       return state;
//   }
// } 