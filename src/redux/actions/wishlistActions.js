import {
    ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST, MAKE_IS_IN_WISHLIST_TRUE,
    MAKE_WISHLIST_BOOK_ISINCART_FALSE
} from '../types';


export const AddToWishlist = (book) => {
    return {
        type: ADD_TO_WISHLIST, payload: book
    }
};

export const MakeIsInWishlistTrue = (id) => {
    return {
        type: MAKE_IS_IN_WISHLIST_TRUE, payload: id
    }
};

export const WishlistBookIsInCartFalse = (id) => {
    return {
        type: MAKE_WISHLIST_BOOK_ISINCART_FALSE, payload: id
    }
};

export const RemoveFromWishlist = (id) => {
    return {
        type: REMOVE_FROM_WISHLIST, payload: id
    }
};