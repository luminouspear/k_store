import * as actionTypes from '../constants/faqConstants'
import axios from 'axios'

const PORT = 5005
const API_URL = process.env.NODE_ENV === 'production' ? 'https://www.simcoestitchcraft.com/' : `http://localhost:${PORT}/`

export const getFAQs = () =>
    async (dispatch) => {
        // console.log("getFAQs redux action running")

        // const PORT = 5005
        // const API_URL = `http://localhost:${PORT}/`
        try {
            dispatch({
                type: actionTypes.GET_FAQS_REQUEST
            })

            const { data } = await axios.get(`${API_URL}api/faqs`)

            dispatch({
                type: actionTypes.GET_FAQS_SUCCESS,
                payload: data
            })
        }
        catch (error) {
            dispatch({
                type: actionTypes.GET_FAQS_FAIL,
                payload: error.response && error.response.data && error.response.data.message ?
                    error.response.data.message
                    : error.message
            })
        }
    }
