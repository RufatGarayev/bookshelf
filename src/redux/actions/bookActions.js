import { SORT_BOOKS_BY_NAME_AND_PRICE, MAKE_ISINCART_FALSE } from '../types';

export const SortBook = (selectValue) => {
    return {
        type: SORT_BOOKS_BY_NAME_AND_PRICE, payload: selectValue
    }
}

export const MakeIsInCartFalse = (id) => {
    return {
        type: MAKE_ISINCART_FALSE, payload: id
    }
}