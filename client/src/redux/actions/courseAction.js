import { postDataAPI, getDataAPI } from '../../helpers/ferchData';
import { GLOBALTYPES } from './globalTypes';
import { errorMessage, successMessage } from '../../components/utilities/Toastify';


export const COURSE_TYPES = {
    COURSE_CREATE: "COURSE_CREATE",
    EDIT_COURSE: "EDIT_COURSE",
    DELETE_COURSE: "DELETE_COURSE",
    GET_COURSE: "GET_COURSE",
}

export const createCourse = (data) => async (dispatch) => {
    try {
        dispatch({ type: GLOBALTYPES.LOAD, payload: { sendData: true } });
        const res = await postDataAPI("createCourse", data);
        successMessage(res.data.message);
        dispatch({ type: GLOBALTYPES.LOAD, payload: {} });
    } catch (err) {
        console.log(err.message);
        errorMessage(err.response.data.message)
        dispatch({ type: GLOBALTYPES.LOAD, payload: {} });
    }
}

export const getCourse = (data) => async (dispatch) => {
    try {
        dispatch({ type: GLOBALTYPES.LOAD, payload: { wait: true } });
        const res = await getDataAPI(`${data}`);
        dispatch({
            type: COURSE_TYPES.GET_COURSE, payload: {
                singleCourse: res.data.course,
                channell: res.data.channell
            }
        });
        dispatch({ type: GLOBALTYPES.LOAD, payload: {} });
    } catch (err) {
        console.log(err.message);
        errorMessage(err.response.data.message)
        dispatch({ type: GLOBALTYPES.LOAD, payload: {} });
    }
}

export const editCourse = (data, id) => async (dispatch) => {
    dispatch({ type: COURSE_TYPES.EDIT_COURSE, payload: { id } });
    try {
        dispatch({ type: GLOBALTYPES.LOAD, payload: { sendData: true } });
        const res = await postDataAPI("editCourse", data);
        successMessage(res.data.message);
        dispatch({ type: GLOBALTYPES.LOAD, payload: {} });
    } catch (err) {
        console.log(err.message);
        errorMessage(err.response.data.message)
        dispatch({ type: GLOBALTYPES.LOAD, payload: {} });
    }
}

export const deleteCourse = (id) => async (dispatch) => {
    dispatch({ type: COURSE_TYPES.DELETE_COURSE, payload: { id } });
    try {
        dispatch({ type: GLOBALTYPES.LOAD, payload: { wait: true } });
        const res = await postDataAPI("deleteCourse", { courseId: id });
        successMessage(res.data.message);
        dispatch({ type: GLOBALTYPES.LOAD, payload: {} });
    } catch (err) {
        console.log(err.message);
        errorMessage(err.response.data.message)
        dispatch({ type: GLOBALTYPES.LOAD, payload: {} });
    }
}