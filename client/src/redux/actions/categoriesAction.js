import { errorMessage } from '../../components/utilities/Toastify';
import { getDataAPI } from '../../helpers/ferchData';
import { GLOBALTYPES } from './globalTypes';




export const getAllCategories = () => async (dispatch) => {
    try {
        dispatch({ type: GLOBALTYPES.ALERT, payload: { laod: true } })
        const res = await getDataAPI("/getAllCategories");
        dispatch({
            type: GLOBALTYPES.CATEGORIES,
            payload: {
                categories: res.data.categories
            }
        })
        dispatch({ type: GLOBALTYPES.ALERT, payload: {} })

    } catch (err) {
        console.log(err.message);
        dispatch({ type: GLOBALTYPES.ALERT, payload: { load: false } });
        errorMessage(err.message)
    }
}