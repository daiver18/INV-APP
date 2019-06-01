import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGIN_PROCESSES
} from '../actions/TYPE';

const initialState = {
    token: null,
    error: '',
    buttonState: false
};

const auth = function (state = initialState, actions) {
    switch (actions.type) {
        case LOGIN_PROCESSES:
            return {
                ...state, buttonState: true
            };
        case LOGIN_SUCCESS:
            return {
                // eslint-disable-next-line max-len
                ...state, token: actions.payload, buttonState: false
            };
        case LOGIN_FAIL: 
            return {
                ...state, error: 'usuario o contraseña incorrectos', buttonState: false
            };
        default:
            return state;
    }
};

export default auth;
