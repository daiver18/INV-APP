import firebase from 'firebase';
import axios from 'axios';
import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGIN_PROCESSES
} from './TYPE';

export function login(userName, password, navigation) {    
    return function (dispatch) {
        dispatch({ type: LOGIN_PROCESSES });
        axios.post('https://us-central1-inv-app-cfce0.cloudfunctions.net/login', { userName, password })
            .then(response => {
                const token = response.data.token;
                firebase.auth().signInWithCustomToken(token);
                dispatch({ type: LOGIN_SUCCESS, payload: token });
                navigation.navigate('inventario');
            })
            .catch(() => dispatch({ type: LOGIN_FAIL }));
    };
}
