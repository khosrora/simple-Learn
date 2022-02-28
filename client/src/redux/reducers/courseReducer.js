import { COURSE_TYPES } from './../actions/courseAction';




const initialState = [];
const publicReducer = (state = initialState, action) => {
    switch (action.type) {
        case COURSE_TYPES.GET_COURSE:
            return action.payload
        default:
            return state;
    }
}

export default publicReducer;