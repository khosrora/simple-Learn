import { postDataAPI, getDataAPI } from '../../helpers/ferchData';
import { GLOBALTYPES } from './globalTypes';
import { errorMessage, successMessage } from '../../components/utilities/Toastify';

export const CHANNELL_TYPES = {
    EDIT_CHANNELL: "EDIT_CHANNELL",
    GET_CHANNELL: "GET_CHANNELL",
}


export const requestChannel = (data) => async (dispatch) => {
    try {
        dispatch({ type: GLOBALTYPES.LOAD, payload: { sendData: true } });
        const res = await postDataAPI("requestChannel", data);
        successMessage(res.data.message);
        dispatch({ type: GLOBALTYPES.LOAD, payload: {} });
    } catch (err) {
        console.log(err.message);
        errorMessage(err.response.data.message)
        dispatch({ type: GLOBALTYPES.LOAD, payload: {} });
    }
}

export const editChanellRequest = (data) => async (dispatch) => {
    dispatch({ type: CHANNELL_TYPES.EDIT_CHANNELL });
    try {
        dispatch({ type: GLOBALTYPES.LOAD, payload: { sendData: true } });
        const res = await postDataAPI("editChannell", data);
        successMessage(res.data.message);
        dispatch({ type: GLOBALTYPES.LOAD, payload: {} });
    } catch (err) {
        console.log(err.message);
        errorMessage(err.response.data.message)
        dispatch({ type: GLOBALTYPES.LOAD, payload: {} });
    }
}

export const getSingleChannell = (data) => async (dispatch) => {
    try {
        dispatch({
            type: CHANNELL_TYPES.GET_CHANNELL, payload: {}
        });
        dispatch({ type: GLOBALTYPES.LOAD, payload: { fetching: true } });
        const res = await getDataAPI(`${data}`);
        dispatch({
            type: CHANNELL_TYPES.GET_CHANNELL, payload: {
                singleChannell: res.data.channell,
                admin: res.data.admin
            }
        });
        successMessage(res.data);
        dispatch({ type: GLOBALTYPES.LOAD, payload: {} });
    } catch (err) {
        console.log(err.message);
        errorMessage(err.response.data.message)
        dispatch({ type: GLOBALTYPES.LOAD, payload: {} });
    }
}