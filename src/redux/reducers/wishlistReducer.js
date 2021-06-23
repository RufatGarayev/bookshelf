import {
    ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST,
    MAKE_WISHLIST_BOOK_ISINCART_FALSE, MAKE_IS_IN_WISHLIST_TRUE_IN_WISHLIST
} from '../types';

const initialState = {
    wishlist: []
};

const wishlistReducer = (state = initialState, action) => {
    switch (action.type) {
        // Adding book to Wishlist
        case ADD_TO_WISHLIST:
            return {
                ...state, wishlist: [...state.wishlist, action.payload]
            };
        
        // Making book's isInWishlist true in the Wishlist
        case MAKE_IS_IN_WISHLIST_TRUE_IN_WISHLIST:
            return {
                ...state,
                wishlist: state.wishlist.map(book => book.id === action.payload ?
                    { ...book, isInWishlist: book.isInWishlist = true } : book)
            };

        // Making book's isInCart false that's in Wishlist
        case MAKE_WISHLIST_BOOK_ISINCART_FALSE:
            return {
                ...state,
                wishlist: state.wishlist.map(book => book.id === action.payload ?
                    { ...book, isInCart: book.isInCart = false } : book)
            };

        // Removing book from Wishlist
        case REMOVE_FROM_WISHLIST:
            return {
                ...state, wishlist: state.wishlist.filter(book => book.id !== action.payload)
            };

        default:
            return state;
    }
}

export default wishlistReducer;