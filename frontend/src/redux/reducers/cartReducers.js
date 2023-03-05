import * as actionTypes from '../constants/cartConstants'

export const cartReducer = (state = { cartItems: [] }, action ) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            const item = action.payload
            const existingItem = state.cartItems.find(x => x.id === item.id)
            if (existingItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(x => x.id === existingItem.id ? item : x)
                }
            }
            else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item]
                }
            }
        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(x => x.id !== action.payload)
            }
        case actionTypes.QUANTITY_UPDATE:
            const updatedProduct = action.payload
            return {
                ...state,
                cartItems: state.cartItems.map((item) =>
                item.product === updatedProduct._id ? {...item, quantity: item.quantity - updatedProduct.quantitySelected } : item)
            }
        case actionTypes.RESET_CART:
            return {
                ...state,
                cartItems: state.cartItems.map(item => ({
                    ...item,
                    quantitySelected: 0
                })),
                cartQuantity: 0
            }
        default:
            return state
    }
}