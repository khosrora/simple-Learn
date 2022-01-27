import { combineReducers } from "redux";
import Alert from "./alertReducer"
import User from "./authReducer"

export default combineReducers({
    Alert,
    User
})