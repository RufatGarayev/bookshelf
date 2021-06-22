import {
    ADD_TO_CART, DELETE_BOOK_FROM_CART, CLEAR_CART,
    INCREASE_BOOK_COUNT, DECREASE_BOOK_COUNT, MAKE_ISINCART_TRUE
} from '../types';

const initialState = {
    cart: []
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        // Adding book to cart
        case ADD_TO_CART:
            let alreadyExists = false;

            state.cart.forEach((book) => {
                if (book.id === action.payload.id) {
                    alreadyExists = true;
                    book.count++;
                }
            });

            if (!alreadyExists) {
                state.cart.push({ ...action.payload, count: 1 });
            }

            return {
                ...state
            }

        // Making isInCart True
        case MAKE_ISINCART_TRUE:
            return {
                ...state,
                cart: state.cart.map(book => book.id === action.payload ? { ...book, isInCart: book.isInCart = true } : book)
            }

        // Deleting book from cart
        case DELETE_BOOK_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(book => book.id !== action.payload)
            };

        // Clearing the cart
        case CLEAR_CART:
            return {
                ...state,
                cart: []
            };

        // Increasing book count
        case INCREASE_BOOK_COUNT:
            return {
                ...state,
                cart: state.cart.map(book => book.id === action.payload ? { ...book, count: book.count + 1 } : book)
            }

        // Decreasing book count
        case DECREASE_BOOK_COUNT:
            return {
                ...state,
                cart: state.cart.map(book => book.id === action.payload ? { ...book, count: book.count - 1 } : book)
            }

        default:
            return state;
    }
};

export default cartReducer;