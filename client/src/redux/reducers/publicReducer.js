import { GLOBALTYPES } from '../actions/globalTypes';




const initialState = [];
const publicReducer = (state = initialState, action) => {
    switch (action.type) {
        case GLOBALTYPES.PUBLIC:
            return action.payload;
        default:
            return state;
    }
}

export default publicReducer;