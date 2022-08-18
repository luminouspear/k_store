import * as actionTypes from '../constants/galleryConstants'

export const getGalleryReducer = (state = { gallery: [] }, action) => {

    switch (action.type) {
        case actionTypes.GET_GALLERY_REQUEST:
            return {
                galleryLoading: true,
                gallery: []
            }
        case actionTypes.GET_GALLERY_SUCCESS:
            return {

                galleryLoading: false,
                gallery: action.payload
            }
        case actionTypes.GET_GALLERY_FAIL:
            return {
                galleryLoading: false,
                galleryError: action.payload
            }
        default:
            return state

    }
}
