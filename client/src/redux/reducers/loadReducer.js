import { GLOBALTYPES } from '../actions/globalTypes';




const initialState = {};
const loadReducer = (state = initialState, action) => {
    switch (action.type) {
        case GLOBALTYPES.LOAD:
            return action.payload;
        default:
            return state;
    }
}

export default loadReducer;