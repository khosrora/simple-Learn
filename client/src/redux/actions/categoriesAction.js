import { errorMessage } from '../../components/utilities/Toastify';
import { getDataAPI } from '../../helpers/ferchData';
import { GLOBALTYPES } from './globalTypes';




export const getAllCategories = () => async (dispatch) => {
    try {
        dispatch({ type: GLOBALTYPES.LOAD, payload: { wait: true } })
        const res = await getDataAPI("/getAllCategories");
        dispatch({
            type: GLOBALTYPES.CATEGORIES,
            payload: {
                categories: res.data.categories
            }
        })
        dispatch({ type: GLOBALTYPES.LOAD, payload: {} })

    } catch (err) {
        console.log(err.message);
        dispatch({ type: GLOBALTYPES.LOAD, payload: {} });
        errorMessage(err.message)
    }
}