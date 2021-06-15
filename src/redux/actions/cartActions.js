import { ADD_TO_CART, DELETE_BOOK_FROM_CART, CLEAR_CART, 
INCREASE_BOOK_COUNT, DECREASE_BOOK_COUNT, MAKE_ISINCART_TRUE } from "../types";


export const AddToCart = (book) => {
    return {
        type: ADD_TO_CART, payload: book
    }
};

export const MakingIsInCartTrue = (id) => {
    return {
        type: MAKE_ISINCART_TRUE, payload: id
    }
};

export const DeleteBook = (id) => {
    return {
        type: DELETE_BOOK_FROM_CART, payload: id
    }
};

export const ClearCart = () => {
    return {
        type: CLEAR_CART
    }
};

export const IncreaseBookCount = (id) => {
    return {
        type: INCREASE_BOOK_COUNT,
        payload: id
    }
};

export const DecreaseBookCount = (id) => {
    return {
        type: DECREASE_BOOK_COUNT,
        payload: id
    }
};