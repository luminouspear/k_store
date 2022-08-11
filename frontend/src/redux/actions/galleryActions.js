import * as actionTypes from '../constants/galleryConstants'
import axios from 'axios'

export const getGallery = () =>
    async (dispatch) => {

        const API_URL = 'http://localhost:5000/'
        try {
            dispatch({
                type: actionTypes.GET_GALLERY_REQUEST
            })

            // const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts")
            const { data } = await axios.get(`${API_URL}api/gallery`)

            dispatch({
                type: actionTypes.GET_GALLERY_SUCCESS,
                payload: data
            })
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
