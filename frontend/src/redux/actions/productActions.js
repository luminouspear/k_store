import * as actionTypes from '../constants/productConstants'
import axios from 'axios'

export const getProducts = () =>
    async (dispatch) => {

        const API_URL = 'http://localhost:5005/'
        try {
            dispatch({ type: actionTypes.GET_PRODUCTS_REQUEST })

            // const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts")
            const { data } = await axios.get(`${API_URL}api/products`)

            dispatch({
                type: actionTypes.GET_PRODUCTS_SUCCESS,
                payload: data
            })
        }
        catch (error) {
            dispatch({
                type: actionTypes.GET_PRODUCTS_FAIL,
                payload: error.response && error.response.data.message ?
                    error.response.data.message
                    : error.message
            })
        }
    }


export const getProductDetails = (id) => async (dispatch) => {
    const API_URL = 'http://localhost:5005/'
    try {
        dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_REQUEST })

        const { data } = await axios.get(`${API_URL}products/${id}`)

        dispatch({
            type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS,
            payload: data
        })
    }
    catch (error) {
        dispatch({
            type: actionTypes.GET_PRODUCT_DETAILS_FAIL,
            payload: error.response && error.response.data.message ?
                error.response.data.message
                : error.message
        })
    }
}

export const removeProductDetauls = () => (dispatch) => {

    dispatch({
        type: actionTypes.GET_PRODUCT_DETAILS_RESET
    })
}