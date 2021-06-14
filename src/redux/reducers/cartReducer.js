import { ADD_TO_CART, DELETE_BOOK_FROM_CART, CLEAR_CART } from '../types';

const initialState = {
    cart: []
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state, cart: [...state.cart, action.payload]
            };

        case DELETE_BOOK_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(book => book.id !== action.payload)
            };

        case CLEAR_CART:
            return {
                ...state,
                cart: []
            };

        default:
            return state;
    }
};

export default cartReducer;