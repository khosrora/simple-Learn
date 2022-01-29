import { GLOBALTYPES } from '../actions/globalTypes';




const initialState = {};
const categoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GLOBALTYPES.CATEGORIES:
            return action.payload;
        default:
            return state;
    }
}

export default categoriesReducer;