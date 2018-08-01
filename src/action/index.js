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




