import { BooksData } from '../../components/Books/BooksData';
import { SORT_BOOKS_BY_NAME_AND_PRICE } from '../types';

const initialState = {
    books: BooksData
};

const bookReducer = (state = initialState, action) => {
    switch (action.type) {
        case SORT_BOOKS_BY_NAME_AND_PRICE:
            const sortedBooks = state.books.slice();

            if (action.payload === "nameA") {
                sortedBooks.sort((a, b) => (a.title > b.title ? 1 : -1));
            } else if (action.payload === "nameZ") {
                sortedBooks.sort((a, b) => (a.title < b.title ? 1 : -1));
            } else if (action.payload === "lowPrice") {
                sortedBooks.sort((a, b) => (a.price > b.price ? 1 : -1));
            } else if (action.payload === "highPrice") {
                sortedBooks.sort((a, b) => (a.price < b.price ? 1 : -1));
            } else {
                sortedBooks.sort((a, b) => (a.id > b.id ? 1 : -1));
            }

            return {
                ...state,
                books: sortedBooks
            }


        default:
            return state;
    }
};

export default bookReducer;