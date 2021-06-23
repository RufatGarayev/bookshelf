import {
    ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST,
    MAKE_WISHLIST_BOOK_ISINCART_FALSE, MAKE_IS_IN_WISHLIST_TRUE_IN_WISHLIST
} from '../types';


export const AddToWishlist = (book) => {
    return {
        type: ADD_TO_WISHLIST, payload: book
    }
};

export const MakeIsInWishlistTrueInWishlist = (id) => {
    return {
        type: MAKE_IS_IN_WISHLIST_TRUE_IN_WISHLIST, payload: id
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