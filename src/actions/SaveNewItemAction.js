import firebase from 'firebase';
import {
    ITEM_GUARDADO,
} from './TYPE';

export function guardarItem(item) { 
    const { itemNombre, itemSerial, itemDescripcion, fechaEscogida } = item;   
    return function (dispatch) {
            firebase.database().ref(`inventario/${item.itemSerial}`).set({
                itemNombre, 
                itemSerial, 
                itemDescripcion,
                fechaExpiracion: fechaEscogida
            });
            dispatch({ type: ITEM_GUARDADO });
    };
}
// export function guardarItem(item) {
//     return function (dispatch) {

//     };
// }
