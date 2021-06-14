import { ADD_TO_CART, DELETE_BOOK_FROM_CART, CLEAR_CART } from "../types";


export const AddToCart = (book) => {
    return {
        type: ADD_TO_CART, payload: book
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