import { ADD_TO_CART, DELETE_BOOK_FROM_CART, CLEAR_CART, 
INCREASE_BOOK_COUNT, DECREASE_BOOK_COUNT } from '../types';

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

        case INCREASE_BOOK_COUNT:
            const increaseBookCount = state.cart.map(book => {
                if (book.id === action.payload) {
                    book = {...book, count: book.count + 1}
                }

                return book;
            })

            return {
                ...state,
                cart: increaseBookCount
            };

        case DECREASE_BOOK_COUNT:
            const decreaseBookCount = state.cart.map(book => {
                if (book.id === action.payload) {
                    book = {...book, count: book.count - 1}
                }

                return book;
            })

            return {
                ...state,
                cart: decreaseBookCount
            };

        default:
            return state;
    }
};

export default cartReducer;