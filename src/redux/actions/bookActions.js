import {
    SORT_BOOKS_BY_NAME_AND_PRICE, MAKE_ISINCART_FALSE,
    MAKE_IS_IN_WISHLIST_FALSE, MAKE_IS_IN_COMPARE_FALSE
} from '../types';


export const SortBook = (selectValue) => {
    return {
        type: SORT_BOOKS_BY_NAME_AND_PRICE, payload: selectValue
    }
};

export const MakeIsInCartFalse = (id) => {
    return {
        type: MAKE_ISINCART_FALSE, payload: id
    }
};

export const MakeIsInWishlistFalse = (id) => {
    return {
        type: MAKE_IS_IN_WISHLIST_FALSE, payload: id
    }
};

export const MakeIsInCompareFalse = (id) => {
    return {
        type: MAKE_IS_IN_COMPARE_FALSE, payload: id
    }
};