import { combineReducers } from 'redux';
import auth from './loginReducer';
import itemNuevo from './SaveNewItemReducer';

export default combineReducers({
    auth,
    itemNuevo
});
