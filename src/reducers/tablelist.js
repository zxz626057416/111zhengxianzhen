import * as ActionTypes from '../const/actionTypes';


const initstate = {
    LessonsList: [],
    historyLessonsList: []
}


export default function tablelist(state = initstate, action) {

    switch (action.type) {

        case ActionTypes.FETCH_LESSONINFO_SUC:
         
        case ActionTypes.FETCH_USERINFO_SUC:
         
        default:
            return state;
    }
} 1