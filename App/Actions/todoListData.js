import {
    AsyncStorage
} from 'react-native';

import {
    GET_TODO_DATA,
    SET_TODO_DATA,
    ERASE_TODO_DATA,
    DELETE_TODO_ITEM,
    RETURN_EMPTY_TODO
} from './types';

import { List } from 'immutable';


export const getToDoListData = () => async dispatch => {
    // AsyncStorage.clear()
    var todoData = await AsyncStorage.getItem('todo_data')
    if (todoData !== null){
        todoData = JSON.parse(todoData)
        dispatch({ type: GET_TODO_DATA, payload: todoData })
    }
}


export const updateToDoItem = (idx, contentText) => async dispatch => {
    var todoData = await AsyncStorage.getItem('todo_data')
    todoData = JSON.parse(todoData)
    var updatedList = [...todoData]
    updatedList[idx].content = contentText
    dispatch({ type: SET_TODO_DATA, payload: updatedList })
    await AsyncStorage.setItem('todo_data', JSON.stringify(updatedList))
}


export const addToDoItem = (todoData) => async dispatch => {
    var updatedList = []
    let todoDataList = await AsyncStorage.getItem('todo_data')
    if (todoDataList){
        todoDataList = JSON.parse(todoDataList)
        todoDataList.push(todoData)
        updatedList = todoDataList
    } else {
        updatedList.push(todoData)
    }

    await AsyncStorage.setItem('todo_data', JSON.stringify(updatedList))
    dispatch({ type: SET_TODO_DATA, payload: updatedList })
}


export const deleteToDoItem = (index, todoList) => async dispatch => {
    if (index > -1) {
        let todoData = [...todoList]
        todoData.splice(index, 1)
        dispatch({ type: DELETE_TODO_ITEM, payload: todoData })
        await AsyncStorage.setItem('todo_data', JSON.stringify(todoData))
    }   
}


export const eraseToDoData = () => async dispatch => {
    await AsyncStorage.clear()
    dispatch({ type: ERASE_TODO_DATA, payload: [] })
}
