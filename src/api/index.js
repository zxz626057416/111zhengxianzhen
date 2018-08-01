// import axios from 'axios';
// import * as ActionTypes from '../const/actionTypes';


// export function getuser(next) {
//   next({
//     type: ActionTypes.FETCH_GITHUB_USER_REQ
//   });
//   axios({
//     method: 'POST',
//     url: `http://xly-wkop.xiaoniangao.cn/getUserInfo`,

//     headers: { 'content-type': 'application/x-www-form-urlencoded' },

//     data: {
//       mid: '001'
//     }
//   }).then(res => {
//     next({
//       type: ActionTypes.FETCH_GITHUB_USER_SUC,
//       data: res.data.data
//     });
//   })
//     .catch(err => {
//       console.log(err);
//       next({
//         type: ActionTypes.FETCH_USERINFO_FAI,
//       });
//     });
// }

// export function getlesson(next) {
//   next({
//     type: ActionTypes.FETCH_LESSONINFO_REQ
//   });
//   axios({
//     method: 'post',
//     url: `http://xly-wkop.xiaoniangao.cn/getLessonInfo`,
//     headers: { 'content-type': 'application/x-www-form-urlencoded' },

//     data: {
//       mid: '001'
//     }

//   }).then(res => {
//     next({
//       type: ActionTypes.FETCH_LESSONINFO_SUC,
//       data: res.data.data
//     });
//   })
//     .catch(err => {
//       console.log(err);
//       next({
//         type: ActionTypes.FETCH_LESSONINFO_FAI
//       });
//     });
// }




