import { GLOBALTYPES } from '../actions/globalTypes';
import { CHANNELL_TYPES } from "../actions/channellAction"



const initialState = {};
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case GLOBALTYPES.USER:
            return action.payload;
        case CHANNELL_TYPES.EDIT_CHANNELL:
            return {
                ...state,
                channell: null,
            };
        default:
            return state;
    }
}

export default userReducer;