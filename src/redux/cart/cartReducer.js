import CartActionTypes from "./cartActionTypes";
import { addItemToCart } from "./cartUtils";

const INITIAL_STATE = {
    hidden: true,
    items: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case CartActionTypes.ADD_CART_ITEM:
            return {
                ...state,
                items: addItemToCart(state.items, action.payload)
            }
        default:
            return state;
    }
}

export default cartReducer;
