import {
    AsyncStorage
} from 'react-native';
import _ from 'lodash';
import {
    GET_TODO_DATA,
    SET_TODO_DATA,
    ERASE_TODO_DATA,
    DELETE_TODO_ITEM,
    RETURN_EMPTY_TODO
} from './types';


export const getToDoListData = () => async dispatch => {
    var todo_data = await AsyncStorage.getItem('todo_data')
    if (todo_data !== null){
        todo_data = JSON.parse(todo_data)
        dispatch({ type: GET_TODO_DATA, payload: todo_data })
    }
}


export const addToDoItem = (todo_data) => async dispatch => {
    var updated_list = []
    let todo_data_list = await AsyncStorage.getItem('todo_data')
    if (todo_data_list){
        todo_data_list = JSON.parse(todo_data_list)
        todo_data_list.push(todo_data)
        updated_list = todo_data_list

    } else {
        updated_list.push(todo_data)
    }

    await AsyncStorage.setItem('todo_data', JSON.stringify(updated_list))
    dispatch({ type: SET_TODO_DATA, payload: updated_list })
}


export const deleteToDoItem = (item) => async dispatch => {
    
    dispatch({ type: DELETE_TODO_ITEM, payload: [] })
}

export const eraseToDoData = () => async dispatch => {
    await AsyncStorage.clear()
    dispatch({ type: ERASE_TODO_DATA, payload: [] })
}
