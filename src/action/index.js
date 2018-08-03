import axios from 'axios';
import * as actionTypes from '../const/actionTypes';

export function fetchUserInfo(mid) {
  
  return {

    SERVER_API: {
      type: actionTypes.FETCH_USER_INFO,
      endpoint: '/getUserInfo',
      params: {
        mid
      }
    }
  }
}

export function fetchLessonInfo(mid) {
  return {
    SERVER_API: {
      type: actionTypes.FETCH_LESSON_INFO,
      endpoint: '/getLessonInfo',
      params: {
        mid
      }
    }
  }
}

export function fetchClassInfo(mid) {

  return {
    SERVER_API: {
      type: actionTypes.FETCH_CLASS_INFO,
      endpoint: '/getClassInfo',
      params: {
        id:mid
      }
    }
  }
}


export function fetchStudentInfo(mid) {
  return {
    SERVER_API: {
      type: actionTypes.FETCH_STUDENT_INFO,
      endpoint: '/getStudentList',
      params: {
        mid
      }
    }
  }
}



