import { DeleteData, GLOBALTYPES } from '../actions/globalTypes';
import { COURSE_TYPES } from './../actions/courseAction';




const initialState = [];
const publicReducer = (state = initialState, action) => {
    switch (action.type) {
        case GLOBALTYPES.PUBLIC:
            return action.payload;
        case COURSE_TYPES.EDIT_COURSE:
            return {
                ...state,
                topCourses: DeleteData(state.topCourses, action.payload.id)
            }
        case COURSE_TYPES.DELETE_COURSE:
            return {
                ...state,
                topCourses: DeleteData(state.topCourses, action.payload.id)
            }
        default:
            return state;
    }
}

export default publicReducer;