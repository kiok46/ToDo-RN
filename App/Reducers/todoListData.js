import {
    GET_TODO_DATA,
    SET_TODO_DATA,
    ERASE_TODO_DATA,
    DELETE_TODO_ITEM,
    RETURN_EMPTY_TODO
} from '../Actions/types';


export const INITIAL_STATE = {
    todo_data: []
}


export default ( state=INITIAL_STATE, action ) => {
    switch (action.type) {
        case GET_TODO_DATA:
            return { 
                ...state,
                todo_data: action.payload
            }
        case RETURN_EMPTY_TODO:
            return { 
                ...state,
                todo_data: action.payload
            }
        case SET_TODO_DATA:
            return {
                ...state,
                todo_data: action.payload
            }
        case ERASE_TODO_DATA:
            return {
                ...state,
                todo_data: action.payload
            } 
        case DELETE_TODO_ITEM:
            return {
                ...state,
                todo_data: action.payload
            }
        default:
            return state
    }
}