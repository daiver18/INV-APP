import { 
    ITEM_GUARDADO,
    ITEM_NO_GUARDADO
} from '../actions/TYPE';

const initialState = {
    mensaje: ''
};
const itemNuevo = function (state = initialState, actions) {
    console.log(actions.payload);
    switch (actions.type) {
        case ITEM_GUARDADO:
            return {
                state
            };
        case ITEM_NO_GUARDADO:
            return {
                state
            };
        default:
            return state;
    }
};
export default itemNuevo;
