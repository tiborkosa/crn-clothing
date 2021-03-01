//import { increaseQuantity } from './cart.action';
import CartActionTypes from './cart.types';
import { addItemToCart, removeFromCart, decreaseQuantity } from './cart.util';

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const cartReducer = ( state = INITIAL_STATE, action ) => {
    switch(action.type){
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
            case CartActionTypes.ADD_ITEM:
                return {
                    ...state,
                    cartItems: addItemToCart(state.cartItems, action.payload)
                };
            case CartActionTypes.REMOVE_ITEM:
                return {
                    ...state,
                    cartItems: removeFromCart(state.cartItems, action.payload)
                };
            case CartActionTypes.DECREASE_QUANTITY:
                return {
                    ...state,
                    cartItems: decreaseQuantity(state.cartItems, action.payload)
                };
            default:
                return state;
    }
}

export default cartReducer;
