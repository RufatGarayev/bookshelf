import { BooksData } from '../../components/Books/BooksData';

const initialState = {
    books: BooksData
};

const bookReducer = (state = initialState, action) => {
    switch (action.type) {
        
        default:
            return state;
    }
};

export default bookReducer;