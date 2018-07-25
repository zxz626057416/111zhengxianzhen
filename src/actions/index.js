import { ADD_TODO, CHANGE_TODO_STATUS } from '../const/ActionTypes'
import icon from '../resource/icon.png'
export function addTodo(text){
  return {
    type: ADD_TODO,
    text
  }
}
messagesss = {
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
}
export function changeStatus(idx, isCompleted){
  return {
    type: CHANGE_TODO_STATUS,
    idx,
    isCompleted
  }
}