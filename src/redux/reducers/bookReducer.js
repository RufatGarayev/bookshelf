import { BooksData } from '../../components/Books/BooksData';
import { SEARCH_BOOK } from '../types';

const initialState = {
    books: BooksData,
    searchhBook: []
};

const bookReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_BOOK:
            let filteredBook = state.books.filter(book => (
                book.title.toLowerCase().indexOf(action.payload.toLowerCase()) !== -1
            ))
            
            return {...state, searchhBook: [...state.cart, filteredBook]};

        default:
            return state;
    }
};

export default bookReducer;