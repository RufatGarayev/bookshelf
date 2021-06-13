import { ADD_TO_CART } from "../types";


export const AddToCart = (book) => {
    return {
        type: ADD_TO_CART, payload: book
    }
};