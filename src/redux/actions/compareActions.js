import {
    ADD_TO_COMPARE, REMOVE_FROM_COMPARE,
    MAKE_IS_IN_COMPARE_TRUE_IN_COMPARE, MAKE_COMPARE_BOOK_ISINCART_FALSE
} from '../types';


export const AddToCompare = (book) => {
    return {
        type: ADD_TO_COMPARE, payload: book
    }
};

export const MakeIsInCompareTrueInCompare = (id) => {
    return {
        type: MAKE_IS_IN_COMPARE_TRUE_IN_COMPARE, payload: id
    }
};

export const CompareBookIsInCartFalse = (id) => {
    return {
        type: MAKE_COMPARE_BOOK_ISINCART_FALSE, payload: id
    }
};

export const RemoveFromCompare = (id) => {
    return {
        type: REMOVE_FROM_COMPARE, payload: id
    }
};