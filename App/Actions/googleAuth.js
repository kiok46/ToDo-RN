import {
    AsyncStorage
} from 'react-native'

import {
    GOOGLE_LOGIN_SUCCESS,
    GOOGLE_LOGIN_CANCELLED,
    GOOGLE_LOGIN_FAILED,
    GOOGLE_LOGOUT
} from './types';

import GoogleAuthCredentials from '../Config/googleAuth';


const isLoggedIn = () => async dispatch => {
    let token = await AsyncStorage.getItem('google_login_token');
    token = JSON.parse(token)
    if (token) {
        dispatch({ type: GOOGLE_LOGIN_SUCCESS, payload: {accessToken: token, loggedIn: true} });
    } else {
        dispatch({ type: GOOGLE_LOGIN_FAILED, payload: false });
    }
}

const googleLogin = () => async dispatch => {
    try {
        const result = await Expo.Google.logInAsync(GoogleAuthCredentials);
        
        if (result.type === 'success') {
            handleAuthSuccess(dispatch, result.accessToken)
        } else {
            handleAuthCanceled(dispatch)
        }
    } catch(e) {
        console.log(e)
        handleAuthFailed(dispatch)
    }
}

const googleLogout = () => async dispatch => {
    await AsyncStorage.removeItem('google_login_token');
    dispatch({ type: GOOGLE_LOGOUT, payload: {token: null, loggedIn: false} });
}

const handleAuthSuccess = async (dispatch, token) => {
    await AsyncStorage.setItem('google_login_token', JSON.stringify(token));
    dispatch({ type: GOOGLE_LOGIN_SUCCESS, payload: {accessToken: token, loggedIn: true} });
}

const handleAuthCanceled = async (dispatch) => {
    dispatch({type: GOOGLE_LOGIN_CANCELLED, payload: false });
}

const handleAuthFailed = async (dispatch) => {
    dispatch({ type: GOOGLE_LOGIN_FAILED, payload: false });
}

export {
    isLoggedIn,
    googleLogin,
    googleLogout,
}