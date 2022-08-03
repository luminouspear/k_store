import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

//Reducers
import { cartReducer } from './reducers/cartReducers'
import { getProductsReducer, getProductDetailsReducer  } from './reducers/productReducers'

const reducer = combineReducers({
    cart: cartReducer,
    getProducts: getProductsReducer,
    getProductDetails: getProductDetailsReducer
})

// Helps make async requests in actions
const middleware = [thunk]

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;