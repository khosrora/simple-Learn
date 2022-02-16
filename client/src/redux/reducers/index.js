import { combineReducers } from "redux";
import Load from "./loadReducer"
import User from "./authReducer"
import Categories from "./categoriesReducer"
import gallery from './galleryReducer';

export default combineReducers({
    Load,
    User,
    Categories,
    gallery
})