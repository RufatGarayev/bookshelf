import {
    ADD_TO_COMPARE, REMOVE_FROM_COMPARE,
    MAKE_IS_IN_COMPARE_TRUE_IN_COMPARE, MAKE_COMPARE_BOOK_ISINCART_FALSE
} from '../types';

const initialState = {
    compare: []
};

const compareReducer = (state = initialState, action) => {
    switch (action.type) {
        // Adding book to Compare
        case ADD_TO_COMPARE:
            return {
                ...state, compare: [...state.compare, action.payload]
            };

        // Making book's isInCompare true in the Compare
        case MAKE_IS_IN_COMPARE_TRUE_IN_COMPARE:
            return {
                ...state,
                compare: state.compare.map(book => book.id === action.payload ?
                    { ...book, isInCompare: book.isInCompare = true } : book)
            };

        // Making book's isInCart false that's in Compare
        case MAKE_COMPARE_BOOK_ISINCART_FALSE:
            return {
                ...state,
                compare: state.compare.map(book => book.id === action.payload ?
                    { ...book, isInCart: book.isInCart = false } : book)
            };

        // Removing book from Compare
        case REMOVE_FROM_COMPARE:
            return {
                ...state, compare: state.compare.filter(book => book.id !== action.payload)
            };

        default:
            return state;
    }
}

export default compareReducer;