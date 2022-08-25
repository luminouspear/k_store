import * as actionTypes from '../constants/faqConstants'

export const getFAQsReducer = (state = { faqData: [] }, action) => {

    switch (action.type) {
        case actionTypes.GET_FAQS_REQUEST:
            return {
                faqLoading: true,
                faqData: []
            }
        case actionTypes.GET_FAQS_SUCCESS:
            return {

                faqLoading: false,
                faqData: action.payload
            }
        case actionTypes.GET_FAQS_FAIL:
            return {
                faqLoading: false,
                faqError: action.payload
            }
        default:
            return state

    }
}
