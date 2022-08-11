import * as actionTypes from '../constants/galleryConstants'

export const getGalleryReducer = (state = { gallery: [] }, action) => {
    console.log(`gallery reducer running... with ${action.type}`)

    switch (action.type) {
        case actionTypes.GET_GALLERY_REQUEST:
            return {
                galleryLoading: true,
                gallery: []
            }
        case actionTypes.GET_GALLERY_SUCCESS:
            console.log(`getGallerySuccess: ${action.payload}`)
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
            console.log(`gallery reducer exiting default with action ${action.type}`)
            return state

    }
}
