import { ADD_TODO, CHANGE_TODO_STATUS } from '../const/ActionTypes'
import icon from '../resource/icon.png'
export default function todoList(state = { list: []},action){
    this.state = {
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


    const messageViews = this.state.messages.map((item,i) => {
      return <MessageItemView item={item} indx={i}/>
    })

  
  switch(action.type){
    case ADD_TODO:{
      const newList = state.list.slice();
      newList.unshift({
        text: action.text,
        isComplated: false
      });
      const newState = { ...state };
      newState.list = newList;
      return newState;
    }
    case CHANGE_TODO_STATUS: {
      const newList = state.list.slice();
      const { idx, isCompleted } = action;
      newList[idx] = {...newList[idx], isCompleted };
      const newState = { ...state };
      newState.list = newList;
      return newState;
    }
    default:
    return state;
  }
}