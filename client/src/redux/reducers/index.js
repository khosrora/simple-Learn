import { combineReducers } from "redux";
import Alert from "./alertReducer"
import User from "./authReducer"
import Categories from "./categoriesReducer"

export default combineReducers({
    Alert,
    User,
    Categories
})