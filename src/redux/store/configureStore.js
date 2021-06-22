import { createStore, combineReducers } from 'redux';
import throttle from 'lodash/throttle';
import bookReducer from "../reducers/bookReducer";
import cartReducer from "../reducers/cartReducer";
import wishlistReducer from "../reducers/wishlistReducer";
import { loadState, saveState } from './localStorage';

const configureStore = () => {
    const persistedState = loadState();
    const store = createStore(
        combineReducers({
            books: bookReducer,
            cart: cartReducer,
            wishlist: wishlistReducer
        }),
        persistedState,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

    store.subscribe(throttle(() => {
        saveState({
            cart: store.getState().cart,
            wishlist: store.getState().wishlist
        })
    }, 1000))

    return store;
}

export default configureStore;