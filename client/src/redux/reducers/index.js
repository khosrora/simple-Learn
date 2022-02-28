import { combineReducers } from "redux";
import Load from "./loadReducer"
import User from "./authReducer"
import Categories from "./categoriesReducer"
import gallery from './galleryReducer';
import publicData from './publicReducer';
import channell from './channellReducer';
import course from './courseReducer';


export default combineReducers({
    Load,
    User,
    Categories,
    gallery,
    publicData,
    channell,
    course
})