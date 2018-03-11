import {
    AsyncStorage
} from 'react-native';

import {
    GET_TODO_DATA,
    RETURN_EMPTY_TODO
} from './types';


export const getToDoListData = () => async dispatch => {
    var todo_data = await AsyncStorage.getItem('todo_data')
    if (todo_data !== null){
        todo_data = JSON.parse(todo_data)
        dispatch({ type: GET_TODO_DATA, payload: todo_data })
    } else {
        dispatch({ type: RETURN_EMPTY_TODO, payload: [] })
    }
}


export const setToDoListData = (todo_data) => async dispatch => {
    await AsyncStorage.setItem('todo_data', JSON.stringify(todo_data))
}

/*
todo_data = [
    {
        content: "Need to buy biscuits",
        media_attached_uri: null,
        completed: false,
        ends_at: new Date()
    }
]
*/

