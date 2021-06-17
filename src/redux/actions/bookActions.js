import { SEARCH_BOOK } from '../types';

export const SearchBook = (searchValue) => {
    return {
        type: SEARCH_BOOK, payload: searchValue
    }
}