import firebase from 'firebase';
import axios from 'axios';
import {
    LOGIN_SUCCESS,
    LOGIN_FAIL
} from './TYPE';

export function loginSuccess(userName, password) {    
    return function (dispatch) {     
        axios.post('https://us-central1-inv-app-cfce0.cloudfunctions.net/login', { userName, password })
            .then(response => {
                firebase.auth().signInWithCustomToken(response.data.token)
                    .then(() => dispatch({ type: LOGIN_SUCCESS, payload: response.data.token }));
            })
            .catch(() => dispatch({ type: LOGIN_FAIL, payload: 'login fallido' }));
    };
}
