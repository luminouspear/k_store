import * as actionTypes from '../constants/galleryConstants'
import axios from 'axios'

const PORT = 5005
const API_URL = process.env.NODE_ENV === 'production' ? 'https://www.simcoestitchcraft.com/' : `http://localhost:${PORT}/`

export const getGalleries = () => async (dispatch) => {

    // const PORT = 5005

        // const API_URL = `http://localhost:${PORT}/`
        try {
            dispatch({
                type: actionTypes.GET_GALLERY_REQUEST
            })
            const { data } = await axios.get(`${API_URL}api/gallery`)

            dispatch({
                type: actionTypes.GET_GALLERY_SUCCESS,
                payload: data
            })
            // console.log(data)
        }
        catch (error) {
            dispatch({
                type: actionTypes.GET_GALLERY_FAIL,
                payload: error.response && error.response.data.message ?
                    error.response.data.message
                    : error.message
            })
        }
    }

    export const getGalleryDetails = (id) => async (dispatch) => {
    // const API_URL = 'http://localhost:5005/'
    try {
        dispatch({ type: actionTypes.GET_GALLERY_DETAILS_REQUEST })
        // console.log("Starting request for gallery details")

        const { data } = await axios.get(`${API_URL}api/gallery/${id}`)

        dispatch({
            type: actionTypes.GET_GALLERY_DETAILS_SUCCESS,
            payload: data
        })
    }
    catch (error) {
        dispatch({
            type: actionTypes.GET_GALLERY_DETAILS_FAIL,
            payload: error.response && error.response.data.message ?
                error.response.data.message
                : error.message
        })
    }
}