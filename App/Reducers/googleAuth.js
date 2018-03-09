import {
    GOOGLE_LOGIN_SUCCESS,
    GOOGLE_LOGIN_CANCELLED,
    GOOGLE_LOGIN_FAILED,
    GOOGLE_LOGOUT
} from '../Actions/types';


export const INITIAL_STATE = {
    accessToken: null,
    loggedIn: false
}


export default ( state=INITIAL_STATE, action ) => {
    switch (action.type) {
        case GOOGLE_LOGIN_SUCCESS:
            return {
                ...state,
                ...action.payload
            }
        case GOOGLE_LOGIN_CANCELLED:
            return {...state, loggedIn: action.payload}
        case GOOGLE_LOGIN_FAILED:
            return {...state, loggedIn: action.payload}
        case GOOGLE_LOGOUT:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}