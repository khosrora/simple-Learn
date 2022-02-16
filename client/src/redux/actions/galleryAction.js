import { postDataAPI } from '../../helpers/ferchData';
import { GLOBALTYPES } from './globalTypes';
import { errorMessage, successMessage } from '../../components/utilities/Toastify';


export const GALLERY_TYPES = {
    CREATE_IMAGE: "CREATE_IMAGE",
    DELETE_IMAGE: 'DELETE_IMAGE',
}

export const galleryCreate = (data) => async (dispatch) => {
    try {
        dispatch({ type: GLOBALTYPES.LOAD, payload: { sendData: true } });
        const res = await postDataAPI("galleryCreate", data);
        successMessage(res.data.message);
        dispatch({
            type: GLOBALTYPES.CREATE_IMAGE, payload: {
                payload: { ...res.data }
            }
        });
        dispatch({ type: GLOBALTYPES.LOAD, payload: {} });
    } catch (err) {
        console.log(err.message);
        errorMessage(err.response.data.message)
        dispatch({ type: GLOBALTYPES.LOAD, payload: {} });
    }
}

export const getGalleries = (id) => async (dispatch) => {
    try {
        dispatch({ type: GLOBALTYPES.LOAD, payload: { wait: true } });
        const res = await postDataAPI("getAllImages", { userId: id });
        dispatch({
            type: GLOBALTYPES.GALLERY, payload: {
                allGallery: res.data.userGallery
            }
        });
        successMessage(res.data.message);
        dispatch({ type: GLOBALTYPES.LOAD, payload: {} });
    } catch (err) {
        console.log(err.message);
        errorMessage(err.response.data.message)
        dispatch({ type: GLOBALTYPES.LOAD, payload: {} });
    }
}
export const changeImageChannell = (data) => async (dispatch) => {
    try {
        dispatch({ type: GLOBALTYPES.LOAD, payload: { sendData: true } });
        const res = await postDataAPI("ghangeImageChannell", data);
        successMessage(res.data.message);
        dispatch({ type: GLOBALTYPES.LOAD, payload: {} });
    } catch (err) {
        console.log(err.message);
        errorMessage(err.response.data.message)
        dispatch({ type: GLOBALTYPES.LOAD, payload: {} });
    }
}

export const deleteImage = (id) => async (dispatch) => {
    try {
        dispatch({ type: GLOBALTYPES.LOAD, payload: { fetching: true } });
        const res = await postDataAPI("deleteImage", { id });
        successMessage(res.data.message);
        dispatch({ type: GALLERY_TYPES.DELETE_IMAGE, payload: id })
        dispatch({ type: GLOBALTYPES.LOAD, payload: {} });
    } catch (err) {
        console.log(err.message);
        errorMessage(err.response.data.message)
        dispatch({ type: GLOBALTYPES.LOAD, payload: {} });
    }
}