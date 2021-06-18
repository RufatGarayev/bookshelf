import { SORT_BOOKS_BY_NAME_AND_PRICE } from '../types';

export const SortBook = (selectValue) => {
    return {
        type: SORT_BOOKS_BY_NAME_AND_PRICE, payload: selectValue
    }
}