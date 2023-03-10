import * as actionTypes from '../constants/productConstants'
import axios from 'axios'

const PORT = 5005
const API_URL = process.env.NODE_ENV === 'production' ? 'https://www.simcoestitchcraft.com/' : `http://localhost:${PORT}/`

export const getProducts = () =>
    async (dispatch) => {

        // const PORT = 5005

        // const API_URL = `http://localhost:${PORT}/`
        try {
            dispatch({ type: actionTypes.GET_PRODUCTS_REQUEST })

            // const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts")
            const queryString = `?cacheBust=${Date.now()}`
            const { data } = await axios.get(`${API_URL}api/products${queryString}`)

            dispatch({
                type: actionTypes.GET_PRODUCTS_SUCCESS,
                payload: data
            })
        }
        catch (error) {
            dispatch({
                type: actionTypes.GET_PRODUCTS_FAIL,
                payload: error.response && error.response.data && error.response.data.message ?
                    error.response.data.message
                    : error.message
            })
        }
    }


export const getProductDetails = (id) => async (dispatch) => {

    // const PORT = 5005
    // const API_URL = `http://localhost:${PORT}/`

    try {
        dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_REQUEST })
        console.log("Starting request for product details")

        const { data } = await axios.get(`${API_URL}api/products/${id}`)

        console.log(`Returned data: ${data}`)
        dispatch({
            type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS,
            payload: data
        })
    }
    catch (error) {
        dispatch({
            type: actionTypes.GET_PRODUCT_DETAILS_FAIL,
            payload: error.response && error.response.data && error.response.data.message ?
                error.response.data.message
                : error.message
        })
    }
}

export const removeProductDetails = () => (dispatch) => {

    dispatch({
        type: actionTypes.GET_PRODUCT_DETAILS_RESET
    })
}