import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import io from 'socket.io-client'
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

const socketUrl = process.env.NODE_ENV === 'production' ? 'https://www.simcoestitchcraft.com' : 'http://localhost:5005';


//Create a websocket connection
const socket = io(socketUrl);

//Listen for quantityUpdated event on the websocket connection
socket.on('quantityUpdated', (data) => {
    console.log('Quantity updated: ', data)
    // Dispatch an action to update teh quantity on the redux store.

    store.dispatch({type: 'UPDATE_QUANTITY', payload: data})
})

export default store;