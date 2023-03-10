import * as actionTypes from '../constants/cartConstants'
import axios from 'axios'

export const addToCart = (id, quantity) => async (dispatch, getState) => {
    // console.log(`id: ${id} quantity: ${quantity}`)

    const { data } = await axios.get(`/api/products/${id}`)

    dispatch({
        type: actionTypes.ADD_TO_CART,
        payload: {
            id: data._id,
            itemTitle: data.itemTitle,
            itemAlt: data.itemAlt,
            itemPrice: data.itemPrice,
            itemDescription: data.itemDescription,
            itemSize: data.itemSize,
            shippingPrice: data.shippingPrice,
            productUrl: data.productUrl,
            imageUrl: data.imageUrl,
            images: data.images,
            quantitySelected: quantity,
            quantity: quantity
        }
    })

    //Get items in cart and add them to localStorage
    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart = (id) => async (dispatch, getState) => {
    // console.log(`remove from cart running ${id}`)
    dispatch(
        {
            type: actionTypes.REMOVE_FROM_CART,
            payload: id,

        })


    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems))

}

export const resetCartQuantity = () => ({
    type: actionTypes.RESET_CART
})