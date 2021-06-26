import booksData from '../../books.json';
import {
    SORT_BOOKS_BY_NAME_AND_PRICE, SORT_BOOKS_BY_GENRE, MAKE_ISINCART_FALSE,
    MAKE_IS_IN_WISHLIST_FALSE, MAKE_IS_IN_COMPARE_FALSE, SEARCH_BOOK
} from '../types';

const initialState = {
    books: booksData.books
};

const bookReducer = (state = initialState, action) => {
    switch (action.type) {
        // Sorting books by name and price
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

        // Sorting books by genre 
        case SORT_BOOKS_BY_GENRE:
            const sortBooksByGenre = action.payload === "All" ? initialState.books :
                initialState.books.filter((book) => book.genre.indexOf(action.payload) !== -1)

            return {
                ...initialState,
                books: sortBooksByGenre
            }

        // Making isInCart False
        case MAKE_ISINCART_FALSE:
            return {
                ...state,
                books: state.books.map(book => book.id === action.payload ?
                    { ...book, isInCart: book.isInCart = false } : book)
            }

        // Making isInWishlist False
        case MAKE_IS_IN_WISHLIST_FALSE:
            return {
                ...state,
                books: state.books.map(book => book.id === action.payload ?
                    { ...book, isInWishlist: book.isInWishlist = false } : book)
            };

        // Making isInCompare False
        case MAKE_IS_IN_COMPARE_FALSE:
            return {
                ...state,
                books: state.books.map(book => book.id === action.payload ?
                    { ...book, isInCompare: book.isInCompare = false } : book)
            };

        // Search book 
        case SEARCH_BOOK:
            return {
                ...initialState,
                books: initialState.books.filter(book => (
                    book.title.toLowerCase().indexOf(action.payload.toLowerCase()) !== -1
                ))
            }


        default:
            return state;
    }
};

export default bookReducer;