import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk'
import { 
    handleAuthCanceled,
    handleAuthFailed,
    googleLogout,
} from '../googleAuth';

import {
    GOOGLE_LOGIN_CANCELLED,
    GOOGLE_LOGIN_FAILED,
    GOOGLE_LOGOUT,
} from '../types';

const INITIAL_STATE = {
    accessToken: null,
    loggedIn: false
}

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

describe('testing google Authentication', () => {

    const store = mockStore(INITIAL_STATE)

    it('testing Google Auth cancelled', () => {
        store.dispatch(handleAuthCanceled())
        const actions = store.getActions()
        
        let expectedPayload = { type: GOOGLE_LOGIN_CANCELLED, payload: false }
        expect(actions[0]).toEqual(expectedPayload)
    })

    it('testing Google Auth failed', () => {
        store.dispatch(handleAuthFailed())
        const actions = store.getActions()

        let expectedPayload = { type: GOOGLE_LOGIN_FAILED, payload: false }
        expect(actions[1]).toEqual(expectedPayload)
    })

    it('testing Google logout', () => {
        store.dispatch(googleLogout())
            .then(() => {
                const actions = store.getActions()
                let expectedPayload = { type: GOOGLE_LOGOUT, payload: {accessToken: null, loggedIn: false }}
                expect(actions[2]).toEqual(expectedPayload)
            })

    })
})
