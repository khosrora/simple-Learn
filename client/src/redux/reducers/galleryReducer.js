import { DeleteData, GLOBALTYPES } from '../actions/globalTypes';
import { GALLERY_TYPES } from './../actions/galleryAction';




const initialState = [];
const galleryReducer = (state = initialState, action) => {
    switch (action.type) {
        case GLOBALTYPES.GALLERY:
            return action.payload;
        case GALLERY_TYPES.DELETE_IMAGE:
            return {
                ...state,
                allGallery: DeleteData(state.allGallery, action.payload)
            };
        default:
            return state;
    }
}

export default galleryReducer;