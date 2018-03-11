import { combineReducers } from 'redux';
import GoogleAuth from './googleAuth';
import ToDoListData from './todoListData';


export default combineReducers({
    GoogleAuth, ToDoListData
})