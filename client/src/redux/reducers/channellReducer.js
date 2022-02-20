import { CHANNELL_TYPES } from "../actions/channellAction"



const initialState = {};
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANNELL_TYPES.GET_CHANNELL:
            return action.payload;
        default:
            return state;
    }
}

export default userReducer;