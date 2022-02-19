import { getDataAPI } from '../../helpers/ferchData';
import { GLOBALTYPES } from './globalTypes';
import { errorMessage } from './../../components/utilities/Toastify';

export const CHANNELL_TYPES = {
    CHANNELL_GET: "CHANNELL_GET",
}

export const getChannells = (data) => async (dispatch) => {
    try {
        dispatch({ type: GLOBALTYPES.LOAD, payload: { waitChannell: true } });
        const res = await getDataAPI("publicApi", data);
        console.log(res.data.channels);
        dispatch({
            type: GLOBALTYPES.PUBLIC, payload: {
                topChannells: res.data.channels
            }
        });
        dispatch({ type: GLOBALTYPES.LOAD, payload: { waitChannell: false } });
    } catch (err) {
        console.log(err.message);
        dispatch({ type: GLOBALTYPES.LOAD, payload: { waitChannell: false } });
        errorMessage(err.response.data.message)
    }
}