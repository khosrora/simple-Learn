import { postDataAPI } from '../../helpers/ferchData';
import { GLOBALTYPES } from './globalTypes';
import { errorMessage, successMessage } from '../../components/utilities/Toastify';


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