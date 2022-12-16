import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

//Reducers
import { cartReducer } from './reducers/cartReducers'
import { getProductsReducer, getProductDetailsReducer } from './reducers/productReducers'
import { getGalleryDetailsReducer, getGalleryReducer } from './reducers/galleryReducers'
import { getFAQsReducer } from './reducers/faqReducers';

const reducer = combineReducers({
    cart: cartReducer,
    getProducts: getProductsReducer,
    getGalleries: getGalleryReducer,
    getGalleryDetails: getGalleryDetailsReducer,
    getProductDetails: getProductDetailsReducer,
    getFAQs: getFAQsReducer

})

// Helps make async requests in actions
const middleware = [thunk]

const cartFromLocalStorage = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []

const INITIAL_STATE = {
    cart: {
        cartItems: cartFromLocalStorage
    }
}

const store = createStore(
    reducer,
    INITIAL_STATE,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;