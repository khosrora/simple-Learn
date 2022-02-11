import { combineReducers } from "redux";
import Load from "./loadReducer"
import User from "./authReducer"
import Categories from "./categoriesReducer"

export default combineReducers({
    Load,
    User,
    Categories,
})